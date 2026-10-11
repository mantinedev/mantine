import { createRef } from 'react';
import { renderToString } from 'react-dom/server';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { MantineProvider } from '../../core';
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

      rerender(<TableOfContents size="lg" />);
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

      rerender(<TableOfContents size="md" />);
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

      rerender(<TableOfContents minDepthToOffset={0} />);
      expect(getOffsets()).toStrictEqual(['1', '2']);
    });

    it('displays guideline for rail variant by default', () => {
      const { container, rerender } = render(<TableOfContents />);
      expect(getRoot(container)).toHaveAttribute('data-with-guideline');

      rerender(<TableOfContents withGuideline={false} />);
      expect(getRoot(container)).not.toHaveAttribute('data-with-guideline');

      rerender(<TableOfContents variant="filled" />);
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

    it('sets data-active and aria-current on the active control', () => {
      const { container } = render(<TableOfContents />);
      const controls = container.querySelectorAll('.mantine-TableOfContents-control');
      expect(controls[1]).toHaveAttribute('data-active');
      expect(controls[1]).toHaveAttribute('aria-current', 'location');
      expect(controls[0]).not.toHaveAttribute('data-active');
      expect(controls[0]).not.toHaveAttribute('aria-current');
    });

    it('scrolls to the heading when control is clicked', async () => {
      const scrollIntoView = jest.fn();
      const original = HTMLElement.prototype.scrollIntoView;
      HTMLElement.prototype.scrollIntoView = scrollIntoView;

      render(<TableOfContents />);
      await userEvent.click(screen.getByRole('button', { name: 'Second' }));
      expect(scrollIntoView).toHaveBeenCalledTimes(1);
      expect(scrollIntoView.mock.contexts[0]).toBe(document.getElementById('toc-h2'));

      HTMLElement.prototype.scrollIntoView = original;
    });

    it('passes getControlProps output to controls', () => {
      const getControlProps = jest.fn(({ active, data }) => ({
        children: `${data.value}-${active ? 'active' : 'inactive'}`,
        'data-test': data.id,
      }));
      render(<TableOfContents getControlProps={getControlProps} />);
      expect(screen.getByRole('button', { name: 'First-inactive' })).toHaveAttribute(
        'data-test',
        'toc-h1'
      );
      expect(screen.getByRole('button', { name: 'Second-active' })).toHaveAttribute(
        'data-test',
        'toc-h2'
      );
    });

    it('assigns reinitialize function to reinitializeRef', () => {
      const ref = createRef<() => void>() as React.RefObject<() => void>;
      render(<TableOfContents reinitializeRef={ref} />);
      expect(typeof ref.current).toBe('function');
    });
  });

  it('renders controls from initialData before headings are retrieved', () => {
    const html = renderToString(
      <MantineProvider>
        <TableOfContents
          initialData={[
            { id: '1', value: 'Initial heading 1', depth: 1 },
            { id: '2', value: 'Initial heading 2', depth: 2 },
          ]}
        />
      </MantineProvider>
    );
    expect(html).toContain('Initial heading 1');
    expect(html).toContain('Initial heading 2');
  });
});
