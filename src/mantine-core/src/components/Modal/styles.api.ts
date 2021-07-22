import { ModalStylesNames } from './Modal';

export const Modal: Record<ModalStylesNames, string> = {
  root: 'Root element, contains modal and overlay',
  inner: 'Modal wrapper, centers modal',
  modal: 'Modal root',
  header: 'Modal header, contains close button and title',
  title: 'Modal title',
  body: 'Modal body, displayed after header',
};
