import { MantineMcpDataClient } from './data-client';
import { GetItemArgs, ListItemsArgs, SearchDocsArgs } from './types';

interface JsonRpcRequest {
  jsonrpc: '2.0';
  id?: string | number | null;
  method: string;
  params?: unknown;
}

const TOOL_DEFINITIONS = [
  {
    name: 'list_items',
    description:
      'List Mantine documentation items. Supports filtering by kind (component|hook), package and text query.',
    inputSchema: {
      type: 'object',
      properties: {
        kind: { type: 'string', enum: ['component', 'hook'] },
        package: { type: 'string' },
        query: { type: 'string' },
        limit: { type: 'number' },
      },
      additionalProperties: false,
    },
  },
  {
    name: 'get_item_doc',
    description: 'Get the LLM-ready markdown documentation for a Mantine item by name or id.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        kind: { type: 'string', enum: ['component', 'hook'] },
      },
      required: ['name'],
      additionalProperties: false,
    },
  },
  {
    name: 'get_item_props',
    description: 'Get normalized props metadata for a Mantine item by name or id.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        kind: { type: 'string', enum: ['component', 'hook'] },
      },
      required: ['name'],
      additionalProperties: false,
    },
  },
  {
    name: 'search_docs',
    description: 'Search Mantine docs by free text query and return ranked matches.',
    inputSchema: {
      type: 'object',
      properties: {
        kind: { type: 'string', enum: ['component', 'hook'] },
        query: { type: 'string' },
        limit: { type: 'number' },
      },
      required: ['query'],
      additionalProperties: false,
    },
  },
];

function createJsonRpcError(code: number, message: string) {
  return { code, message };
}

function toToolResult(content: unknown) {
  const text = typeof content === 'string' ? content : JSON.stringify(content, null, 2);

  return {
    content: [{ type: 'text', text }],
  };
}

function toToolError(message: string) {
  return {
    isError: true,
    content: [{ type: 'text', text: message }],
  };
}

function parseListItemsArgs(args: Record<string, unknown>): ListItemsArgs {
  return {
    kind: args.kind === 'component' || args.kind === 'hook' ? args.kind : undefined,
    package: typeof args.package === 'string' ? args.package : undefined,
    query: typeof args.query === 'string' ? args.query : undefined,
    limit: typeof args.limit === 'number' ? args.limit : undefined,
  };
}

function parseGetItemArgs(args: Record<string, unknown>): GetItemArgs | null {
  if (typeof args.name !== 'string' || args.name.length === 0) {
    return null;
  }

  return {
    name: args.name,
    kind: args.kind === 'component' || args.kind === 'hook' ? args.kind : undefined,
  };
}

function parseSearchDocsArgs(args: Record<string, unknown>): SearchDocsArgs | null {
  if (typeof args.query !== 'string' || args.query.length === 0) {
    return null;
  }

  return {
    query: args.query,
    kind: args.kind === 'component' || args.kind === 'hook' ? args.kind : undefined,
    limit: typeof args.limit === 'number' ? args.limit : undefined,
  };
}

function writeMessage(payload: unknown) {
  const body = JSON.stringify(payload);
  const header = `Content-Length: ${Buffer.byteLength(body, 'utf8')}\r\n\r\n`;
  process.stdout.write(header + body);
}

function writeResponse(id: string | number | null, result: unknown) {
  writeMessage({ jsonrpc: '2.0', id, result });
}

function writeError(id: string | number | null, code: number, message: string) {
  writeMessage({
    jsonrpc: '2.0',
    id,
    error: createJsonRpcError(code, message),
  });
}

function readContentLength(rawHeaders: string) {
  const lines = rawHeaders.split('\r\n');
  const contentLengthHeader = lines.find((line) => line.toLowerCase().startsWith('content-length:'));

  if (!contentLengthHeader) {
    return null;
  }

  const value = Number(contentLengthHeader.split(':')[1]?.trim());
  return Number.isFinite(value) ? value : null;
}

