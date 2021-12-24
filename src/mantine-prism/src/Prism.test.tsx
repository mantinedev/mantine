import React from 'react';
import { shallow } from 'enzyme';
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
    const withCopy = shallow(<Prism {...defaultProps} noCopy={false} />);
    const withoutCopy = shallow(<Prism {...defaultProps} noCopy />);

    expect(withCopy.render().find('.mantine-Prism-copy')).toHaveLength(1);
    expect(withoutCopy.render().find('.mantine-Prism-copy')).toHaveLength(0);
  });

  it('renders line numbers based on withLineNumbers prop', () => {
    const withLineNumbers = shallow(<Prism {...defaultProps} withLineNumbers />);
    const withoutLineNumbers = shallow(<Prism {...defaultProps} withLineNumbers={false} />);
    expect(withLineNumbers.render().find('.mantine-Prism-lineNumber')).toHaveLength(
      defaultProps.children.split('\n').length
    );
    expect(withoutLineNumbers.render().find('.mantine-Prism-lineNumber')).toHaveLength(0);
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
