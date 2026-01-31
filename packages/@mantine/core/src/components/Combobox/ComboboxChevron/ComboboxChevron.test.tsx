import { tests } from '@mantine-tests/core';
import {
  ComboboxChevron,
  ComboboxChevronProps,
  ComboboxChevronStylesNames,
} from './ComboboxChevron';

const defaultProps: ComboboxChevronProps = {};

describe('@mantine/core/ComboboxChevron', () => {
  tests.itSupportsSystemProps<ComboboxChevronProps, ComboboxChevronStylesNames>({
    component: ComboboxChevron,
    props: defaultProps,
    varsResolver: true,
    refType: SVGSVGElement,
    displayName: '@mantine/core/ComboboxChevron',
    stylesApiSelectors: ['chevron'],
  });
});
