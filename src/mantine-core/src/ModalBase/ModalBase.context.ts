import { createSafeContext } from '@mantine/utils';

interface ModalBaseContext {
  __staticSelector: string;
  opened: boolean;
  onClose(): void;
  closeOnClickOutside: boolean;
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContext>(
  'ModalBase component was not found in tree'
);
