import { render } from '@mantine-tests/core';
import { InlineStyles } from './InlineStyles';

describe('@mantine/core/InlineStyles', () => {
  it('renders styles', () => {
    const { container } = render(<InlineStyles selector="body" styles={{ color: 'red' }} />);
    expect(container.querySelector('[data-mantine-styles="inline"]')).toHaveTextContent(
      'body{color:red;}'
    );
  });

  it('renders media styles', () => {
    const { container } = render(
      <InlineStyles
        selector="body"
        styles={{ color: 'red' }}
        media={[{ query: '(min-width:500px)', styles: { color: 'blue' } }]}
      />
    );
    expect(container.querySelector('[data-mantine-styles="inline"]')).toHaveTextContent(
      'body{color:red;}@media(min-width:500px){body{color:blue;}}'
    );
  });

  it('renders container styles', () => {
    const { container } = render(
      <InlineStyles
        selector="body"
        styles={{ color: 'red' }}
        container={[{ query: 'aside (min-width:500px)', styles: { color: 'blue' } }]}
      />
    );
    expect(container.querySelector('[data-mantine-styles="inline"]')).toHaveTextContent(
      'body{color:red;}@container aside (min-width:500px){body{color:blue;}}'
    );
  });

  it('renders with href and precedence when deduplicate is true', () => {
    render(<InlineStyles selector=".test" styles={{ color: 'red' }} deduplicate />);
    const headStyle = document.head.querySelector('style[data-href]');
    expect(headStyle).not.toBeNull();
    expect(headStyle!.textContent).toContain('.test{color:red;}');
  });

  it('does not render data-mantine-styles attribute when deduplicate is true', () => {
    const { container } = render(
      <InlineStyles selector=".test" styles={{ color: 'red' }} deduplicate />
    );
    const inlineStyle = container.querySelector('[data-mantine-styles="inline"]');
    expect(inlineStyle).toBeNull();
  });
});
