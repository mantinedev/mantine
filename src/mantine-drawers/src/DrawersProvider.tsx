import React, { useCallback, useMemo, useReducer } from 'react';
import { Drawer } from '@mantine/core';
import { randomId } from '@mantine/hooks';

import { ConfirmDrawer } from './ConfirmDrawer';
import {
  ConfirmLabels,
  ContextDrawerProps,
  DrawersContext,
  DrawersContextProps,
  DrawerSettings,
  OpenConfirmDrawer,
  OpenContextDrawer,
} from './context';
import { useDrawersEvents } from './events';
import { drawersReducer } from './reducer';

export interface DrawersProviderProps {
  /** Your app */
  children: React.ReactNode;

  /** Predefined drawers */
  drawers?: Record<string, React.FC<ContextDrawerProps<any>>>;

  /** Shared Drawer component props, applied for every drawer */
  drawerProps?: DrawerSettings;

  /** Confirm drawer labels */
  labels?: ConfirmLabels;
}

function separateConfirmDrawerProps(props: OpenConfirmDrawer) {
  if (!props) {
    return { confirmProps: {}, drawerProps: {} };
  }

  const {
    id,
    children,
    onCancel,
    onConfirm,
    closeOnConfirm,
    closeOnCancel,
    cancelProps,
    confirmProps,
    groupProps,
    labels,
    ...others
  } = props;

  return {
    confirmProps: {
      id,
      children,
      onCancel,
      onConfirm,
      closeOnConfirm,
      closeOnCancel,
      cancelProps,
      confirmProps,
      groupProps,
      labels,
    },
    drawerProps: {
      id,
      ...others,
    },
  };
}

export function DrawersProvider({
  children,
  drawerProps,
  labels,
  drawers,
}: DrawersProviderProps) {
  const [state, dispatch] = useReducer(drawersReducer, {
    drawers: [],
    current: null,
  });

  const closeAll = useCallback(
    (canceled?: boolean) => {
      state.drawers.forEach((drawer) => {
        if (drawer.type === 'confirm' && canceled) {
          drawer.props?.onCancel?.();
        }

        drawer.props?.onClose?.();
      });
      dispatch({ type: 'CLOSE_ALL' });
    },
    [state.drawers],
  );

  const openDrawer = ({ drawerId, ...props }: DrawerSettings) => {
    const id = drawerId || randomId();

    dispatch({
      type: 'OPEN',
      payload: {
        id,
        type: 'content',
        props,
      },
    });
    return id;
  };

  const openConfirmDrawer = ({ drawerId, ...props }: OpenConfirmDrawer) => {
    const id = drawerId || randomId();
    dispatch({
      type: 'OPEN',
      payload: {
        id,
        type: 'confirm',
        props,
      },
    });
    return id;
  };

  const openContextDrawer = (
    drawer: string,
    { drawerId, ...props }: OpenContextDrawer,
  ) => {
    const id = drawerId || randomId();
    dispatch({
      type: 'OPEN',
      payload: {
        id,
        type: 'context',
        props,
        ctx: drawer,
      },
    });
    return id;
  };

  const closeDrawer = useCallback(
    (id: string | undefined, canceled?: boolean) => {
      if (state.drawers.length <= 1) {
        closeAll(canceled);
        return;
      }

      const drawer = state.drawers.find((item) => item.id === id);
      if (!drawer) return;
      if (drawer?.type === 'confirm' && canceled) {
        drawer.props?.onCancel?.();
      }
      drawer?.props?.onClose?.();
      dispatch({ type: 'CLOSE', payload: drawer.id });
    },
    [closeAll, state.drawers],
  );

  useDrawersEvents({
    openDrawer,
    openConfirmDrawer,
    openContextDrawer: ({ drawer, ...payload }) =>
      openContextDrawer(drawer, payload),
    closeDrawer,
    closeAllDrawers: closeAll,
  });

  const ctx: DrawersContextProps = useMemo(
    () => ({
      drawers: state.drawers,
      openDrawer,
      openConfirmDrawer,
      openContextDrawer,
      closeDrawer,
      closeAll,
    }),
    [closeAll, state.drawers, closeDrawer],
  );

  const getCurrentDrawer = () => {
    switch (state.current?.type) {
      case 'context': {
        const { innerProps, ...rest } = state.current.props;
        const ContextDrawer = drawers?.[state.current.ctx];

        return {
          drawerProps: rest,
          content: ContextDrawer ? (
            <ContextDrawer
              innerProps={innerProps}
              context={ctx}
              id={state.current.id}
            />
          ) : null,
        };
      }
      case 'confirm': {
        const {
          drawerProps: separatedDrawerProps,
          confirmProps: separatedConfirmProps,
        } = separateConfirmDrawerProps(state.current.props);

        return {
          drawerProps: separatedDrawerProps,
          content: (
            <ConfirmDrawer
              {...separatedConfirmProps}
              id={state.current.id}
              labels={state.current.props.labels || labels}
            />
          ),
        };
      }
      case 'content': {
        const { children: currentDrawerChildren, ...rest } =
          state.current.props;

        return {
          drawerProps: rest,
          content: currentDrawerChildren,
        };
      }
      default: {
        return {
          drawerProps: {},
          content: null,
        };
      }
    }
  };

  const { drawerProps: currentDrawerProps, content } = getCurrentDrawer();

  return (
    <DrawersContext.Provider value={ctx}>
      <Drawer
        {...drawerProps}
        {...currentDrawerProps}
        opened={state.drawers.length > 0}
        onClose={() => closeDrawer(state.current?.id)}
      >
        {content}
      </Drawer>

      {children}
    </DrawersContext.Provider>
  );
}
