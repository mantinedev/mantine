import { tests } from '@mantine-tests/core';
import { Spoiler, SpoilerProps, SpoilerStylesNames } from './Spoiler';

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('@mantine/core/Spoiler', () => {
  tests.itSupportsSystemProps<SpoilerProps, SpoilerStylesNames>({
    component: Spoiler,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Spoiler',
    stylesApiSelectors: ['root', 'content'],
  });
});
