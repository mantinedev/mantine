#!/usr/bin/env tsx
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const REPO_ROOT = process.cwd();
const PUBLIC_DIR = path.join(REPO_ROOT, 'apps/mantine.dev/public');
const MCP_ENTRY = path.join(REPO_ROOT, 'packages/@mantine/mcp-server/cjs/index.cjs');
const STATIC_PORT = Number(process.env.MCP_SMOKE_PORT || 8787);
const STATIC_BASE_URL = `http://127.0.0.1:${STATIC_PORT}`;

function contentType(filePath: string) {
  if (filePath.endsWith('.json')) {
    return 'application/json; charset=utf-8';
  }

  if (filePath.endsWith('.md') || filePath.endsWith('.txt')) {
    return 'text/plain; charset=utf-8';
  }

  return 'application/octet-stream';
}

function sendRpcMessage(child: ReturnType<typeof spawn>, message: unknown) {
  if (!child.stdin) {
    throw new Error('MCP server stdin is not available');
  }

  child.stdin.write(`${JSON.stringify(message)}\n`);
}

function parseFrames(buffer: Buffer): { frames: any[]; rest: Buffer } {
  const frames: any[] = [];
  let cursor = 0;

  for (;;) {
    const newline = buffer.indexOf('\n', cursor);
    if (newline === -1) {
      break;
    }

    const line = buffer.subarray(cursor, newline).toString('utf8').trim();
    cursor = newline + 1;

    if (line.length > 0) {
      frames.push(JSON.parse(line));
    }
  }

  return { frames, rest: buffer.subarray(cursor) };
}

