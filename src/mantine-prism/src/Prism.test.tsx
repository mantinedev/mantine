import React from 'react';
import { shallow } from 'enzyme';
import { Language } from 'prism-react-renderer';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { Prism } from './Prism';
import { Prism as PrismStylesApi } from './styles.api';

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

describe('@mantine/prism/Prism', () => {
  itSupportsClassName(Prism, defaultProps);
  itSupportsMargins(Prism, defaultProps);
  itSupportsOthers(Prism, defaultProps);
  itSupportsStyle(Prism, defaultProps);
  itSupportsStylesApi(Prism, defaultProps, Object.keys(PrismStylesApi), 'Prism');

  it('renders tooltip based on noCopy prop', () => {
    const withCopy = shallow(<Prism {...defaultProps} noCopy={false} />);
    const withoutCopy = shallow(<Prism {...defaultProps} noCopy />);

    expect(withCopy.render().find('[data-mantine-copy]')).toHaveLength(1);
    expect(withoutCopy.render().find('[data-mantine-copy]')).toHaveLength(0);
  });

  it('renders line numbers based on withLineNumbers prop', () => {
    const withLineNumbers = shallow(<Prism {...defaultProps} withLineNumbers />);
    const withoutLineNumbers = shallow(<Prism {...defaultProps} withLineNumbers={false} />);
    expect(withLineNumbers.render().find('[data-mantine-line-number]')).toHaveLength(
      defaultProps.children.split('\n').length
    );
    expect(withoutLineNumbers.render().find('[data-mantine-line-number]')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Prism.displayName).toEqual('@mantine/prism/Prism');
  });
});
