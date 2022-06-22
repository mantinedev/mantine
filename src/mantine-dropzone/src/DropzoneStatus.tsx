import { upperFirst } from '@mantine/hooks';
import React, { cloneElement, Children } from 'react';
import { DropzoneContextValue, useDropzoneContext } from './Dropzone.context';

export interface DropzoneStatusProps {
  children: React.ReactNode;
}

function createDropzoneStatus(status: keyof DropzoneContextValue) {
  const Component = ({ children, ...others }: DropzoneStatusProps): JSX.Element => {
    const ctx = useDropzoneContext();
    if (ctx[status]) {
      return cloneElement(Children.only(children) as React.ReactElement, others);
    }

    return null;
  };

  Component.displayName = `@mantine/dropzone/${upperFirst(status)}`;

  return Component;
}

export const DropzoneAccept = createDropzoneStatus('accept');
export const DropzoneReject = createDropzoneStatus('reject');
export const DropzoneIdle = createDropzoneStatus('idle');

export type DropzoneAcceptProps = DropzoneStatusProps;
export type DropzoneRejectProps = DropzoneStatusProps;
export type DropzoneIdleProps = DropzoneStatusProps;
