import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsProviderVariant } from '@mantine/tests';
import { Prism, PrismProps } from './Prism';

const defaultProps: PrismProps = {
  children: 'test',
  withLineNumbers: true,
  language: 'tsx',
};

describe('@mantine/prism/Prism', () => {
  itSupportsProviderVariant(Prism, defaultProps, 'Prism');
  itSupportsSystemProps({
    component: Prism,
    props: defaultProps,
    displayName: '@mantine/prism/Prism',
    refType: HTMLDivElement,
  });

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

  it('renders pre element without top and bottom margin', () => {
    const { container: prism } = render(<Prism {...defaultProps} />);
    expect(prism.querySelector('.mantine-Prism-code')).toHaveStyle({
      marginTop: 0,
      marginBottom: 0,
    });
  });
});
