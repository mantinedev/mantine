import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { Affix, AffixProps } from './Affix';

const defaultProps: AffixProps = {
  withinPortal: false,
  children: 'test-element',
};

describe('@mantine/core/Affix', () => {
  itRendersChildren(Affix, defaultProps);
  itSupportsSystemProps({
    component: Affix,
    props: defaultProps,
    displayName: '@mantine/core/Affix',
    refType: HTMLDivElement,
    providerName: 'Affix',
  });

  it('sets z-index based on zIndex prop', () => {
    const { container } = render(<Affix {...defaultProps} zIndex={124} />);
    expect(container.firstChild).toHaveStyle({ zIndex: 124 });
  });

  it('sets left, top, right, bottom styles based on position prop', () => {
    const { container } = render(
      <Affix
        {...defaultProps}
        position={{
          right: '45%',
          bottom: '16rem',
          top: '76vh',
          left: '34em',
        }}
      />
    );
    expect(container.firstChild).toHaveStyle({
      right: '45%',
      bottom: '16rem',
      top: '76vh',
      left: '34em',
    });
  });
});