async function runSmokeTest() {
  if (!fs.existsSync(path.join(PUBLIC_DIR, 'mcp/index.json'))) {
    throw new Error(
      'Missing apps/mantine.dev/public/mcp/index.json. Run `npm run compile:mcp` first.'
    );
  }

  if (!fs.existsSync(MCP_ENTRY)) {
    throw new Error(
      'Missing packages/@mantine/mcp-server/cjs/index.cjs. Run `yarn exec tsx scripts/build mcp-server` first.'
    );
  }

  const staticServer = http.createServer((req, res) => {
    const requestPath = (req.url || '/').split('?')[0] || '/';
    const safePath = requestPath === '/' ? '/index.html' : requestPath;
    const resolvedPath = path.resolve(path.join(PUBLIC_DIR, `.${safePath}`));

    if (!resolvedPath.startsWith(path.resolve(PUBLIC_DIR))) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }

    if (!fs.existsSync(resolvedPath) || fs.statSync(resolvedPath).isDirectory()) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    res.setHeader('Content-Type', contentType(resolvedPath));
    fs.createReadStream(resolvedPath).pipe(res);
  });

  await new Promise<void>((resolve, reject) => {
    staticServer.once('error', reject);
    staticServer.listen(STATIC_PORT, '127.0.0.1', resolve);
  });

  const mcpServer = spawn('node', [MCP_ENTRY], {
    stdio: ['pipe', 'pipe', 'pipe'],
    env: {
      ...process.env,
      MANTINE_MCP_DATA_URL: `${STATIC_BASE_URL}/mcp`,
    },
  });

  const responses = new Map<number, any>();
  let buffer: Buffer = Buffer.alloc(0);

  mcpServer.stdout.on('data', (chunk: Buffer) => {
    buffer = Buffer.concat([buffer, chunk]);
    const parsed = parseFrames(buffer);
    buffer = parsed.rest;

    parsed.frames.forEach((frame) => {
      if (typeof frame.id === 'number') {
        responses.set(frame.id, frame);
      }
    });
  });

  mcpServer.stderr.on('data', (chunk: Buffer) => {
    process.stderr.write(chunk.toString('utf8'));
  });

  const waitForResponse = async (id: number, timeoutMs = 5000) => {
    const started = Date.now();

    while (Date.now() - started < timeoutMs) {
      const frame = responses.get(id);
      if (frame) {
        return frame;
      }

      await new Promise((resolve) => setTimeout(resolve, 20));
    }

    throw new Error(`Timeout waiting for response id=${id}`);
  };

  let nextId = 1;
  const callTool = async (name: string, args: Record<string, unknown>) => {
    const id = nextId;
    nextId += 1;

    sendRpcMessage(mcpServer, {
      jsonrpc: '2.0',
      id,
      method: 'tools/call',
      params: { name, arguments: args },
    });

    const response = await waitForResponse(id);

    if (response.error) {
      throw new Error(`tools/call ${name} failed: ${JSON.stringify(response.error)}`);
    }

    const textPayload = response.result?.content?.[0]?.text;
    const isError = Boolean(response.result?.isError);
    let payload: any = textPayload;

    if (!isError && typeof textPayload === 'string') {
      payload = JSON.parse(textPayload);
    }

    return { isError, payload, rawText: textPayload };
  };

  try {
    sendRpcMessage(mcpServer, {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2025-06-18',
        capabilities: {},
        clientInfo: { name: 'mcp-local-smoke', version: '1.0.0' },
      },
    });
    const initializeResponse = await waitForResponse(1);

    if (!initializeResponse.result?.serverInfo?.name) {
      throw new Error('Invalid initialize response');
    }

    if (initializeResponse.result.protocolVersion !== '2025-06-18') {
      throw new Error(`Unexpected protocolVersion: ${initializeResponse.result.protocolVersion}`);
    }

    sendRpcMessage(mcpServer, { jsonrpc: '2.0', method: 'notifications/initialized' });

    sendRpcMessage(mcpServer, { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} });
    const toolsResponse = await waitForResponse(2);
    const tools = toolsResponse.result?.tools || [];
    const toolNames = tools.map((tool: any) => tool.name);

    const expectedTools = [
      'search_docs',
      'get_item_doc',
      'get_item_props',
      'list_items',
      'get_api',
    ];
    if (toolNames.length !== expectedTools.length) {
      throw new Error(
        `Expected ${expectedTools.length} tools, got ${toolNames.length}: ${toolNames.join(', ')}`
      );
    }

    for (const requiredTool of expectedTools) {
      if (!toolNames.includes(requiredTool)) {
        throw new Error(`Missing tool in tools/list: ${requiredTool}`);
      }
    }

    nextId = 3;

    const hookDoc = await callTool('get_item_doc', { name: 'use-disclosure', kind: 'hook' });
    if (hookDoc.isError) {
      throw new Error('Expected use-disclosure to resolve; hooks are missing from the index');
    }
    if (hookDoc.payload.mode !== 'outline' || hookDoc.payload.item?.kind !== 'hook') {
      throw new Error(`Unexpected get_item_doc payload for use-disclosure: ${hookDoc.rawText}`);
    }
    if (!(hookDoc.payload.sections?.length >= 3)) {
      throw new Error(
        `Expected at least 3 sections for use-disclosure, got ${hookDoc.payload.sections?.length}`
      );
    }

    const formOutline = await callTool('get_item_doc', { name: 'useForm' });
    if (formOutline.isError) {
      throw new Error('Expected useForm to resolve; @mantine/form is missing from the index');
    }
    const outlineBytes = Buffer.byteLength(formOutline.rawText, 'utf8');
    if (outlineBytes < 900 || outlineBytes > 1600) {
      throw new Error(`Expected useForm outline near 1,261 bytes, got ${outlineBytes}`);
    }

    const formFull = await callTool('get_item_doc', { name: 'useForm', full: true });
    const fullBytes = Buffer.byteLength(formFull.rawText, 'utf8');
    if (fullBytes < 8000 || fullBytes < outlineBytes * 3) {
      throw new Error(`Expected full useForm doc to dwarf the outline, got ${fullBytes} bytes`);
    }

    const hookProps = await callTool('get_item_props', { name: 'use-disclosure' });
    if (hookProps.payload.kind !== 'signature') {
      throw new Error(
        `Expected use-disclosure props kind "signature", got ${hookProps.payload.kind}`
      );
    }

    const useFormApi = await callTool('get_api', { symbol: 'useForm' });
    if (useFormApi.payload.item?.id !== 'form-use-form') {
      throw new Error(
        `Expected get_api useForm to resolve form-use-form, got ${useFormApi.rawText}`
      );
    }
    if (useFormApi.payload.suggestedSection !== 'api-overview') {
      throw new Error(
        `Expected get_api useForm suggestedSection "api-overview", got ${useFormApi.payload.suggestedSection}`
      );
    }

    const typoDoc = await callTool('get_item_doc', { name: 'use-disclose' });
    if (!typoDoc.isError || !String(typoDoc.rawText).includes('Did you mean: use-disclosure')) {
      throw new Error(
        `Expected a "Did you mean" suggestion for use-disclose, got ${typoDoc.rawText}`
      );
    }

    const zodSearch = await callTool('search_docs', { query: 'validate a form with zod' });
    const topThreeSections = zodSearch.payload.slice(0, 3).map((hit: any) => hit.section);
    if (!topThreeSections.includes('zod')) {
      throw new Error(
        `Expected a "zod" section in the top 3 search_docs hits, got ${JSON.stringify(topThreeSections)}`
      );
    }

    const hookItems = await callTool('list_items', { kind: 'hook', limit: 1000 });
    if (hookItems.payload.length <= 80) {
      throw new Error(`Expected more than 80 hook items, got ${hookItems.payload.length}`);
    }
    if (!hookItems.payload.some((item: any) => item.id === 'hooks-use-disclosure')) {
      throw new Error('Expected hooks-use-disclosure in list_items kind=hook results');
    }

    const formItems = await callTool('list_items', { package: '@mantine/form', limit: 1000 });
    if (formItems.payload.length <= 14) {
      throw new Error(`Expected more than 14 @mantine/form items, got ${formItems.payload.length}`);
    }
    if (!formItems.payload.some((item: any) => item.id === 'form-use-form')) {
      throw new Error('Expected form-use-form in list_items package=@mantine/form results');
    }

    // oxlint-disable-next-line no-console
    console.log('mcp-local-smoke:ok');
  } finally {
    mcpServer.kill('SIGTERM');
    await new Promise((resolve) => setTimeout(resolve, 100));
    staticServer.close();
  }
}

runSmokeTest().catch((error) => {
  // oxlint-disable-next-line no-console
  console.error('mcp-local-smoke:failed', error);
  process.exit(1);
});
