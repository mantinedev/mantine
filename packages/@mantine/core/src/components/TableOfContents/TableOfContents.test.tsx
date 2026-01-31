import { tests } from '@mantine-tests/core';
import {
  TableOfContents,
  TableOfContentsProps,
  TableOfContentsStylesNames,
} from './TableOfContents';

const defaultProps: TableOfContentsProps = {};

describe('@mantine/core/TableOfContents', () => {
  tests.itSupportsSystemProps<TableOfContentsProps, TableOfContentsStylesNames>({
    component: TableOfContents,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/TableOfContents',
    stylesApiSelectors: ['root'],
  });
});
