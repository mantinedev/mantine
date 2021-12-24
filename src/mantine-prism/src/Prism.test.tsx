import React from 'react';
import { render } from '@testing-library/react';
import { Language } from 'prism-react-renderer';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsSx,
  itSupportsRef,
  mockResizeObserver,
} from '@mantine/tests';
import { Prism, PrismTab, PrismTabs } from './Prism';

const code = `import React from 'react';
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const defaultProps = {
  children: code,
  withLineNumbers: true,
  language: 'tsx' as Language,
};

mockResizeObserver();

describe('@mantine/prism/Prism', () => {
  itSupportsClassName(Prism, defaultProps);
  itSupportsMargins(Prism, defaultProps);
  itSupportsOthers(Prism, defaultProps);
  itSupportsStyle(Prism, defaultProps);
  itSupportsSx(Prism, defaultProps);
  itSupportsRef(Prism, defaultProps, HTMLDivElement);

  it('renders tooltip based on noCopy prop', () => {
    const { container: withCopy } = render(<Prism {...defaultProps} noCopy={false} />);
    const { container: withoutCopy } = render(<Prism {...defaultProps} noCopy />);

    expect(withCopy.querySelectorAll('.mantine-Prism-copy')).toHaveLength(1);
    expect(withoutCopy.querySelectorAll('.mantine-Prism-copy')).toHaveLength(0);
  });

  it('renders line numbers based on withLineNumbers prop', () => {
    const { container: withLineNumbers } = render(<Prism {...defaultProps} withLineNumbers />);
    const { container: withoutLineNumbers } = render(
      <Prism {...defaultProps} withLineNumbers={false} />
    );
    expect(withLineNumbers.querySelectorAll('.mantine-Prism-lineNumber')).toHaveLength(
      defaultProps.children.split('\n').length
    );
    expect(withoutLineNumbers.querySelectorAll('.mantine-Prism-lineNumber')).toHaveLength(0);
  });

  it('exposes PrismTabs and PrismTab components', () => {
    expect(Prism.Tabs).toBe(PrismTabs);
    expect(Prism.Tab).toBe(PrismTab);
  });

  it('has correct displayName', () => {
    expect(Prism.displayName).toEqual('@mantine/prism/Prism');
  });
});

const defaultTabsProps = {
  children: [
    <Prism.Tab language="tsx" key="1">
      code
    </Prism.Tab>,
  ],
};

describe('@mantine/prism/Prism.Tabs', () => {
  itSupportsClassName(Prism.Tabs, defaultTabsProps);
  itSupportsMargins(Prism.Tabs, defaultTabsProps);
  itSupportsOthers(Prism.Tabs, defaultTabsProps);
  itSupportsStyle(Prism.Tabs, defaultTabsProps);
  itSupportsSx(Prism.Tabs, defaultTabsProps);
  itSupportsRef(Prism.Tabs, defaultTabsProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Prism.Tabs.displayName).toEqual('@mantine/prism/Tabs');
  });
});
