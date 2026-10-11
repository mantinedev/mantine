import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { TextInput, TextInputProps } from './TextInput';

const defaultProps: TextInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/TextInput', () => {
  tests.axe([
    <TextInput aria-label="test-label" key="1" />,
    <TextInput label="test-label" key="2" />,
    <TextInput label="test-label" error key="3" />,
    <TextInput label="test-label" error="test-error" id="test" key="4" />,
    <TextInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<TextInputProps, __InputStylesNames>({
    component: TextInput,
    props: defaultProps,
    displayName: '@mantine/core/TextInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TextInputProps>({
    component: TextInput,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<TextInputProps>({
    component: TextInput,
    props: defaultProps,
    componentName: 'TextInput',
  });

  it('renders loader in the section set by loadingPosition', () => {
    const { container, rerender } = render(<TextInput label="test-label" loading />);
    const getLoader = (position: string) =>
      container.querySelector(
        `.mantine-TextInput-section[data-position="${position}"] .mantine-Loader-root`
      );

    expect(getLoader('right')).toBeInTheDocument();
    expect(getLoader('left')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-busy', 'true');

    rerender(<TextInput label="test-label" loading loadingPosition="left" />);
    expect(getLoader('left')).toBeInTheDocument();
    expect(getLoader('right')).not.toBeInTheDocument();

    rerender(<TextInput label="test-label" />);
    expect(container.querySelector('.mantine-Loader-root')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-busy');
  });
});
