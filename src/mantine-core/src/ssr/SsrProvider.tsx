import React from 'react';
import { JssProvider, createGenerateId, SheetsRegistry } from 'react-jss';
import { applyConsolePatch } from './console-patch';

interface SsrProverProps {
  registry?: SheetsRegistry;
  children: React.ReactNode;
}

export function SsrProvider({ registry, children }: SsrProverProps) {
  applyConsolePatch();
  return (
    <JssProvider registry={registry} generateId={createGenerateId()}>
      {children}
    </JssProvider>
  );
}
