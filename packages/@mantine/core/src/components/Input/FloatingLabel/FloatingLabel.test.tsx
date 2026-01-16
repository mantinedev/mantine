import { render, screen, tests } from '@mantine-tests/core';
import {
  InputFloatingLabel,
  InputFloatingLabelProps,
  InputFloatingLabelStylesNames,
} from './FloatingLabel';

const defaultProps: InputFloatingLabelProps = {};

describe('@mantine/core/InputFloatingLabel', () => {
  tests.itSupportsSystemProps<InputFloatingLabelProps, InputFloatingLabelStylesNames>({
    component: InputFloatingLabel,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLLabelElement,
    stylesApiName: 'InputFloatingLabel',
    displayName: '@mantine/core/InputFloatingLabel',
    stylesApiSelectors: ['floatingLabel'],
  });

  it('changes root element based on labelElement prop', () => {
    const { rerender } = render(
      <InputFloatingLabel labelElement="label">Label</InputFloatingLabel>
    );

    expect(screen.getByText('Label').tagName).toBe('LABEL');

    rerender(<InputFloatingLabel labelElement="div">Label</InputFloatingLabel>);
    expect(screen.getByText('Label').tagName).toBe('DIV');
  });

  it('sets data-floating attribute when floating prop is true', () => {
    const { rerender, container } = render(<InputFloatingLabel>Label</InputFloatingLabel>);
    expect(container.querySelector('[data-floating]')).toBeNull();

    rerender(<InputFloatingLabel floating>Label</InputFloatingLabel>);
    expect(container.querySelector('[data-floating]')).toBeVisible();
  });
});
