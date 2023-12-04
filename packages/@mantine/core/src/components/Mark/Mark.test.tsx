import { tests } from '@mantine-tests/core';
import { Mark, MarkProps, MarkStylesNames } from './Mark';

const defaultProps: MarkProps = {};

describe('@mantine/core/Mark', () => {
  tests.itSupportsSystemProps<MarkProps, MarkStylesNames>({
    component: Mark,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@mantine/core/Mark',
    stylesApiSelectors: ['root'],
  });
});
