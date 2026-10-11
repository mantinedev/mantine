import { render, tests } from '@mantine-tests/core';
import { Flex, FlexProps, FlexStylesNames } from './Flex';

const defaultProps: FlexProps = {};

describe('@mantine/core/Flex', () => {
  tests.itSupportsSystemProps<FlexProps, FlexStylesNames>({
    component: Flex,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Flex',
    stylesApiSelectors: ['root'],
  });

  it('supports gap style prop', () => {
    const { container } = render(<Flex gap="2em" />);
    expect(container.querySelector('.mantine-Flex-root')).toHaveStyle({ gap: '2em' });
  });

  it('supports rowGap style prop', () => {
    const { container } = render(<Flex rowGap="2em" />);
    expect(container.querySelector('.mantine-Flex-root')).toHaveStyle({ rowGap: '2em' });
  });

  it('supports columnGap style prop', () => {
    const { container } = render(<Flex columnGap="2em" />);
    expect(container.querySelector('.mantine-Flex-root')).toHaveStyle({ columnGap: '2em' });
  });

  it('supports align style prop', () => {
    const { container } = render(<Flex align="center" />);
    expect(container.querySelector('.mantine-Flex-root')).toHaveStyle({ alignItems: 'center' });
  });

  it('supports justify style prop', () => {
    const { container } = render(<Flex justify="center" />);
    expect(container.querySelector('.mantine-Flex-root')).toHaveStyle({
      justifyContent: 'center',
    });
  });

  it('supports wrap style prop', () => {
    const { container } = render(<Flex wrap="wrap" />);
    expect(container.querySelector('.mantine-Flex-root')).toHaveStyle({ flexWrap: 'wrap' });
  });

  it('supports direction style prop', () => {
    const { container } = render(<Flex direction="column" />);
    expect(container.querySelector('.mantine-Flex-root')).toHaveStyle({
      flexDirection: 'column',
    });
  });

  it('does not add responsive class name when style props are not responsive', () => {
    const { container } = render(<Flex direction="column" gap="md" />);
    const root = container.querySelector('.mantine-Flex-root')!;
    expect(root.className).not.toContain('__m__');
    expect(container.querySelector('[data-mantine-styles="inline"]')).toBeNull();
  });

  it('supports responsive style props', () => {
    const { container } = render(<Flex direction={{ base: 'column', sm: 'row' }} gap="md" />);
    const root = container.querySelector('.mantine-Flex-root')!;
    const responsiveClassName = Array.from(root.classList).find((c) => c.startsWith('__m__'));

    expect(responsiveClassName).toBeDefined();
    expect(root).toHaveStyle({ gap: 'var(--mantine-spacing-md)' });

    const styles = container.querySelector('[data-mantine-styles="inline"]')!.textContent;
    expect(styles).toContain(`.${responsiveClassName}{flex-direction:column;}`);
    expect(styles).toContain(`.${responsiveClassName}{flex-direction:row;}`);
    expect(styles).toContain('@media(min-width: 48em)');
  });
});
