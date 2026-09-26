import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { ActionBar } from '../ActionBar';
import {
  ActionBarCloseButton,
  ActionBarCloseButtonProps,
  ActionBarCloseButtonStylesNames,
} from './ActionBarCloseButton';

const defaultProps: ActionBarCloseButtonProps = {};

const ContextContainer = createContextContainer(ActionBarCloseButton, ActionBar, {
  opened: true,
  withinPortal: false,
  transitionProps: { duration: 0 },
});

describe('@mantine/core/ActionBarCloseButton', () => {
  tests.itSupportsSystemProps<ActionBarCloseButtonProps, ActionBarCloseButtonStylesNames>({
    component: ContextContainer,
    props: defaultProps,
    displayName: '@mantine/core/ActionBarCloseButton',
    stylesApiSelectors: ['closeButton'],
    stylesApiName: 'ActionBar',
    selector: '.mantine-ActionBar-closeButton',
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError({
    component: ActionBarCloseButton,
    props: defaultProps,
    error: 'ActionBar component was not found in the tree',
  });

  it('calls onClick and ActionBar onClose when clicked', async () => {
    const onClick = jest.fn();
    const onClose = jest.fn();
    render(
      <ActionBar opened withinPortal={false} onClose={onClose}>
        <ActionBarCloseButton aria-label="Clear selection" onClick={onClick} />
      </ActionBar>
    );

    await userEvent.click(screen.getByRole('button', { name: 'Clear selection' }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('prefers own unstyled prop over the ActionBar one', () => {
    render(
      <ActionBar opened withinPortal={false}>
        <ActionBarCloseButton unstyled />
      </ActionBar>
    );

    expect(screen.getByRole('button').className).not.toContain('mantine-focus-auto');
  });
});
