import { ModalBaseStack } from '../ModalBase';

export interface ModalStackProps {
  children: React.ReactNode;
}

export function ModalStack({ children }: ModalStackProps) {
  return <ModalBaseStack>{children}</ModalBaseStack>;
}

ModalStack.displayName = '@mantine/core/ModalStack';
