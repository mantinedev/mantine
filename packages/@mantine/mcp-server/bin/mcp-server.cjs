#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`Usage: mcp-server

Starts the Mantine MCP server.

Options:
  -h, --help     Show help
  -v, --version  Show version`);
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  console.log(require('../package.json').version);
  process.exit(0);
}

const unknownOption = args.find((arg) => arg.startsWith('-'));

if (unknownOption) {
  console.error(`Unknown option: ${unknownOption}`);
  console.error('Run mcp-server --help for usage.');
  process.exit(1);
}

require('../cjs/index.cjs');
