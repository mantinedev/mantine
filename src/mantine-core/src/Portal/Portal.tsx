/* eslint-disable react/no-unused-prop-types */
import React, { ReactPortal, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '@mantine/hooks';
import { useMantineTheme, useComponentDefaultProps } from '@mantine/styles';

export interface PortalProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLElement | string;

  /** Root element className */
  className?: string;

  /** Root element ref */
  innerRef?: React.MutableRefObject<HTMLDivElement>;
}

export function Portal(props: PortalProps): ReactPortal {
  const { children, target, className, innerRef, ...others } = useComponentDefaultProps(
    'Portal',
    {},
    props
  );

  const theme = useMantineTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>();

  useIsomorphicEffect(() => {
    setMounted(true);
    ref.current = !target
      ? document.createElement('div')
      : typeof target === 'string'
      ? document.querySelector(target)
      : target;

    if (!target) {
      document.body.appendChild(ref.current);
    }

    return () => {
      !target && document.body.removeChild(ref.current);
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className={className} dir={theme.dir} {...others} ref={innerRef}>
      {children}
    </div>,
    ref.current
  );
}

Portal.displayName = '@mantine/core/Portal';
