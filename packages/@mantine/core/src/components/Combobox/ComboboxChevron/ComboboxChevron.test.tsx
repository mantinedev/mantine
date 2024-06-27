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
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: SVGSVGElement,
    displayName: '@mantine/core/ComboboxChevron',
    stylesApiSelectors: ['chevron'],
  });
});
