import { McpServer } from '@modelcontextprotocol/server';
import { serveStdio } from '@modelcontextprotocol/server/stdio';
import { MantineMcpDataClient } from './data-client';
import { registerTools } from './tools';

/** Starts the Mantine documentation MCP server over stdio */
export function startServer(): void {
  const timeoutMs = Number(process.env.MANTINE_MCP_TIMEOUT_MS || 10000);
  const dataUrl = process.env.MANTINE_MCP_DATA_URL || 'https://mantine.dev/mcp';

  serveStdio(() => {
    const server = new McpServer({ name: '@mantine/mcp-server', version: '9' });
    registerTools(server, new MantineMcpDataClient(dataUrl, timeoutMs));
    return server;
  });
}
