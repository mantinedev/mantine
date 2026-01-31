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
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Spoiler',
    stylesApiSelectors: ['root', 'content'],
  });
});
