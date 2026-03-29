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

const successProps: InputWrapperProps = {
  id: 'test-id',
  children: 'test',
  label: 'test-label',
  success: 'test-success',
  description: 'test-description',
  required: true,
};

describe('@mantine/core/InputWrapper', () => {
  tests.itSupportsSystemProps<InputWrapperProps, InputWrapperStylesNames>({
    component: InputWrapper,
    props: defaultProps,
    varsResolver: true,
    children: true,
    id: false,
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

  it('renders success message when success prop is set', () => {
    const { container } = render(<InputWrapper {...successProps} />);
    expect(inputWrapperQueries.getSuccess(container).textContent).toBe('test-success');
  });

  it('does not render success if success prop is boolean', () => {
    const { container } = render(<InputWrapper {...successProps} success />);
    expect(inputWrapperQueries.getSuccess(container)).toBe(null);
  });

  it('does not render success when error is also set', () => {
    const { container } = render(
      <InputWrapper {...successProps} error="test-error" success="test-success" />
    );
    expect(inputWrapperQueries.getError(container).textContent).toBe('test-error');
    expect(inputWrapperQueries.getSuccess(container)).toBe(null);
  });

  it('sets data-success attribute when success prop is set', () => {
    const { container } = render(<InputWrapper {...successProps} />);
    expect(container.querySelector('.mantine-InputWrapper-root')).toHaveAttribute('data-success');
  });

  it('does not set data-success when error is also set', () => {
    const { container } = render(
      <InputWrapper {...successProps} error="test-error" success="test-success" />
    );
    expect(container.querySelector('.mantine-InputWrapper-root')).not.toHaveAttribute(
      'data-success'
    );
    expect(container.querySelector('.mantine-InputWrapper-root')).toHaveAttribute('data-error');
  });
});