export function startServer() {
  const timeoutMs = Number(process.env.MANTINE_MCP_TIMEOUT_MS || 10000);
  const dataUrl = process.env.MANTINE_MCP_DATA_URL || 'https://mantine.dev/mcp';
  const client = new MantineMcpDataClient(dataUrl, timeoutMs);

  let buffer = Buffer.alloc(0);

  process.stdin.on('data', (chunk: Buffer) => {
    buffer = Buffer.concat([buffer, chunk]);

    while (true) {
      const separatorIndex = buffer.indexOf('\r\n\r\n');

      if (separatorIndex === -1) {
        return;
      }

      const headersBuffer = buffer.subarray(0, separatorIndex);
      const headers = headersBuffer.toString('utf8');
      const contentLength = readContentLength(headers);

      if (contentLength == null) {
        writeError(null, -32600, 'Invalid request: missing Content-Length header');
        buffer = Buffer.alloc(0);
        return;
      }

      const bodyStart = separatorIndex + 4;
      const bodyEnd = bodyStart + contentLength;

      if (buffer.length < bodyEnd) {
        return;
      }

      const bodyBuffer = buffer.subarray(bodyStart, bodyEnd);
      buffer = buffer.subarray(bodyEnd);

      let request: JsonRpcRequest;
      try {
        request = JSON.parse(bodyBuffer.toString('utf8'));
      } catch {
        writeError(null, -32700, 'Parse error');
        continue;
      }

      void handleRequest(client, request);
    }
  });

  process.stdin.resume();
}

async function handleRequest(client: MantineMcpDataClient, request: JsonRpcRequest) {
  const id = request.id ?? null;

  if (!request || request.jsonrpc !== '2.0' || typeof request.method !== 'string') {
    writeError(id, -32600, 'Invalid request');
    return;
  }

  try {
    switch (request.method) {
      case 'initialize': {
        writeResponse(id, {
          protocolVersion: '2024-11-05',
          capabilities: {
            tools: {},
          },
          serverInfo: {
            name: '@mantine/mcp-server',
            version: '9.0.0-alpha.1',
          },
        });
        return;
      }

      case 'notifications/initialized': {
        return;
      }

      case 'tools/list': {
        writeResponse(id, { tools: TOOL_DEFINITIONS });
        return;
      }

      case 'tools/call': {
        const params =
          request.params && typeof request.params === 'object'
            ? (request.params as Record<string, unknown>)
            : {};
        const name = typeof params.name === 'string' ? params.name : '';
        const args =
          params.arguments && typeof params.arguments === 'object'
            ? (params.arguments as Record<string, unknown>)
            : {};

        if (!name) {
          writeResponse(id, toToolError('Tool name is required'));
          return;
        }

        if (name === 'list_items') {
          const result = await client.listItems(parseListItemsArgs(args));
          writeResponse(id, toToolResult(result));
          return;
        }

        if (name === 'get_item_doc') {
          const parsed = parseGetItemArgs(args);
          if (!parsed) {
            writeResponse(id, toToolError('Argument "name" is required'));
            return;
          }

          const result = await client.getItemDoc(parsed);
          if (!result) {
            writeResponse(id, toToolError(`Item not found: ${parsed.name}`));
            return;
          }

          writeResponse(id, toToolResult(result));
          return;
        }

        if (name === 'get_item_props') {
          const parsed = parseGetItemArgs(args);
          if (!parsed) {
            writeResponse(id, toToolError('Argument "name" is required'));
            return;
          }

          const result = await client.getItemProps(parsed);
          if (!result) {
            writeResponse(id, toToolError(`Item not found: ${parsed.name}`));
            return;
          }

          writeResponse(id, toToolResult(result));
          return;
        }

        if (name === 'search_docs') {
          const parsed = parseSearchDocsArgs(args);
          if (!parsed) {
            writeResponse(id, toToolError('Argument "query" is required'));
            return;
          }

          const result = await client.searchDocs(parsed);
          writeResponse(id, toToolResult(result));
          return;
        }

        writeResponse(id, toToolError(`Unknown tool: ${name}`));
        return;
      }

      default: {
        if (id === null) {
          return;
        }

        writeError(id, -32601, `Method not found: ${request.method}`);
      }
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error';

    if (request.method === 'tools/call') {
      writeResponse(id, toToolError(message));
      return;
    }

    writeError(id, -32000, message);
  }
}
