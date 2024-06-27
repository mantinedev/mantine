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
});
