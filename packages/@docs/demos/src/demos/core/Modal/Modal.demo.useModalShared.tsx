import { createContext, use, useState } from 'react';
import { Button, Group, Text, useModal, UseModalReturnValue } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { createContext, use } from 'react';
import { Button, Group, useModal, UseModalReturnValue } from '@mantine/core';
import { AuthenticationForm } from './AuthenticationForm';

const AuthModalContext = createContext<UseModalReturnValue | null>(null);

function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const modal = useModal({
    title: 'Sign in',
    children: <AuthenticationForm />,
  });

  return <AuthModalContext value={modal}>{children}</AuthModalContext>;
}

function useAuthModal() {
  const ctx = use(AuthModalContext);
  if (!ctx) {
    throw new Error('useAuthModal must be used within AuthModalProvider');
  }
  return ctx;
}

// Any component in the application, no matter how deep
function Header() {
  const authModal = useAuthModal();
  return <Button onClick={() => authModal.open()}>Sign in</Button>;
}

function ProtectedAction() {
  const authModal = useAuthModal();
  return (
    <Button variant="default" onClick={() => authModal.open({ title: 'Sign in to continue' })}>
      Download report
    </Button>
  );
}

function Demo() {
  return (
    <AuthModalProvider>
      <Group justify="center">
        <Header />
        <ProtectedAction />
      </Group>
    </AuthModalProvider>
  );
}
`;

const AuthModalContext = createContext<UseModalReturnValue | null>(null);

function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [submitted, setSubmitted] = useState(0);
  const modal = useModal({
    title: 'Sign in',
    children: (
      <>
        <AuthenticationForm noShadow noPadding />
        <Text size="xs" c="dimmed" mt="md">
          Opened from {submitted === 0 ? 'nowhere yet' : `${submitted} place(s)`}
        </Text>
      </>
    ),
    onOpen: () => setSubmitted((c) => c + 1),
  });

  return <AuthModalContext value={modal}>{children}</AuthModalContext>;
}

function useAuthModal() {
  const ctx = use(AuthModalContext);
  if (!ctx) {
    throw new Error('useAuthModal must be used within AuthModalProvider');
  }
  return ctx;
}

function Header() {
  const authModal = useAuthModal();
  return <Button onClick={() => authModal.open()}>Sign in</Button>;
}

function ProtectedAction() {
  const authModal = useAuthModal();
  return (
    <Button variant="default" onClick={() => authModal.open({ title: 'Sign in to continue' })}>
      Download report
    </Button>
  );
}

function Demo() {
  return (
    <AuthModalProvider>
      <Group justify="center">
        <Header />
        <ProtectedAction />
      </Group>
    </AuthModalProvider>
  );
}

export const useModalShared: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
  defaultExpanded: false,
};
