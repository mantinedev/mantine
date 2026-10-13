import { useRef, useState } from 'react';
import { Button, Group, Text, useModal, UseModalOptions } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useRef, useState } from 'react';
import { Button, Group, Text, useModal, UseModalOptions } from '@mantine/core';

interface ConfirmOptions extends UseModalOptions {
  labels?: { confirm: React.ReactNode; cancel: React.ReactNode };
  confirmColor?: string;
}

function useConfirmModal(defaults: ConfirmOptions = {}) {
  const resolveRef = useRef<((confirmed: boolean) => void) | null>(null);
  const modal = useModal({
    ...defaults,
    onClose: () => {
      resolveRef.current?.(false);
      resolveRef.current = null;
      defaults.onClose?.();
    },
  });

  return (options: ConfirmOptions = {}) =>
    new Promise<boolean>((resolve) => {
      const { labels, confirmColor, children, ...modalProps } = { ...defaults, ...options };
      const settle = (confirmed: boolean) => {
        resolveRef.current = null;
        resolve(confirmed);
        modal.close();
      };

      resolveRef.current = resolve;
      modal.open({
        ...modalProps,
        children: (
          <>
            {children}
            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={() => settle(false)}>
                {labels?.cancel ?? 'Cancel'}
              </Button>
              <Button color={confirmColor} onClick={() => settle(true)}>
                {labels?.confirm ?? 'Confirm'}
              </Button>
            </Group>
          </>
        ),
      });
    });
}

function Demo() {
  const [result, setResult] = useState('No result yet');
  const confirm = useConfirmModal({ title: 'Please confirm', size: 'sm' });

  const handleDelete = async () => {
    const confirmed = await confirm({
      children: <Text size="sm">This action cannot be undone. Delete the profile?</Text>,
      labels: { confirm: 'Delete profile', cancel: 'Keep it' },
      confirmColor: 'red',
    });

    setResult(confirmed ? 'Profile deleted' : 'Deletion canceled');
  };

  return (
    <Group justify="center">
      <Button color="red" onClick={handleDelete}>
        Delete profile
      </Button>
      <Text size="sm">{result}</Text>
    </Group>
  );
}
`;

interface ConfirmOptions extends UseModalOptions {
  labels?: { confirm: React.ReactNode; cancel: React.ReactNode };
  confirmColor?: string;
}

function useConfirmModal(defaults: ConfirmOptions = {}) {
  const resolveRef = useRef<((confirmed: boolean) => void) | null>(null);
  const modal = useModal({
    ...defaults,
    onClose: () => {
      resolveRef.current?.(false);
      resolveRef.current = null;
      defaults.onClose?.();
    },
  });

  return (options: ConfirmOptions = {}) =>
    new Promise<boolean>((resolve) => {
      const { labels, confirmColor, children, ...modalProps } = { ...defaults, ...options };
      const settle = (confirmed: boolean) => {
        resolveRef.current = null;
        resolve(confirmed);
        modal.close();
      };

      resolveRef.current = resolve;
      modal.open({
        ...modalProps,
        children: (
          <>
            {children}
            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={() => settle(false)}>
                {labels?.cancel ?? 'Cancel'}
              </Button>
              <Button color={confirmColor} onClick={() => settle(true)}>
                {labels?.confirm ?? 'Confirm'}
              </Button>
            </Group>
          </>
        ),
      });
    });
}

function Demo() {
  const [result, setResult] = useState('No result yet');
  const confirm = useConfirmModal({ title: 'Please confirm', size: 'sm' });

  const handleDelete = async () => {
    const confirmed = await confirm({
      children: <Text size="sm">This action cannot be undone. Delete the profile?</Text>,
      labels: { confirm: 'Delete profile', cancel: 'Keep it' },
      confirmColor: 'red',
    });

    setResult(confirmed ? 'Profile deleted' : 'Deletion canceled');
  };

  return (
    <Group justify="center">
      <Button color="red" onClick={handleDelete}>
        Delete profile
      </Button>
      <Text size="sm">{result}</Text>
    </Group>
  );
}

export const useModalConfirm: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
  defaultExpanded: false,
};
