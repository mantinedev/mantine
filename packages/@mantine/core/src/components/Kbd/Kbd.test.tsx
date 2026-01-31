import { tests } from '@mantine-tests/core';
import { Kbd, KbdProps, KbdStylesNames } from './Kbd';

const defaultProps: KbdProps = {};

describe('@mantine/core/Kbd', () => {
  tests.itSupportsSystemProps<KbdProps, KbdStylesNames>({
    component: Kbd,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Kbd',
    stylesApiSelectors: ['root'],
  });
});
