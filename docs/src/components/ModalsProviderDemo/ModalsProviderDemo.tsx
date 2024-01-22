import React from 'react';
import { Button, Text } from '@mantine/core';
import { ContextModalProps, ModalsProvider } from '@mantine/modals';

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
