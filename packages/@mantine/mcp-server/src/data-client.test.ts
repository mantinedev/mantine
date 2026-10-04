/** @jest-environment node */
import { MantineMcpDataClient } from './data-client';
import { IndexItem, SectionRecord } from './types';

const nativeSetTimeout = globalThis.setTimeout;
const nativeClearTimeout = globalThis.clearTimeout;

const baseItem: IndexItem = {
  id: 'core-button',
  name: 'Button',
  kind: 'component',
  group: 'components',
  category: 'Buttons',
  package: '@mantine/core',
  route: '/core/button',
  docsUrl: 'https://mantine.dev/core/button',
  description: 'Button component',
  headings: ['Usage'],
  propsCount: 10,
  hasSignature: false,
  llmUrl: 'https://mantine.dev/llms/core-button.md',
  searchText: 'button button component @mantine/core /core/button buttons usage',
};

const baseSection: SectionRecord = {
  id: 'core-button',
  slug: 'usage',
  heading: 'Usage',
  snippet: 'Basic usage of the Button component.',
};

function jsonResponse(data: unknown, etag: string) {
  return {
    ok: true,
    status: 200,
    headers: { get: (name: string) => (name === 'etag' ? etag : null) },
    json: async () => data,
  };
}

function notModifiedResponse(etag: string) {
  return {
    ok: true,
    status: 304,
    headers: { get: (name: string) => (name === 'etag' ? etag : null) },
    json: async () => null,
  };
}

