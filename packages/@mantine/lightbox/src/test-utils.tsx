import type { LightboxSlideData } from './lightbox.types';
import { LightboxRoot, LightboxRootProps } from './LightboxRoot/LightboxRoot';

export const testSlides: LightboxSlideData[] = [
  { src: 'image1.jpg', alt: 'First image', caption: 'Caption 1', thumbSrc: 'thumb1.jpg' },
  { src: 'image2.jpg', alt: 'Second image', caption: 'Caption 2', thumbSrc: 'thumb2.jpg' },
  { src: 'image3.jpg', alt: 'Third image', thumbSrc: 'thumb3.jpg' },
];

export const defaultRootProps: LightboxRootProps = {
  opened: true,
  onClose: jest.fn(),
  slides: testSlides,
  children: null,
};

export function LightboxWrapper({
  children,
  ...props
}: Partial<LightboxRootProps> & { children: React.ReactNode }) {
  return (
    <LightboxRoot {...defaultRootProps} {...props}>
      {children}
    </LightboxRoot>
  );
}
