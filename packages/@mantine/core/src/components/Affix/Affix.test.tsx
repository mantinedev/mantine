import { render, screen, tests } from '@mantine-tests/core';
import { Affix, AffixProps, AffixStylesNames } from './Affix';

const defaultProps: AffixProps = {
  withinPortal: false,
};

describe('@mantine/core/Affix', () => {
  tests.itSupportsSystemProps<AffixProps, AffixStylesNames>({
    component: Affix,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Affix',
    stylesApiSelectors: ['root'],
  });

  it('renders content inside portal when withinPortal is true', () => {
    const { container } = render(<Affix withinPortal>affix-content</Affix>, undefined, {
      env: 'default',
    });

    expect(container.querySelector('.mantine-Affix-root')).toBe(null);
    expect(screen.getByText('affix-content')).toBeInTheDocument();
  });

  it('renders content inside parent element when withinPortal is false', () => {
    const { container } = render(<Affix withinPortal={false}>affix-content</Affix>, undefined, {
      env: 'default',
    });

    expect(container.querySelector('.mantine-Affix-root')).toBeInTheDocument();
  });

  it('adds safe area insets to position offsets with withSafeArea prop', () => {
    const { container } = render(
      <Affix withinPortal={false} withSafeArea position={{ bottom: 10, right: 0 }} />
    );

    const affix = container.querySelector('.mantine-Affix-root')!;
    expect(affix).toHaveStyle({
      '--affix-bottom':
        'calc(calc(0.625rem * var(--mantine-scale)) + env(safe-area-inset-bottom, 0px))',
      '--affix-right': 'calc(0rem + env(safe-area-inset-right, 0px))',
    });
    expect((affix as HTMLElement).style.getPropertyValue('--affix-top')).toBe('');
  });
});
