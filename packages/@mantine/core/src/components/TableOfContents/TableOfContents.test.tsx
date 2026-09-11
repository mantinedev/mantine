import { render, tests } from '@mantine-tests/core';
import {
  TableOfContents,
  TableOfContentsProps,
  TableOfContentsStylesNames,
} from './TableOfContents';

const defaultProps: TableOfContentsProps = {};

function getRoot(container: HTMLElement) {
  return container.querySelector('.mantine-TableOfContents-root') as HTMLElement;
}

describe('@mantine/core/TableOfContents', () => {
  tests.itSupportsSystemProps<TableOfContentsProps, TableOfContentsStylesNames>({
    component: TableOfContents,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/TableOfContents',
    stylesApiSelectors: ['root'],
  });

  describe('variants', () => {
    let headings: HTMLElement;

    beforeEach(() => {
      headings = document.createElement('div');
      headings.innerHTML = '<h1 id="toc-h1">First</h1><h2 id="toc-h2">Second</h2>';
      document.body.appendChild(headings);
    });

    afterEach(() => {
      headings.remove();
    });

    it('uses rail variant by default', () => {
      const { container } = render(<TableOfContents />);
      const root = getRoot(container);
      expect(root).toHaveAttribute('data-variant', 'rail');
      expect(container.querySelector('.mantine-TableOfContents-control')).toHaveAttribute(
        'data-variant',
        'rail'
      );
      expect(root.style.getPropertyValue('--toc-rail-color')).toBe(
        'var(--mantine-color-blue-filled)'
      );
      expect(root.style.getPropertyValue('--toc-bg')).toBe('');
      expect(root.style.getPropertyValue('--toc-color')).toBe('');
    });

    it('sets rail color based on color prop', () => {
      const { container } = render(<TableOfContents color="red" />);
      expect(getRoot(container).style.getPropertyValue('--toc-rail-color')).toBe(
        'var(--mantine-color-red-filled)'
      );
    });

    it('sets active control colors for filled variant', () => {
      const { container } = render(<TableOfContents variant="filled" />);
      const root = getRoot(container);
      expect(root.style.getPropertyValue('--toc-bg')).toBe('var(--mantine-color-blue-filled)');
      expect(root.style.getPropertyValue('--toc-color')).toBe('var(--mantine-color-white)');
      expect(root.style.getPropertyValue('--toc-rail-color')).toBe('');
    });

    it('does not set active control colors for none variant', () => {
      const { container } = render(<TableOfContents variant="none" />);
      const root = getRoot(container);
      expect(root.style.getPropertyValue('--toc-bg')).toBe('');
      expect(root.style.getPropertyValue('--toc-color')).toBe('');
      expect(root.style.getPropertyValue('--toc-rail-color')).toBe('');
    });

    it('sets font size based on size prop', () => {
      const { container, rerender } = render(<TableOfContents />);
      expect(getRoot(container).style.getPropertyValue('--toc-size')).toBe('');

      rerender(
        <>
          <TableOfContents size="lg" />
        </>
      );
      expect(getRoot(container).style.getPropertyValue('--toc-size')).toBe(
        'var(--mantine-font-size-lg)'
      );
    });

    it('sets padding and depth offset based on size prop', () => {
      const { container, rerender } = render(<TableOfContents />);
      let root = getRoot(container);
      expect(root.style.getPropertyValue('--toc-padding-y')).toBe('');
      expect(root.style.getPropertyValue('--toc-padding-x')).toBe('');
      expect(root.style.getPropertyValue('--toc-depth-offset')).toBe('');

      rerender(
        <>
          <TableOfContents size="md" />
        </>
      );
      root = getRoot(container);
      expect(root.style.getPropertyValue('--toc-padding-y')).toBe('var(--toc-padding-y-md)');
      expect(root.style.getPropertyValue('--toc-padding-x')).toBe('var(--toc-padding-x-md)');
      expect(root.style.getPropertyValue('--toc-depth-offset')).toBe('var(--toc-depth-offset-md)');
    });

    it('changes only font-size for numeric and custom sizes', () => {
      const { container } = render(<TableOfContents size={20} />);
      const root = getRoot(container);
      expect(root.style.getPropertyValue('--toc-size')).toBe(
        'calc(1.25rem * var(--mantine-scale))'
      );
      expect(root.style.getPropertyValue('--toc-padding-y')).toBe('');
      expect(root.style.getPropertyValue('--toc-padding-x')).toBe('');
      expect(root.style.getPropertyValue('--toc-depth-offset')).toBe('');
    });

    it('sets depth offset from depthOffset prop', () => {
      const { container } = render(<TableOfContents size="lg" depthOffset={40} />);
      expect(getRoot(container).style.getPropertyValue('--toc-depth-offset')).toBe(
        'calc(2.5rem * var(--mantine-scale))'
      );
    });

    it('sets depth offset multiplier based on minDepthToOffset prop', () => {
      const { container, rerender } = render(<TableOfContents />);
      const getOffsets = () =>
        Array.from(container.querySelectorAll('.mantine-TableOfContents-control')).map((control) =>
          (control as HTMLElement).style.getPropertyValue('--depth-offset')
        );
      expect(getOffsets()).toStrictEqual(['0', '1']);

      rerender(
        <>
          <TableOfContents minDepthToOffset={0} />
        </>
      );
      expect(getOffsets()).toStrictEqual(['1', '2']);
    });

    it('displays guideline for rail variant by default', () => {
      const { container, rerender } = render(<TableOfContents />);
      expect(getRoot(container)).toHaveAttribute('data-with-guideline');

      rerender(
        <>
          <TableOfContents withGuideline={false} />
        </>
      );
      expect(getRoot(container)).not.toHaveAttribute('data-with-guideline');

      rerender(
        <>
          <TableOfContents variant="filled" />
        </>
      );
      expect(getRoot(container)).not.toHaveAttribute('data-with-guideline');
    });

    it('keeps guideline modifier when mod prop is passed', () => {
      const { container } = render(<TableOfContents mod={{ compact: true }} />);
      const root = getRoot(container);
      expect(root).toHaveAttribute('data-with-guideline');
      expect(root).toHaveAttribute('data-compact');
    });

    it('renders controls for headings found in the document', () => {
      const { container } = render(<TableOfContents />);
      const controls = container.querySelectorAll('.mantine-TableOfContents-control');
      expect(controls).toHaveLength(2);
      expect(controls[0]).toHaveTextContent('First');
      expect(controls[1]).toHaveTextContent('Second');
    });
  });
});
