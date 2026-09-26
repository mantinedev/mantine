import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { ActionBar } from '../ActionBar';
import {
  ActionBarDivider,
  ActionBarDividerProps,
  ActionBarDividerStylesNames,
} from './ActionBarDivider';

const defaultProps: ActionBarDividerProps = {};

const ContextContainer = createContextContainer(ActionBarDivider, ActionBar, {
  opened: true,
  withinPortal: false,
  transitionProps: { duration: 0 },
});

describe('@mantine/core/ActionBarDivider', () => {
  tests.itSupportsSystemProps<ActionBarDividerProps, ActionBarDividerStylesNames>({
    component: ContextContainer,
    props: defaultProps,
    displayName: '@mantine/core/ActionBarDivider',
    stylesApiSelectors: ['divider'],
    stylesApiName: 'ActionBar',
    selector: '.mantine-ActionBar-divider',
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError({
    component: ActionBarDivider,
    props: defaultProps,
    error: 'ActionBar component was not found in the tree',
  });

  it('renders vertical separator by default', () => {
    render(<ContextContainer />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('allows overriding role', () => {
    render(<ContextContainer role="presentation" />);
    expect(screen.queryByRole('separator')).not.toBeInTheDocument();
  });

  it('allows overriding aria-orientation', () => {
    render(<ContextContainer aria-orientation="horizontal" />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });
});
