import { createContextContainer, render, tests } from '@mantine-tests/core';
import { AppShell } from '../AppShell';
import {
  AppShellSection,
  AppShellSectionProps,
  AppShellSectionStylesNames,
} from './AppShellSection';

const TestContainer = createContextContainer<any>(AppShellSection, AppShell, {});

const defaultProps: AppShellSectionProps = {};

describe('@mantine/core/AppShellSection', () => {
  tests.itSupportsSystemProps<any, AppShellSectionStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLElement,
    displayName: '@mantine/core/AppShellSection',
    stylesApiSelectors: ['section'],
    selector: '.mantine-AppShell-section',
    stylesApiName: 'AppShell',
    compound: true,
    providerStylesApi: false,
  });

  tests.itThrowsContextError<any>({
    component: AppShellSection,
    props: defaultProps,
    error: 'AppShell was not found in tree',
  });

  it('sets data-grow attribute based on grow prop', () => {
    const { container, rerender } = render(<TestContainer grow />);
    expect(container.querySelector('.mantine-AppShell-section')).toHaveAttribute(
      'data-grow',
      'true'
    );

    rerender(<TestContainer grow={false} />);
    expect(container.querySelector('.mantine-AppShell-section')).not.toHaveAttribute('data-grow');
  });
});
