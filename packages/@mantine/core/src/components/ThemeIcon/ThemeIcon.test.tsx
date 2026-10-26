import { render, tests } from '@mantine-tests/core';
import { ThemeIcon, ThemeIconProps, ThemeIconStylesNames } from './ThemeIcon';

const defaultProps: ThemeIconProps = {};

describe('@mantine/core/ThemeIcon', () => {
  tests.itSupportsSystemProps<ThemeIconProps, ThemeIconStylesNames>({
    component: ThemeIcon,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/ThemeIcon',
    stylesApiSelectors: ['root'],
  });

  it('keeps white text when autoContrast is disabled on the component', () => {
    const { container } = render(<ThemeIcon autoContrast={false} />, {
      autoContrast: true,
      primaryColor: 'yellow',
    });
    expect(container.querySelector('.mantine-ThemeIcon-root')).toHaveStyle({
      '--ti-color': 'var(--mantine-color-white)',
    });
  });
});
