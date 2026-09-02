/** @jest-environment node */
import type { McpServer } from '@modelcontextprotocol/server';
import type { MantineMcpDataClient } from './data-client';
import { registerTools } from './tools';

type ToolHandler = (
  args: any
) => Promise<{ isError?: boolean; content: { type: string; text: string }[] }>;

interface RegisteredTool {
  name: string;
  config: { title: string; description: string; inputSchema: any };
  handler: ToolHandler;
}

function createFakeServer() {
  const tools: RegisteredTool[] = [];
  const server = {
    registerTool: jest.fn(
      (name: string, config: RegisteredTool['config'], handler: ToolHandler) => {
        tools.push({ name, config, handler });
      }
    ),
  };

  return { server: server as unknown as McpServer, tools };
}

function createFakeClient(overrides: Partial<Record<keyof MantineMcpDataClient, any>> = {}) {
  return {
    search: jest.fn(async () => [{ id: 'core-button', score: 1 }]),
    getDoc: jest.fn(async () => ({ id: 'core-button', outline: ['usage'] })),
    getProps: jest.fn(async () => ({ id: 'core-button', props: [] })),
    listItems: jest.fn(async () => [{ id: 'core-button' }]),
    getApi: jest.fn(async () => ({ symbol: 'useForm', signature: 'function useForm()' })),
    suggestFor: jest.fn(async () => []),
    ...overrides,
  } as unknown as MantineMcpDataClient;
}

function setup(clientOverrides?: Partial<Record<keyof MantineMcpDataClient, any>>) {
  const { server, tools } = createFakeServer();
  const client = createFakeClient(clientOverrides);
  registerTools(server, client);
  const byName = Object.fromEntries(tools.map((tool) => [tool.name, tool]));
  return { tools, byName, client: client as any };
}

describe('@mantine/mcp-server/tools', () => {
  it('registers the five documented tools', () => {
    const { tools } = setup();
    expect(tools.map((tool) => tool.name)).toStrictEqual([
      'search_docs',
      'get_item_doc',
      'get_item_props',
      'list_items',
      'get_api',
    ]);
    tools.forEach((tool) => {
      expect(tool.config.title).toEqual(expect.any(String));
      expect(tool.config.description).toEqual(expect.any(String));
      expect(typeof tool.handler).toBe('function');
    });
  });

  it('validates search_docs arguments with the declared schema', () => {
    const { byName } = setup();
    const schema = byName.search_docs.config.inputSchema;
    expect(schema.safeParse({}).success).toBe(false);
    expect(schema.safeParse({ query: 'zod', kind: 'nope' }).success).toBe(false);
    expect(
      schema.safeParse({ query: 'zod', kind: 'guide', package: '@mantine/form', limit: 5 }).success
    ).toBe(true);
  });

  it('validates list_items and get_item_doc arguments with the declared schemas', () => {
    const { byName } = setup();
    expect(byName.list_items.config.inputSchema.safeParse({ group: 'form' }).success).toBe(true);
    expect(byName.list_items.config.inputSchema.safeParse({ group: 'unknown' }).success).toBe(
      false
    );
    expect(
      byName.get_item_doc.config.inputSchema.safeParse({ name: 'useForm', section: 'zod' }).success
    ).toBe(true);
    expect(byName.get_item_doc.config.inputSchema.safeParse({ full: true }).success).toBe(false);
    expect(byName.get_api.config.inputSchema.safeParse({}).success).toBe(false);
  });

  it('search_docs forwards its arguments and returns the result as JSON text', async () => {
    const { byName, client } = setup();
    const args = { query: 'validate a form with zod', kind: 'guide', limit: 3 };
    const result = await byName.search_docs.handler(args);

    expect(client.search).toHaveBeenCalledWith(args);
    expect(result.isError).toBeUndefined();
    expect(result.content).toHaveLength(1);
    expect(result.content[0].type).toBe('text');
    expect(JSON.parse(result.content[0].text)).toStrictEqual([{ id: 'core-button', score: 1 }]);
  });

  it('get_item_doc returns the document when found', async () => {
    const { byName, client } = setup();
    const result = await byName.get_item_doc.handler({ name: 'Button', section: 'usage' });

    expect(client.getDoc).toHaveBeenCalledWith({ name: 'Button', section: 'usage' });
    expect(client.suggestFor).not.toHaveBeenCalled();
    expect(JSON.parse(result.content[0].text)).toStrictEqual({
      id: 'core-button',
      outline: ['usage'],
    });
  });

  it('get_item_doc returns an error with suggestions when the item is unknown', async () => {
    const { byName, client } = setup({
      getDoc: jest.fn(async () => null),
      suggestFor: jest.fn(async () => ['Button', 'ButtonGroup']),
    });
    const result = await byName.get_item_doc.handler({ name: 'Buton' });

    expect(client.suggestFor).toHaveBeenCalledWith('Buton');
    expect(result.isError).toBe(true);
    expect(result.content[0].text).toBe(
      'No exact match for "Buton". Did you mean: Button, ButtonGroup?'
    );
  });

  it('get_item_doc points at search_docs when there are no suggestions', async () => {
    const { byName } = setup({ getDoc: jest.fn(async () => null) });
    const result = await byName.get_item_doc.handler({ name: 'nothing-like-this' });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toBe(
      'No Mantine documentation found for "nothing-like-this". Try search_docs first.'
    );
  });

  it('get_item_props returns props when found and suggestions otherwise', async () => {
    const found = setup();
    const result = await found.byName.get_item_props.handler({ name: 'Button' });
    expect(found.client.getProps).toHaveBeenCalledWith({ name: 'Button' });
    expect(JSON.parse(result.content[0].text)).toStrictEqual({ id: 'core-button', props: [] });

    const missing = setup({
      getProps: jest.fn(async () => null),
      suggestFor: jest.fn(async () => ['useForm']),
    });
    const error = await missing.byName.get_item_props.handler({ name: 'useFrom' });
    expect(error.isError).toBe(true);
    expect(error.content[0].text).toBe('No exact match for "useFrom". Did you mean: useForm?');
  });

  it('list_items forwards its filters', async () => {
    const { byName, client } = setup();
    const args = { kind: 'hook', group: 'hooks', package: '@mantine/hooks', limit: 10 };
    const result = await byName.list_items.handler(args);

    expect(client.listItems).toHaveBeenCalledWith(args);
    expect(JSON.parse(result.content[0].text)).toStrictEqual([{ id: 'core-button' }]);
  });

  it('get_api resolves a symbol and reports unknown symbols', async () => {
    const found = setup();
    const result = await found.byName.get_api.handler({ symbol: 'useForm' });
    expect(found.client.getApi).toHaveBeenCalledWith('useForm');
    expect(JSON.parse(result.content[0].text)).toStrictEqual({
      symbol: 'useForm',
      signature: 'function useForm()',
    });

    const missing = setup({ getApi: jest.fn(async () => null) });
    const error = await missing.byName.get_api.handler({ symbol: 'useNope' });
    expect(missing.client.suggestFor).toHaveBeenCalledWith('useNope');
    expect(error.isError).toBe(true);
    expect(error.content[0].text).toBe('No API found for "useNope". Try search_docs.');
  });

  it('returns string payloads verbatim instead of JSON-encoding them', async () => {
    const { byName } = setup({ getDoc: jest.fn(async () => '# Button\n\nUsage') });
    const result = await byName.get_item_doc.handler({ name: 'Button', full: true });
    expect(result.content[0].text).toBe('# Button\n\nUsage');
  });
});
