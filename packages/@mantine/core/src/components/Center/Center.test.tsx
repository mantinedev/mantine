import { tests } from '@mantine-tests/core';
import { Center, CenterProps, CenterStylesNames } from './Center';

const defaultProps: CenterProps = {
  children: <div />,
};

describe('@mantine/core/Center', () => {
  tests.itSupportsSystemProps<CenterProps, CenterStylesNames>({
    component: Center,
    props: defaultProps,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/Center',
    stylesApiSelectors: ['root'],
  });
});
