import { createContext, use } from 'react';
import {
  Button,
  Group,
  Modal,
  PasswordInput,
  TextInput,
  useModal,
  UseModalReturnValue,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { createContext, use } from 'react';
import { Button, Group, Modal, PasswordInput, TextInput, useModal, UseModalReturnValue } from '@mantine/core';

const AuthModalContext = createContext<UseModalReturnValue | null>(null);

function useAuthModal() {
  const ctx = use(AuthModalContext);
  if (!ctx) {
    throw new Error('useAuthModal must be used within AuthModalProvider');
  }
  return ctx;
}

function SignInForm() {
  const authModal = useAuthModal();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        authModal.close();
      }}
    >
      <TextInput data-autofocus label="Email" placeholder="you@example.com" required />
      <PasswordInput label="Password" placeholder="Your password" required mt="md" />
      <Button type="submit" fullWidth mt="xl">
        Sign in
      </Button>
    </form>
  );
}

function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const modal = useModal({
    title: 'Sign in',
    children: <SignInForm />,
  });

  return (
    <AuthModalContext value={modal}>
      {children}
      <Modal.Outlet />
    </AuthModalContext>
  );
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
`;

const AuthModalContext = createContext<UseModalReturnValue | null>(null);

function useAuthModal() {
  const ctx = use(AuthModalContext);
  if (!ctx) {
    throw new Error('useAuthModal must be used within AuthModalProvider');
  }
  return ctx;
}

function SignInForm() {
  const authModal = useAuthModal();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        authModal.close();
      }}
    >
      <TextInput data-autofocus label="Email" placeholder="you@example.com" required />
      <PasswordInput label="Password" placeholder="Your password" required mt="md" />
      <Button type="submit" fullWidth mt="xl">
        Sign in
      </Button>
    </form>
  );
}

function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const modal = useModal({
    title: 'Sign in',
    children: <SignInForm />,
  });

  return (
    <AuthModalContext value={modal}>
      {children}
      <Modal.Outlet />
    </AuthModalContext>
  );
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
