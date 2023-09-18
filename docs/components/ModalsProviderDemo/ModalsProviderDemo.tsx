import React from 'react';
import { Text, Button } from '@mantine/core';
import { ModalsProvider, ContextModalProps } from '@mantine/modals';

interface ModalsProviderDemoProps {
  children: React.ReactNode;
}

const demonstrationModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

export function ModalsProviderDemo({ children }: ModalsProviderDemoProps) {
  return (
    <ModalsProvider
      labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
      modals={{ demonstration: demonstrationModal }}
    >
      {children}
    </ModalsProvider>
  );
}
