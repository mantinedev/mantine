import { render, tests } from '@mantine-tests/core';
import { Fieldset, FieldsetProps, FieldsetStylesNames } from './Fieldset';

const defaultProps: FieldsetProps = {
  legend: 'test-legend',
};

describe('@mantine/core/Fieldset', () => {
  tests.itSupportsSystemProps<FieldsetProps, FieldsetStylesNames>({
    component: Fieldset,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Fieldset',
    stylesApiSelectors: ['root', 'legend'],
  });

  it('renders legend as the first child of the fieldset element', () => {
    const { container } = render(<Fieldset {...defaultProps}>test-content</Fieldset>);
    const root = container.querySelector('.mantine-Fieldset-root')!;
    expect(root.tagName).toBe('FIELDSET');
    expect(root.firstElementChild!.tagName).toBe('LEGEND');
    expect(root.firstElementChild).toHaveTextContent('test-legend');
  });
});
