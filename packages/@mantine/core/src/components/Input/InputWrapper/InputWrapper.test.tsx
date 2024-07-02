import { inputWrapperQueries, render, tests } from '@mantine-tests/core';
import { Input } from '../Input';
import { InputWrapper, InputWrapperProps, InputWrapperStylesNames } from './InputWrapper';

const defaultProps: InputWrapperProps = {
  id: 'test-id',
  children: 'test',
  label: 'test-label',
  error: 'test-error',
  description: 'test-description',
  required: true,
};

describe('@mantine/core/InputWrapper', () => {
  tests.itSupportsSystemProps<InputWrapperProps, InputWrapperStylesNames>({
    component: InputWrapper,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/InputWrapper',
    stylesApiSelectors: ['root', 'description', 'error', 'label', 'required'],
  });

  tests.itSupportsInputWrapperProps({
    component: InputWrapper,
    props: { ...defaultProps, children: <Input /> },
  });

  it('does not render error if error prop is boolean', () => {
    const { container } = render(<InputWrapper {...defaultProps} error />);
    expect(inputWrapperQueries.getError(container)).toBe(null);
  });

  it('generates correct ids for description and error', () => {
    const { container } = render(<InputWrapper {...defaultProps} id="test45" />);
    expect(inputWrapperQueries.getDescription(container)).toHaveAttribute(
      'id',
      'test45-description'
    );
    expect(inputWrapperQueries.getError(container)).toHaveAttribute('id', 'test45-error');
  });

  it('sets data-variant attribute based on variant prop', () => {
    const { container } = render(<InputWrapper {...defaultProps} variant="filled" />);
    expect(container.querySelector('.mantine-InputWrapper-root')).toHaveAttribute(
      'data-variant',
      'filled'
    );

    expect(inputWrapperQueries.getDescription(container)).toHaveAttribute('data-variant', 'filled');
    expect(inputWrapperQueries.getError(container)).toHaveAttribute('data-variant', 'filled');
    expect(inputWrapperQueries.getLabel(container)).toHaveAttribute('data-variant', 'filled');
  });

  it('changes label root element with labelElement prop', () => {
    const { container } = render(<InputWrapper {...defaultProps} labelElement="div" />);
    expect(inputWrapperQueries.getLabel(container).tagName).toBe('DIV');
  });
});
