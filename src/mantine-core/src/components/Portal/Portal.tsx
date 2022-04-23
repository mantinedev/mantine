import React, { ReactPortal, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '@mantine/hooks';
import { useMantineTheme, useMantineDefaultProps } from '@mantine/styles';

export interface PortalProps {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLElement | string;

  /** Root element className */
  className?: string;

  zIndex?: number;
}

export function Portal(props: PortalProps): ReactPortal {
  const { children, target, className } = useMantineDefaultProps('Portal', {}, props);

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
    <div
      className={className}
      dir={theme.dir}
      style={{ zIndex: props.zIndex, position: 'relative' }}
    >
      {children}
    </div>,
    ref.current
  );
}

Portal.displayName = '@mantine/core/Portal';
