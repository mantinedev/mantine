/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useId } from '@mantine/hooks';
import { getDefaultZIndex, MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { OptionalPortal } from '../Portal';
import { TransitionOverride } from '../Transition';
import { ModalBaseProvider } from './ModalBase.context';
import { ModalBaseCloseButton } from './ModalBaseCloseButton/ModalBaseCloseButton';
import { ModalBaseOverlay } from './ModalBaseOverlay/ModalBaseOverlay';
import { ModalBaseContent } from './ModalBaseContent/ModalBaseContent';
import { ModalBaseHeader } from './ModalBaseHeader/ModalBaseHeader';
import { ModalBaseTitle } from './ModalBaseTitle/ModalBaseTitle';
import { ModalBaseBody } from './ModalBaseBody/ModalBaseBody';
import { useLockScroll } from './use-lock-scroll';

export interface ModalBaseSettings {
  /** Determines whether modal is opened */
  opened: boolean;

  /** Called when modal is closed */
  onClose(): void;

  /** Child component */
  children?: React.ReactNode;

  /** Determines whether the modal should be closed when user clicks on the overlay, true by default */
  closeOnClickOutside?: boolean;

  /** Transition duration in ms */
  transitionDuration?: number;

  /** Props added to Transition component that used to animate overlay and body, use to configure duration and animation type, { duration: 200, transition: 'pop' } by default */
  transitionProps?: TransitionOverride;

  /** Determines whether component should be rendered inside Portal, true by default */
  withinPortal?: boolean;

  /** Target element or selector where Portal should be rendered, by default new element is created and appended to the document.body */
  target?: HTMLElement | string;

  /** Determines whether scroll should be locked when opened={true}, defaults to true */
  lockScroll?: boolean;

  /** z-index CSS property of root element, 200 by default */
  zIndex?: number;

  /** Key of theme.spacing or number to set content, header and footer padding in px, 'md' by default */
  padding?: MantineNumberSize;

  /** Id used to connect modal with body and title */
  id?: string;
}

interface ModalBaseProps extends ModalBaseSettings {
  /** Base component name for styles and components default props */
  __staticSelector: string;
}

const defaultProps: Partial<ModalBaseProps> = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  transitionProps: { duration: 200, transition: 'pop' },
  zIndex: getDefaultZIndex('modal'),
  padding: 'md',
};

export function ModalBase(props: ModalBaseProps) {
  const {
    opened,
    onClose,
    children,
    closeOnClickOutside,
    __staticSelector,
    transitionProps,
    withinPortal,
    target,
    zIndex,
    lockScroll,
    padding,
    id,
  } = useComponentDefaultProps(props.__staticSelector, defaultProps, props);

  const _id = useId(id);
  const [titleMounted, setTitleMounted] = useState(false);
  const [bodyMounted, setBodyMounted] = useState(false);

  const transitionDuration =
    typeof transitionProps.duration === 'number' ? transitionProps.duration : 200;

  const shouldLockScroll = useLockScroll({ opened, transitionDuration });

  return (
    <OptionalPortal withinPortal={withinPortal} target={target}>
      <ModalBaseProvider
        value={{
          __staticSelector,
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: { ...transitionProps, duration: transitionDuration },
          zIndex,
          padding,
          id: _id,
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
        }}
      >
        <RemoveScroll enabled={shouldLockScroll && lockScroll}>{children}</RemoveScroll>
      </ModalBaseProvider>
    </OptionalPortal>
  );
}

ModalBase.CloseButton = ModalBaseCloseButton;
ModalBase.Overlay = ModalBaseOverlay;
ModalBase.Content = ModalBaseContent;
ModalBase.Header = ModalBaseHeader;
ModalBase.Title = ModalBaseTitle;
ModalBase.Body = ModalBaseBody;
