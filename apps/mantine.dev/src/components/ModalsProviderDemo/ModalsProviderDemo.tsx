import { IconCheck } from '@tabler/icons-react';
import { Button, Center, Loader, rem, Stack, Text } from '@mantine/core';
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

const asyncDemonstrationModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string; loading: boolean }>) => (
  <>
    <Stack>
      <Text size="sm">{innerProps.modalBody}</Text>
      <Center>
        {innerProps.loading ? (
          <Loader size={32} />
        ) : (
          <IconCheck style={{ width: rem(32), height: rem(32), color: 'green' }} />
        )}
      </Center>
    </Stack>
    <Button fullWidth mt="md" disabled={innerProps.loading} onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

export function ModalsProviderDemo({ children }: ModalsProviderDemoProps) {
  return (
    <ModalsProvider
      labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
      modals={{ demonstration: demonstrationModal, asyncDemonstration: asyncDemonstrationModal }}
    >
      {children}
    </ModalsProvider>
  );
}
