import { render, tests } from '@mantine-tests/core';
import { Stack, StackProps, StackStylesNames } from './Stack';

const defaultProps: StackProps = {};

describe('@mantine/core/Stack', () => {
  tests.itSupportsSystemProps<StackProps, StackStylesNames>({
    component: Stack,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Stack',
    stylesApiSelectors: ['root'],
  });

  it('supports gap prop', () => {
    const { container } = render(<Stack gap="2rem" />);
    expect(container.querySelector('.mantine-Stack-root')).toHaveStyle({ '--stack-gap': '2rem' });
  });

  it('supports align prop', () => {
    const { container } = render(<Stack align="center" />);
    expect(container.querySelector('.mantine-Stack-root')).toHaveStyle({
      '--stack-align': 'center',
    });
  });

  it('supports justify prop', () => {
    const { container } = render(<Stack justify="space-between" />);
    expect(container.querySelector('.mantine-Stack-root')).toHaveStyle({
      '--stack-justify': 'space-between',
    });
  });

  it('supports responsive gap, align and justify props', () => {
    const { container } = render(
      <Stack
        gap={{ base: '1rem', md: '2rem' }}
        align={{ base: 'flex-start', md: 'center' }}
        justify={{ base: 'flex-start', md: 'space-between' }}
      />
    );

    const styles = container.querySelector('[data-mantine-styles="inline"]');
    expect(styles).toHaveTextContent('--stack-gap:1rem');
    expect(styles).toHaveTextContent('--stack-align:flex-start');
    expect(styles).toHaveTextContent('--stack-justify:flex-start');
    expect(styles).toHaveTextContent('--stack-gap:2rem');
    expect(styles).toHaveTextContent('--stack-align:center');
    expect(styles).toHaveTextContent('--stack-justify:space-between');
  });
});
