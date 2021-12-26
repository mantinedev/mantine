import { itSupportsRef, itRendersChildren } from '@mantine/tests';
import { Affix, AffixProps } from './Affix';

const defaultProps: AffixProps = {};

describe('@mantine/core/Affix', () => {
  itSupportsRef(Affix, defaultProps, HTMLDivElement);
  itRendersChildren(Affix, defaultProps);

  it('has correct displayName', () => {
    expect(Affix.displayName).toEqual('@mantine/core/Affix');
  });
});
