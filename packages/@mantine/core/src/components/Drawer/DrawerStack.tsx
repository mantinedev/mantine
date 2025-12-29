import { ModalBaseStack } from '../ModalBase';

export interface DrawerStackProps {
  children: React.ReactNode;
}

export function DrawerStack({ children }: DrawerStackProps) {
  return <ModalBaseStack>{children}</ModalBaseStack>;
}

DrawerStack.displayName = '@mantine/core/DrawerStack';
