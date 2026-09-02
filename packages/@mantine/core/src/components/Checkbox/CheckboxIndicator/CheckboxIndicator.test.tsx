import { render, tests } from '@mantine-tests/core';
import { DEFAULT_THEME } from '../../../core';
import {
  CheckboxIndicator,
  CheckboxIndicatorProps,
  CheckboxIndicatorStylesNames,
} from './CheckboxIndicator';

const defaultProps: CheckboxIndicatorProps = {};

describe('@mantine/core/CheckboxIndicator', () => {
  tests.itSupportsSystemProps<CheckboxIndicatorProps, CheckboxIndicatorStylesNames>({
    component: CheckboxIndicator,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/CheckboxIndicator',
    stylesApiSelectors: ['indicator', 'icon'],
  });

  it('resolves light variant colors for theme colors', () => {
    const { container } = render(<CheckboxIndicator variant="light" color="blue" />);
    const root = container.querySelector('.mantine-CheckboxIndicator-indicator') as HTMLElement;
    expect(root).toHaveAttribute('data-variant', 'light');
    expect(root.style.getPropertyValue('--checkbox-bg')).toBe('var(--mantine-color-blue-light)');
    expect(root.style.getPropertyValue('--checkbox-color')).toBe(
      'var(--mantine-color-blue-light-color)'
    );
    expect(root.style.getPropertyValue('--checkbox-icon-color')).toBe(
      'var(--mantine-color-blue-light-color)'
    );
  });

  it('resolves light variant colors for css colors', () => {
    const { container } = render(<CheckboxIndicator variant="light" color="#e64980" />);
    const root = container.querySelector('.mantine-CheckboxIndicator-indicator') as HTMLElement;
    const background = root.style.getPropertyValue('--checkbox-bg');
    expect(background).toContain('rgba(');
    expect(background).not.toBe(root.style.getPropertyValue('--checkbox-icon-color'));
    expect(root.style.getPropertyValue('--checkbox-icon-color')).toBe('#e64980');
  });

  it('resolves light variant colors for theme colors with shade', () => {
    const { container } = render(<CheckboxIndicator variant="light" color="grape.7" />);
    const root = container.querySelector('.mantine-CheckboxIndicator-indicator') as HTMLElement;
    const background = root.style.getPropertyValue('--checkbox-bg');
    expect(background).not.toBe('grape');
    expect(background).toBe(DEFAULT_THEME.colors.grape[7]);
    expect(root.style.getPropertyValue('--checkbox-icon-color')).toBe(
      'var(--mantine-color-grape-light-color)'
    );
  });

  it('prefers iconColor over light variant icon color', () => {
    const { container } = render(
      <CheckboxIndicator variant="light" color="#e64980" iconColor="red" />
    );
    const root = container.querySelector('.mantine-CheckboxIndicator-indicator') as HTMLElement;
    expect(root.style.getPropertyValue('--checkbox-icon-color')).toBe(
      'var(--mantine-color-red-filled)'
    );
  });
});
