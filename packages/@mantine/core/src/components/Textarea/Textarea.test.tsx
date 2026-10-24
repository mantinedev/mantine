import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { Textarea, TextareaProps } from './Textarea';

const defaultProps: TextareaProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/Textarea', () => {
  tests.axe([
    <Textarea aria-label="test-label" key="1" />,
    <Textarea label="test-label" key="2" />,
    <Textarea label="test-label" error key="3" />,
    <Textarea label="test-label" error="test-error" id="test" key="4" />,
    <Textarea label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<TextareaProps, __InputStylesNames>({
    component: Textarea,
    props: defaultProps,
    displayName: '@mantine/core/Textarea',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TextareaProps>({
    component: Textarea,
    props: defaultProps,
    selector: 'textarea',
  });

  tests.itSupportsSharedInputDefaults<TextareaProps>({
    component: Textarea,
    props: defaultProps,
    componentName: 'Textarea',
  });

  it('renders bottomSection inside the input wrapper', () => {
    const { container, rerender } = render(
      <Textarea
        label="test-label"
        bottomSection="bottom-content"
        bottomSectionProps={{ 'data-test': 'bottom' }}
      />
    );
    const wrapper = container.querySelector('.mantine-Textarea-wrapper')!;
    const section = screen.getByText('bottom-content');

    expect(wrapper).toHaveAttribute('data-with-bottom-section');
    expect(wrapper).toContainElement(section);
    expect(section).toHaveClass('mantine-Textarea-bottomSection');
    expect(section).toHaveAttribute('data-test', 'bottom');

    rerender(<Textarea label="test-label" />);
    expect(wrapper).not.toHaveAttribute('data-with-bottom-section');
    expect(screen.queryByText('bottom-content')).not.toBeInTheDocument();
  });

  it('sets bottomSection pointer-events with bottomSectionPointerEvents prop', () => {
    const { container, rerender } = render(<Textarea bottomSection="bottom-content" />);
    const wrapper = container.querySelector<HTMLElement>('.mantine-Textarea-wrapper')!;
    expect(wrapper.style.getPropertyValue('--input-bottom-section-pointer-events')).toBe('');

    rerender(<Textarea bottomSection="bottom-content" bottomSectionPointerEvents="all" />);
    expect(wrapper.style.getPropertyValue('--input-bottom-section-pointer-events')).toBe('all');
  });
});
