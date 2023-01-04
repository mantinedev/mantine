import { createSafeContext } from '@mantine/utils';

interface ModalBaseContext {
  opened: boolean;
  onClose(): void;
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContext>(
  'ModalBase component was not found in tree'
);