describe('MantineMcpDataClient index caching and revalidation', () => {
  let fetchMock: jest.Mock;

  beforeEach(() => {
    jest.useFakeTimers();
    fetchMock = jest.fn();
    (global as unknown as { fetch: typeof fetch }).fetch = fetchMock as unknown as typeof fetch;
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('serves the cached index without refetching within the TTL', async () => {
    fetchMock.mockResolvedValue(jsonResponse([baseItem], 'v1'));

    const client = new MantineMcpDataClient('https://example.com/mcp');
    await client.getIndex();
    await client.getIndex();

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('revalidates with an If-None-Match header once the TTL has elapsed', async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse([baseItem], 'v1'));
    fetchMock.mockResolvedValueOnce(notModifiedResponse('v1'));

    const client = new MantineMcpDataClient('https://example.com/mcp');
    await client.getIndex();

    jest.setSystemTime(Date.now() + 5 * 60 * 1000 + 1);
    await client.getIndex();

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const secondCallInit = fetchMock.mock.calls[1][1] as { headers?: Record<string, string> };
    expect(secondCallInit.headers).toEqual({ 'If-None-Match': 'v1' });
  });

  it('keeps serving the same data when revalidation returns 304', async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse([baseItem], 'v1'));
    fetchMock.mockResolvedValueOnce(notModifiedResponse('v1'));

    const client = new MantineMcpDataClient('https://example.com/mcp');
    const first = await client.getIndex();

    jest.setSystemTime(Date.now() + 5 * 60 * 1000 + 1);
    const second = await client.getIndex();

    expect(second).toEqual(first);
  });

  it('does not revalidate before the TTL has elapsed', async () => {
    fetchMock.mockResolvedValue(jsonResponse([baseItem], 'v1'));

    const client = new MantineMcpDataClient('https://example.com/mcp');
    await client.getIndex();

    jest.setSystemTime(Date.now() + 60 * 1000);
    await client.getIndex();

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('clears sectionsCache and docCache when a revalidation changes the index', async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse([baseItem], 'v1'));
    fetchMock.mockResolvedValueOnce(jsonResponse([baseSection], 'sections-etag'));

    const client = new MantineMcpDataClient('https://example.com/mcp');
    await client.getIndex();
    await client.getSections();

    const changedItem: IndexItem = { ...baseItem, description: 'Updated description' };
    fetchMock.mockResolvedValueOnce(jsonResponse([changedItem], 'v2'));
    fetchMock.mockResolvedValueOnce(jsonResponse([baseSection], 'sections-etag-2'));

    jest.setSystemTime(Date.now() + 5 * 60 * 1000 + 1);
    const revalidatedIndex = await client.getIndex();
    expect(revalidatedIndex[0].description).toBe('Updated description');

    await client.getSections();

    expect(fetchMock).toHaveBeenCalledTimes(4);
  });

  it('rebuilds the search scorer from the new corpus once a revalidation actually changes the index', async () => {
    const candidateCommonOnly: IndexItem = {
      ...baseItem,
      id: 'core-widget-a',
      name: 'Widget A',
      searchText: 'common only candidate',
    };
    const candidateRareOnly: IndexItem = {
      ...baseItem,
      id: 'core-widget-b',
      name: 'Widget B',
      searchText: 'rare only candidate',
    };
    const fillerV1 = [1, 2, 3].map((n): IndexItem => ({
      ...baseItem,
      id: `core-filler-${n}`,
      name: `Filler ${n}`,
      searchText: 'common filler text',
    }));
    const fillerV2 = [1, 2, 3].map((n): IndexItem => ({
      ...baseItem,
      id: `core-filler-${n}`,
      name: `Filler ${n}`,
      searchText: 'rare filler text',
    }));

    fetchMock.mockResolvedValueOnce(
      jsonResponse([...fillerV1, candidateCommonOnly, candidateRareOnly], 'v1')
    );
    fetchMock.mockResolvedValueOnce(jsonResponse([], 'sections-v1'));

    const client = new MantineMcpDataClient('https://example.com/mcp');
    const before = await client.search({ query: 'common rare' });
    const beforeCommon = before.find((entry) => entry.id === 'core-widget-a')!.score;
    const beforeRare = before.find((entry) => entry.id === 'core-widget-b')!.score;
    expect(beforeRare).toBeGreaterThan(beforeCommon);

    fetchMock.mockResolvedValueOnce(
      jsonResponse([...fillerV2, candidateCommonOnly, candidateRareOnly], 'v2')
    );
    fetchMock.mockResolvedValueOnce(jsonResponse([], 'sections-v2'));

    jest.setSystemTime(Date.now() + 5 * 60 * 1000 + 1);
    const after = await client.search({ query: 'common rare' });
    const afterCommon = after.find((entry) => entry.id === 'core-widget-a')!.score;
    const afterRare = after.find((entry) => entry.id === 'core-widget-b')!.score;

    expect(afterCommon).toBeGreaterThan(afterRare);
    expect(fetchMock).toHaveBeenCalledTimes(4);
  });

  it('keeps serving the cached index when a revalidation fetch fails', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    fetchMock.mockResolvedValueOnce(jsonResponse([baseItem], 'v1'));
    fetchMock.mockRejectedValueOnce(new Error('network down'));

    const client = new MantineMcpDataClient('https://example.com/mcp');
    const first = await client.getIndex();

    jest.setSystemTime(Date.now() + 5 * 60 * 1000 + 1);
    const second = await client.getIndex();

    expect(second).toEqual(first);
    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});

describe('MantineMcpDataClient getApi', () => {
  let fetchMock: jest.Mock;

  beforeEach(() => {
    jest.useRealTimers();
    globalThis.setTimeout = nativeSetTimeout;
    globalThis.clearTimeout = nativeClearTimeout;
    fetchMock = jest.fn();
    (global as unknown as { fetch: typeof fetch }).fetch = fetchMock as unknown as typeof fetch;
  });

  it('falls back to a section pointer when a matched item has neither signature nor exported type names', async () => {
    const formUseForm: IndexItem = {
      ...baseItem,
      id: 'form-use-form',
      name: 'use-form',
      kind: 'hook',
      package: '@mantine/form',
      hasSignature: false,
      propsCount: 0,
      searchText: 'use-form manage form state @mantine/form',
    };

    fetchMock.mockResolvedValueOnce(jsonResponse([formUseForm], 'v1'));
    fetchMock.mockResolvedValueOnce(
      jsonResponse(
        {
          item: formUseForm,
          intro: 'Manage form state.',
          sections: [
            { heading: 'Installation', slug: 'installation', body: 'yarn add @mantine/form' },
            { heading: 'API overview', slug: 'api-overview', body: 'form.values, form.errors' },
          ],
          props: [],
          signature: null,
          exportedTypeNames: null,
        },
        'doc-v1'
      )
    );

    const client = new MantineMcpDataClient('https://example.com/mcp');
    const result = await client.getApi('useForm');

    expect(result).not.toBeNull();
    expect(result?.signature).toBeNull();
    expect(result?.exportedTypeNames).toBeNull();
    expect(result?.suggestedSection).toBe('api-overview');
    expect(result?.availableSections).toEqual(['installation', 'api-overview']);
  });

  it('does not include a section pointer when a matched item has a signature', async () => {
    const useDisclosure: IndexItem = {
      ...baseItem,
      id: 'hooks-use-disclosure',
      name: 'use-disclosure',
      kind: 'hook',
      package: '@mantine/hooks',
      hasSignature: true,
      propsCount: 0,
      searchText: 'use-disclosure manages boolean state @mantine/hooks',
    };

    fetchMock.mockResolvedValueOnce(jsonResponse([useDisclosure], 'v1'));
    fetchMock.mockResolvedValueOnce(
      jsonResponse(
        {
          item: useDisclosure,
          intro: 'Manages boolean state.',
          sections: [
            { heading: 'Definition', slug: 'definition', body: 'function useDisclosure()' },
          ],
          props: [],
          signature: 'function useDisclosure(): [boolean, UseDisclosureHandlers]',
          exportedTypeNames: ['UseDisclosureHandlers'],
        },
        'doc-v1'
      )
    );

    const client = new MantineMcpDataClient('https://example.com/mcp');
    const result = await client.getApi('useDisclosure');

    expect(result).not.toBeNull();
    expect(result?.signature).toBe('function useDisclosure(): [boolean, UseDisclosureHandlers]');
    expect(result?.suggestedSection).toBeUndefined();
    expect(result?.availableSections).toBeUndefined();
  });
});
