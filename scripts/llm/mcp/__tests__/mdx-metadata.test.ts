/** @jest-environment node */
import { parseMdxMetadataEntries } from '../mdx-metadata';

const SAMPLE_DATA_CONTENT = `
  FormPackage: {
    title: 'Get started',
    slug: '/form/package',
    hideInSearch: true,
    hideHeader: true,
  },

  useForm: {
    title: 'use-form',
    package: '@mantine/form',
    slug: '/form/use-form',
    description: 'Manage form state',
  },
`;

describe('parseMdxMetadataEntries', () => {
  it('stores metadata for an entry without a package field, instead of dropping it', () => {
    const entries = parseMdxMetadataEntries(SAMPLE_DATA_CONTENT);

    expect(entries.get('formpackage')).toEqual({
      package: undefined,
      title: 'Get started',
      description: '',
      hideInSearch: true,
    });
  });

  it('parses package, title and description for a normal entry, defaulting hideInSearch to false', () => {
    const entries = parseMdxMetadataEntries(SAMPLE_DATA_CONTENT);

    expect(entries.get('useform')).toEqual({
      package: '@mantine/form',
      title: 'use-form',
      description: 'Manage form state',
      hideInSearch: false,
    });
  });

  it('resolves by the lowercased MDX_DATA key even for a landing page whose disk filename differs from that key', () => {
    const entries = parseMdxMetadataEntries(SAMPLE_DATA_CONTENT);
    const pageContent = 'export default Layout(MDX_DATA.FormPackage);';
    const componentName = pageContent.match(/Layout\(MDX_DATA\.(\w+)\)/)![1];

    expect(entries.get(componentName.toLowerCase())).toEqual({
      package: undefined,
      title: 'Get started',
      description: '',
      hideInSearch: true,
    });
    expect(entries.get('package')).toBeUndefined();
  });
});
