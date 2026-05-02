import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { HtmlText, replaceMarkdown } from './HtmlText';

describe('@mantine.dev/HtmlText', () => {
  it('escapes raw html input', () => {
    const result = replaceMarkdown('<script>alert(1)</script>');

    expect(result).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
    expect(result).not.toContain('<script>');
  });

  it('sanitizes unsafe markdown links', () => {
    const result = replaceMarkdown('[Click](javascript:alert(1))');

    expect(result).toContain('href="#"');
    expect(result).toContain('target="_blank"');
    expect(result).toContain('rel="noreferrer"');
  });

  it('keeps safe links unchanged', () => {
    const result = replaceMarkdown('[Mantine](https://mantine.dev)');

    expect(result).toContain('href="https://mantine.dev"');
  });

  it('renders escaped content in component', () => {
    const { container } = render(
      <MantineProvider>
        <HtmlText>{'<img src=x onerror=alert(1) />'}</HtmlText>
      </MantineProvider>
    );

    expect(container.querySelector('img')).toBe(null);
    expect(container.textContent).toContain('<img src=x onerror=alert(1) />');
  });
});
