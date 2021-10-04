import { itSupportsRef } from '@mantine/tests';
import { Affix } from './Affix';

describe('@mantine/core/Affix', () => {
  itSupportsRef(Affix, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Affix.displayName).toEqual('@mantine/core/Affix');
  });
});
