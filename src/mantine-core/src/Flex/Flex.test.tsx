import React from 'react';
import { render } from '@testing-library/react';
import { rem } from '@mantine/styles';
import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { Flex, FlexProps } from './Flex';

const defaultProps: FlexProps = {};

describe('@mantine/core/Flex', () => {
  itRendersChildren(Flex, defaultProps);
  itSupportsSystemProps({
    component: Flex,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Flex',
    providerName: 'Flex',
  });

  it('has display: flex style', () => {
    const { container } = render(<Flex />);
    expect(container.firstChild).toHaveStyle({ display: 'flex' });
  });

  it('sets flex-direction based on direction prop', () => {
    const { container } = render(<Flex direction="column" />);
    expect(container.firstChild).toHaveStyle({ flexDirection: 'column' });
  });

  it('sets flex-wrap based on wrap prop', () => {
    const { container } = render(<Flex wrap="nowrap" />);
    expect(container.firstChild).toHaveStyle({ flexWrap: 'nowrap' });
  });

  it('sets align-items based on align prop', () => {
    const { container } = render(<Flex align="center" />);
    expect(container.firstChild).toHaveStyle({ alignItems: 'center' });
  });

  it('sets justify-content based on align prop', () => {
    const { container } = render(<Flex justify="flex-end" />);
    expect(container.firstChild).toHaveStyle({ justifyContent: 'flex-end' });
  });

  it('sets gap based on gap prop', () => {
    const { container } = render(<Flex gap={52} />);
    expect(container.firstChild).toHaveStyle({ gap: rem(52) });
  });

  it('sets row-gap based on rowGap prop', () => {
    const { container } = render(<Flex rowGap={34} />);
    expect(container.firstChild).toHaveStyle({ rowGap: rem(34) });
  });

  it('sets column-gap based on columnGap prop', () => {
    const { container } = render(<Flex columnGap={76} />);
    expect(container.firstChild).toHaveStyle({ columnGap: rem(76) });
  });
});
