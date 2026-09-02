import { render, tests } from '@mantine-tests/core';
import { DEFAULT_THEME } from '../../../core';
import { RadioIndicator, RadioIndicatorProps, RadioIndicatorStylesNames } from './RadioIndicator';

const defaultProps: RadioIndicatorProps = {};

describe('@mantine/core/RadioIndicator', () => {
  tests.itSupportsSystemProps<RadioIndicatorProps, RadioIndicatorStylesNames>({
    component: RadioIndicator,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/RadioIndicator',
    stylesApiSelectors: ['indicator', 'icon'],
  });

  it('sets data-checked attribute based on checked prop', () => {
    const { rerender, container } = render(<RadioIndicator checked />);
    expect(container.querySelector('.mantine-RadioIndicator-indicator')).toHaveAttribute(
      'data-checked',
      'true'
    );

    rerender(<RadioIndicator checked={false} />);
    expect(container.querySelector('.mantine-RadioIndicator-indicator')).not.toHaveAttribute(
      'data-checked'
    );
  });

  it('sets data-disabled attribute based on disabled prop', () => {
    const { rerender, container } = render(<RadioIndicator disabled />);
    expect(container.querySelector('.mantine-RadioIndicator-indicator')).toHaveAttribute(
      'data-disabled',
      'true'
    );

    rerender(<RadioIndicator disabled={false} />);
    expect(container.querySelector('.mantine-RadioIndicator-indicator')).not.toHaveAttribute(
      'data-disabled'
    );
  });

  it('always renders icon element', () => {
    const { container, rerender } = render(<RadioIndicator checked />);
    expect(container.querySelector('.mantine-RadioIndicator-icon')).toBeInTheDocument();

    rerender(<RadioIndicator checked={false} />);
    expect(container.querySelector('.mantine-RadioIndicator-icon')).toBeInTheDocument();
  });

  it('applies disabled state visually', () => {
    const { container } = render(<RadioIndicator checked disabled />);
    const indicator = container.querySelector('.mantine-RadioIndicator-indicator');
    expect(indicator).toHaveAttribute('data-checked', 'true');
    expect(indicator).toHaveAttribute('data-disabled', 'true');
  });

  it('resolves light variant colors for theme colors', () => {
    const { container } = render(<RadioIndicator variant="light" color="blue" />);
    const root = container.querySelector('.mantine-RadioIndicator-indicator') as HTMLElement;
    expect(root).toHaveAttribute('data-variant', 'light');
    expect(root.style.getPropertyValue('--radio-bg')).toBe('var(--mantine-color-blue-light)');
    expect(root.style.getPropertyValue('--radio-color')).toBe(
      'var(--mantine-color-blue-light-color)'
    );
    expect(root.style.getPropertyValue('--radio-icon-color')).toBe(
      'var(--mantine-color-blue-light-color)'
    );
  });

  it('resolves light variant colors for css colors', () => {
    const { container } = render(<RadioIndicator variant="light" color="#e64980" />);
    const root = container.querySelector('.mantine-RadioIndicator-indicator') as HTMLElement;
    const background = root.style.getPropertyValue('--radio-bg');
    expect(background).toContain('rgba(');
    expect(background).not.toBe(root.style.getPropertyValue('--radio-icon-color'));
    expect(root.style.getPropertyValue('--radio-icon-color')).toBe('#e64980');
  });

  it('resolves light variant colors for theme colors with shade', () => {
    const { container } = render(<RadioIndicator variant="light" color="grape.7" />);
    const root = container.querySelector('.mantine-RadioIndicator-indicator') as HTMLElement;
    const background = root.style.getPropertyValue('--radio-bg');
    expect(background).not.toBe('grape');
    expect(background).toBe(DEFAULT_THEME.colors.grape[7]);
    expect(root.style.getPropertyValue('--radio-icon-color')).toBe(
      'var(--mantine-color-grape-light-color)'
    );
  });

  it('prefers iconColor over light variant icon color', () => {
    const { container } = render(
      <RadioIndicator variant="light" color="#e64980" iconColor="red" />
    );
    const root = container.querySelector('.mantine-RadioIndicator-indicator') as HTMLElement;
    expect(root.style.getPropertyValue('--radio-icon-color')).toBe(
      'var(--mantine-color-red-filled)'
    );
  });
});
