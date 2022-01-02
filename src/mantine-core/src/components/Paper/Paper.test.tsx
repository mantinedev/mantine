import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Paper, PaperProps } from './Paper';

const defaultProps: PaperProps<'div'> = {};

describe('@mantine/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@mantine/core/Paper',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(Paper.displayName).toEqual('@mantine/core/Paper');
  });
});
