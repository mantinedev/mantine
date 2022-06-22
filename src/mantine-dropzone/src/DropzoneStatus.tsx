import React, { cloneElement, Children } from 'react';
import { DropzoneContextValue, useDropzoneContext } from './Dropzone.context';

interface DropzoneStatusProps {
  children: React.ReactNode;
}

function createDropzoneStatus(status: keyof DropzoneContextValue) {
  return ({ children, ...others }: DropzoneStatusProps): JSX.Element => {
    const ctx = useDropzoneContext();
    if (ctx[status]) {
      return cloneElement(Children.only(children) as React.ReactElement, others);
    }

    return null;
  };
}

export const DropzoneAccept = createDropzoneStatus('accept');
export const DropzoneReject = createDropzoneStatus('reject');
export const DropzoneIdle = createDropzoneStatus('idle');
