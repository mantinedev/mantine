import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { assignRef, useIsomorphicEffect } from '@mantine/hooks';
import { Factory, factory, useProps } from '../../core';

function createPortalNode(props: React.ComponentPropsWithoutRef<'div'>) {
  const node = document.createElement('div');
  node.setAttribute('data-portal', 'true');
  typeof props.className === 'string' &&
    node.classList.add(...props.className.split(' ').filter(Boolean));
  typeof props.style === 'object' && Object.assign(node.style, props.style);
  typeof props.id === 'string' && node.setAttribute('id', props.id);
  return node;
}

export interface BasePortalProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
  target?: HTMLElement | string;

  /** If set, all portals are rendered in the same DOM node, `true` by default */
  reuseTargetNode?: boolean;
}

export interface PortalProps extends BasePortalProps {
  /** Portal children, for example, custom modal or popover */
  children: React.ReactNode;
}

function getTargetNode({ target, reuseTargetNode, ...others }: BasePortalProps): HTMLElement {
  if (target) {
    if (typeof target === 'string') {
      return document.querySelector<HTMLElement>(target) || createPortalNode(others);
    }

    return target;
  }

  if (reuseTargetNode) {
    const existingNode = document.querySelector<HTMLElement>('[data-mantine-shared-portal-node]');

    if (existingNode) {
      return existingNode;
    }

    const node = createPortalNode(others);
    node.setAttribute('data-mantine-shared-portal-node', 'true');
    document.body.appendChild(node);
    return node;
  }

  return createPortalNode(others);
}

export type PortalFactory = Factory<{
  props: PortalProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {
  reuseTargetNode: true,
} satisfies Partial<PortalProps>;

export const Portal = factory<PortalFactory>((props, ref) => {
  const { children, target, reuseTargetNode, ...others } = useProps('Portal', defaultProps, props);

  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = getTargetNode({ target, reuseTargetNode, ...others });
    assignRef(ref, nodeRef.current);

    if (!target && !reuseTargetNode && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }

    return () => {
      if (!target && !reuseTargetNode && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);

  if (!mounted || !nodeRef.current) {
    return null;
  }

  return createPortal(<>{children}</>, nodeRef.current);
});

Portal.displayName = '@mantine/core/Portal';
