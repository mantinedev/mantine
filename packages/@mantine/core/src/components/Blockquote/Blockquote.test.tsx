import { render, tests } from '@mantine-tests/core';
import { Blockquote, BlockquoteProps, BlockquoteStylesNames } from './Blockquote';

const defaultProps: BlockquoteProps = {
  icon: 'test-icon',
};

function getRoot(container: HTMLElement) {
  return container.querySelector('.mantine-Blockquote-root') as HTMLElement;
}

describe('@mantine/core/Blockquote', () => {
  tests.itSupportsSystemProps<BlockquoteProps, BlockquoteStylesNames>({
    component: Blockquote,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Blockquote',
    stylesApiSelectors: ['root', 'icon'],
  });

  it('uses primary color for accent line and icon by default', () => {
    const { container } = render(<Blockquote {...defaultProps}>test</Blockquote>);
    const root = getRoot(container);
    expect(root.style.getPropertyValue('--bq-bd')).toBe('var(--mantine-color-blue-filled)');
    expect(root.style.getPropertyValue('--bq-icon-color')).toBe('var(--mantine-color-blue-text)');
  });

  it('uses filled shade for accent line and text shade for icon with theme color', () => {
    const { container } = render(
      <Blockquote {...defaultProps} color="red">
        test
      </Blockquote>
    );
    const root = getRoot(container);
    expect(root.style.getPropertyValue('--bq-bd')).toBe('var(--mantine-color-red-filled)');
    expect(root.style.getPropertyValue('--bq-icon-color')).toBe('var(--mantine-color-red-text)');
  });

  it('uses exact shade for accent line and icon when color has shade index', () => {
    const { container } = render(
      <Blockquote {...defaultProps} color="red.4">
        test
      </Blockquote>
    );
    const root = getRoot(container);
    expect(root.style.getPropertyValue('--bq-bd')).toBe('var(--mantine-color-red-4)');
    expect(root.style.getPropertyValue('--bq-icon-color')).toBe('var(--mantine-color-red-4)');
  });

  it('uses raw value for accent line and icon with css color', () => {
    const { container } = render(
      <Blockquote {...defaultProps} color="#F0000E">
        test
      </Blockquote>
    );
    const root = getRoot(container);
    expect(root.style.getPropertyValue('--bq-bd')).toBe('#F0000E');
    expect(root.style.getPropertyValue('--bq-icon-color')).toBe('#F0000E');
  });

  it('sets icon size css variable', () => {
    const { container, rerender } = render(<Blockquote {...defaultProps}>test</Blockquote>);
    expect(getRoot(container).style.getPropertyValue('--bq-icon-size')).toBe(
      'calc(1.5rem * var(--mantine-scale))'
    );

    rerender(
      <Blockquote {...defaultProps} iconSize={32}>
        test
      </Blockquote>
    );
    expect(getRoot(container).style.getPropertyValue('--bq-icon-size')).toBe(
      'calc(2rem * var(--mantine-scale))'
    );
  });

  it('does not set text-wrap css variable when textWrap is not given', () => {
    const { container, rerender } = render(<Blockquote {...defaultProps}>test</Blockquote>);
    expect(getRoot(container).style.getPropertyValue('--bq-text-wrap')).toBe('');

    rerender(
      <Blockquote {...defaultProps} textWrap="balance">
        test
      </Blockquote>
    );
    expect(getRoot(container).style.getPropertyValue('--bq-text-wrap')).toBe('balance');
  });

  it('hides the icon from assistive technologies', () => {
    const { container } = render(<Blockquote {...defaultProps}>test</Blockquote>);
    expect(container.querySelector('.mantine-Blockquote-icon')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  it('renders cite when cite prop is set', () => {
    const { container } = render(
      <Blockquote {...defaultProps} cite="– Author">
        test
      </Blockquote>
    );
    expect(container.querySelector('.mantine-Blockquote-cite')).toHaveTextContent('– Author');
  });
});
