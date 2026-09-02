import type { McpServer } from '@modelcontextprotocol/server';
import * as z from 'zod';
import { MantineMcpDataClient } from './data-client';

const kindSchema = z.enum(['component', 'hook', 'guide', 'faq']);
const groupSchema = z.enum([
  'gettingStarted',
  'theming',
  'hooks',
  'components',
  'extensions',
  'form',
]);

function text(payload: unknown) {
  return {
    content: [
      {
        type: 'text' as const,
        text: typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2),
      },
    ],
  };
}

function error(message: string) {
  return { isError: true, content: [{ type: 'text' as const, text: message }] };
}

/** Registers every Mantine documentation tool on an MCP server instance */
export function registerTools(server: McpServer, client: MantineMcpDataClient): void {
  server.registerTool(
    'search_docs',
    {
      title: 'Search Mantine documentation',
      description:
        'Search all Mantine documentation — components, hooks, @mantine/form, styling, theming, guides and FAQ. Returns ranked matches; a match may point at a specific section, which can then be fetched with get_item_doc.',
      inputSchema: z.object({
        query: z.string().describe('Free text query, e.g. "validate a form with zod"'),
        kind: kindSchema.optional(),
        package: z.string().optional().describe('Filter by package, e.g. "@mantine/form"'),
        limit: z.number().optional().describe('Maximum number of results (default 20, max 100)'),
      }),
    },
    async (args) => text(await client.search(args))
  );

  server.registerTool(
    'get_item_doc',
    {
      title: 'Get Mantine documentation',
      description:
        'Get documentation for a Mantine component, hook, guide or FAQ page. Without a section it returns an outline (description plus section list) — pass a section to fetch just that part, or full:true for the whole page.',
      inputSchema: z.object({
        name: z.string().describe('Item name or id, e.g. "useForm", "Button", "form-validation"'),
        kind: kindSchema.optional(),
        section: z.string().optional().describe('Section slug from the outline, e.g. "zod"'),
        full: z.boolean().optional().describe('Return the entire page; can be very large'),
      }),
    },
    async (args) => {
      const result = await client.getDoc(args);

      if (!result) {
        const suggestions = await client.suggestFor(args.name);
        return error(
          suggestions.length > 0
            ? `No exact match for "${args.name}". Did you mean: ${suggestions.join(', ')}?`
            : `No Mantine documentation found for "${args.name}". Try search_docs first.`
        );
      }

      return text(result);
    }
  );

  server.registerTool(
    'get_item_props',
    {
      title: 'Get Mantine props or signature',
      description:
        'Get props for a Mantine component, or the TypeScript signature for a hook. Pages documenting an API in prose point at the relevant section instead.',
      inputSchema: z.object({ name: z.string(), kind: kindSchema.optional() }),
    },
    async (args) => {
      const result = await client.getProps(args);

      if (!result) {
        const suggestions = await client.suggestFor(args.name);
        return error(
          suggestions.length > 0
            ? `No exact match for "${args.name}". Did you mean: ${suggestions.join(', ')}?`
            : `No Mantine documentation found for "${args.name}".`
        );
      }

      return text(result);
    }
  );

  server.registerTool(
    'list_items',
    {
      title: 'List Mantine documentation items',
      description:
        'List Mantine documentation items, filtered by kind, nav group, category, package or a text query.',
      inputSchema: z.object({
        kind: kindSchema.optional(),
        group: groupSchema.optional(),
        category: z.string().optional(),
        package: z.string().optional(),
        query: z.string().optional(),
        limit: z.number().optional().describe('Maximum number of results (default 30, max 500)'),
      }),
    },
    async (args) => text(await client.listItems(args))
  );

  server.registerTool(
    'get_api',
    {
      title: 'Resolve a Mantine symbol',
      description:
        'Resolve a Mantine symbol (useForm, useDisclosure, UseFormReturnType) to its TypeScript signature and exported types, without knowing which page documents it.',
      inputSchema: z.object({ symbol: z.string() }),
    },
    async ({ symbol }) => {
      const result = await client.getApi(symbol);

      if (!result) {
        const suggestions = await client.suggestFor(symbol);
        return error(
          suggestions.length > 0
            ? `No API found for "${symbol}". Did you mean: ${suggestions.join(', ')}?`
            : `No API found for "${symbol}". Try search_docs.`
        );
      }

      return text(result);
    }
  );
}
