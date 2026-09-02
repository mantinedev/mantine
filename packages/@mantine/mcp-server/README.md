# @mantine/mcp-server

MCP server for Mantine documentation.

## Usage

```bash
npx @mantine/mcp-server
```

## Configuration

- `MANTINE_MCP_DATA_URL` – static MCP data base URL (`https://mantine.dev/mcp` by default)
- `MANTINE_MCP_TIMEOUT_MS` – HTTP timeout in milliseconds (`10000` by default)

## Tools

- `search_docs` – search all documentation; returns ranked matches, often pointing at a specific section
- `get_item_doc` – outline by default, one section with `section`, whole page with `full: true`
- `get_item_props` – component props, or a hook's TypeScript signature
- `list_items` – filter by `kind`, `group`, `category`, `package` or `query`
- `get_api` – resolve a symbol (`useForm`, `useDisclosure`) to its signature

## Coverage

405 documents: components, hooks, `@mantine/form`, styling, theming, framework and migration guides, and FAQ pages. Changelogs are not indexed.
