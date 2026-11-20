/** @jest-environment node */

import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { useDocumentVisibility } from './use-document-visibility';

function TestComponent({ serverSnapshot }: { serverSnapshot?: DocumentVisibilityState }) {
  return createElement('span', null, useDocumentVisibility(serverSnapshot));
}

describe('@mantine/hooks/use-document-visibility server rendering', () => {
  it('preserves visible as the default server snapshot without a document', () => {
    expect(typeof document).toBe('undefined');
    expect(renderToString(createElement(TestComponent))).toBe('<span>visible</span>');
  });

  it('supports a hidden server snapshot without a document', () => {
    expect(typeof document).toBe('undefined');
    expect(renderToString(createElement(TestComponent, { serverSnapshot: 'hidden' }))).toBe(
      '<span>hidden</span>'
    );
  });
});
