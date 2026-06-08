import { useState } from 'react';
import { inputWrapperQueries, render, screen, tests, userEvent } from '@mantine-tests/core';
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

  it('keeps the error element mounted when keepErrorMounted is set and error is not defined', () => {
    const { container } = render(<InputWrapper {...defaultProps} error={null} keepErrorMounted />);
    const error = inputWrapperQueries.getError(container);
    expect(error).not.toBe(null);
    expect(error).toHaveTextContent('');
  });

  it('does not mount the error element when keepErrorMounted is not set and error is not defined', () => {
    const { container } = render(<InputWrapper {...defaultProps} error={null} />);
    expect(inputWrapperQueries.getError(container)).toBe(null);
  });

  it('reuses the same error node when error toggles with keepErrorMounted', async () => {
    function ToggleError() {
      const [error, setError] = useState<React.ReactNode>(null);
      return (
        <>
          <button type="button" onClick={() => setError('New error')}>
            set error
          </button>
          <InputWrapper {...defaultProps} error={error} keepErrorMounted />
        </>
      );
    }

    const { container } = render(<ToggleError />);
    const initialError = inputWrapperQueries.getError(container);
    expect(initialError).not.toBe(null);
    expect(initialError).toHaveTextContent('');

    await userEvent.click(screen.getByText('set error'));

    const updatedError = inputWrapperQueries.getError(container);
    expect(updatedError).toBe(initialError);
    expect(updatedError).toHaveTextContent('New error');
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
