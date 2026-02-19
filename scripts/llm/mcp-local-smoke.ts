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

  const body = JSON.stringify(message);
  const payload = `Content-Length: ${Buffer.byteLength(body, 'utf8')}\r\n\r\n${body}`;
  child.stdin.write(payload);
}

function parseFrames(buffer: Buffer<ArrayBufferLike>): {
  frames: any[];
  rest: Buffer<ArrayBufferLike>;
} {
  const frames: any[] = [];
  let cursor = 0;

  while (cursor < buffer.length) {
    const separator = buffer.indexOf('\r\n\r\n', cursor);
    if (separator === -1) {
      break;
    }

    const headers = buffer.subarray(cursor, separator).toString('utf8');
    const lengthMatch = headers.match(/Content-Length:\s*(\d+)/i);
    if (!lengthMatch) {
      break;
    }

    const contentLength = Number(lengthMatch[1]);
    const bodyStart = separator + 4;
    const bodyEnd = bodyStart + contentLength;

    if (buffer.length < bodyEnd) {
      break;
    }

    const body = buffer.subarray(bodyStart, bodyEnd).toString('utf8');
    frames.push(JSON.parse(body));
    cursor = bodyEnd;
  }

  return { frames, rest: buffer.subarray(cursor) };
}

async function runSmokeTest() {
  if (!fs.existsSync(path.join(PUBLIC_DIR, 'mcp/index.json'))) {
    throw new Error('Missing apps/mantine.dev/public/mcp/index.json. Run `npm run compile:mcp` first.');
  }

  if (!fs.existsSync(MCP_ENTRY)) {
    throw new Error('Missing packages/@mantine/mcp-server/cjs/index.cjs. Run `yarn exec tsx scripts/build mcp-server` first.');
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
  let buffer = Buffer.alloc(0) as Buffer<ArrayBufferLike>;

  mcpServer.stdout.on('data', (chunk: Buffer<ArrayBufferLike>) => {
    buffer = Buffer.concat([buffer, chunk]);
    const parsed = parseFrames(buffer);
    buffer = parsed.rest;

    parsed.frames.forEach((frame) => {
      if (typeof frame.id === 'number') {
        responses.set(frame.id, frame);
      }
    });
  });

  mcpServer.stderr.on('data', (chunk: Buffer<ArrayBufferLike>) => {
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

  try {
    sendRpcMessage(mcpServer, { jsonrpc: '2.0', id: 1, method: 'initialize', params: {} });
    const initializeResponse = await waitForResponse(1);

    if (!initializeResponse.result?.serverInfo?.name) {
      throw new Error('Invalid initialize response');
    }

    sendRpcMessage(mcpServer, { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} });
    const toolsResponse = await waitForResponse(2);
    const tools = toolsResponse.result?.tools || [];
    const toolNames = tools.map((tool: any) => tool.name);

    for (const requiredTool of ['list_items', 'get_item_doc', 'get_item_props', 'search_docs']) {
      if (!toolNames.includes(requiredTool)) {
        throw new Error(`Missing tool in tools/list: ${requiredTool}`);
      }
    }

    sendRpcMessage(mcpServer, {
      jsonrpc: '2.0',
      id: 3,
      method: 'tools/call',
      params: {
        name: 'list_items',
        arguments: { kind: 'component', query: 'button', limit: 5 },
      },
    });

    const listItemsResponse = await waitForResponse(3);
    const listItemsText = listItemsResponse.result?.content?.[0]?.text;
    const listItems = typeof listItemsText === 'string' ? JSON.parse(listItemsText) : [];

    if (!Array.isArray(listItems) || listItems.length === 0) {
      throw new Error('list_items returned no results');
    }

    sendRpcMessage(mcpServer, {
      jsonrpc: '2.0',
      id: 4,
      method: 'tools/call',
      params: {
        name: 'get_item_doc',
        arguments: { name: 'Button', kind: 'component' },
      },
    });

    const getItemDocResponse = await waitForResponse(4);
    const getItemDocText = getItemDocResponse.result?.content?.[0]?.text;
    const getItemDoc = typeof getItemDocText === 'string' ? JSON.parse(getItemDocText) : null;

    if (!getItemDoc?.item?.name || typeof getItemDoc?.markdown !== 'string') {
      throw new Error('get_item_doc returned invalid payload');
    }

    // eslint-disable-next-line no-console
    console.log('mcp-local-smoke:ok');
  } finally {
    mcpServer.kill('SIGTERM');
    await new Promise((resolve) => setTimeout(resolve, 100));
    staticServer.close();
  }
}

runSmokeTest().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('mcp-local-smoke:failed', error);
  process.exit(1);
});
