import { render, tests } from '@mantine-tests/core';
import {
  ActionIconGroupSection,
  ActionIconGroupSectionProps,
  ActionIconGroupSectionStylesNames,
} from './ActionIconGroupSection';

const defaultProps: ActionIconGroupSectionProps = {};

describe('@mantine/core/ActionIconGroupSection', () => {
  tests.itSupportsSystemProps<ActionIconGroupSectionProps, ActionIconGroupSectionStylesNames>({
    component: ActionIconGroupSection,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/ActionIconGroupSection',
    stylesApiSelectors: ['groupSection'],
  });

  it('does not pass color prop to the DOM element', () => {
    const { container } = render(<ActionIconGroupSection color="red">1</ActionIconGroupSection>);
    expect(
      container.querySelector('.mantine-ActionIconGroupSection-groupSection')
    ).not.toHaveAttribute('color');
  });
});
