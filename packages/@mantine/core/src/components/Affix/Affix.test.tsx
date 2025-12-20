import { tests } from '@mantine-tests/core';
import { Affix, AffixProps, AffixStylesNames } from './Affix';

const defaultProps: AffixProps = {
  withinPortal: false,
};

describe('@mantine/core/Affix', () => {
  tests.itSupportsSystemProps<AffixProps, AffixStylesNames>({
    component: Affix,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Affix',
    stylesApiSelectors: ['root'],
  });
});
