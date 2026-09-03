import { factory, Factory, useProps } from '@mantine/core';
import { lightbox } from './lightbox.store';
import type { ToolbarItems } from './lightbox.types';
import { LightboxCaption } from './LightboxCaption/LightboxCaption';
import { LightboxCloseButton } from './LightboxCloseButton/LightboxCloseButton';
import { LightboxNavigation } from './LightboxNavigation/LightboxNavigation';
import type { LightboxProviderComponent } from './LightboxProvider/LightboxProvider';
import {
  LightboxRoot,
  lightboxRootDefaultProps,
  LightboxRootProps,
  LightboxRootStylesNames,
} from './LightboxRoot/LightboxRoot';
import { LightboxSlide } from './LightboxSlide/LightboxSlide';
import { LightboxSlides } from './LightboxSlides/LightboxSlides';
import { LightboxThumbnails } from './LightboxThumbnails/LightboxThumbnails';
import { LightboxToolbar } from './LightboxToolbar/LightboxToolbar';
import classes from './Lightbox.module.css';

export type LightboxStylesNames = LightboxRootStylesNames;

export interface LightboxProps extends Omit<LightboxRootProps, 'children'> {
  /** Custom toolbar items, overrides default toolbar. Can be a function that receives the current lightbox state and handlers. */
  toolbarItems?: ToolbarItems;

  /** Shows previous/next navigation arrows @default true */
  withNavigation?: boolean;

  /** Custom lightbox layout, overrides the default layout built from compound components */
  children?: React.ReactNode;
}

export type LightboxFactory = Factory<{
  props: LightboxProps;
  ref: HTMLDivElement;
  stylesNames: LightboxStylesNames;
  staticComponents: {
    Root: typeof LightboxRoot;
    Toolbar: typeof LightboxToolbar;
    Slides: typeof LightboxSlides;
    Slide: typeof LightboxSlide;
    Thumbnails: typeof LightboxThumbnails;
    Navigation: typeof LightboxNavigation;
    Caption: typeof LightboxCaption;
    CloseButton: typeof LightboxCloseButton;
    Provider: typeof LightboxProviderComponent;
    open: typeof lightbox.open;
    close: typeof lightbox.close;
    next: typeof lightbox.next;
    prev: typeof lightbox.prev;
    setIndex: typeof lightbox.setIndex;
  };
}>;

const defaultProps = {
  ...lightboxRootDefaultProps,
  withNavigation: true,
} satisfies Partial<LightboxProps>;

export const LightboxBase = factory<LightboxFactory>((_props) => {
  const props = useProps('Lightbox', defaultProps, _props);
  const { slides, toolbarItems, withNavigation, children, ...others } = props;

  return (
    <LightboxRoot {...others} slides={slides}>
      {children ?? (
        <>
          <LightboxToolbar toolbarItems={toolbarItems} />

          <LightboxSlides>
            {slides.map((slide, index) => (
              <LightboxSlide key={index} slide={slide} index={index} />
            ))}
          </LightboxSlides>

          {withNavigation && <LightboxNavigation />}
          <LightboxCaption />
          <LightboxThumbnails />
        </>
      )}
    </LightboxRoot>
  );
});

LightboxBase.classes = classes;
LightboxBase.displayName = '@mantine/lightbox/Lightbox';
LightboxBase.Root = LightboxRoot;
LightboxBase.Toolbar = LightboxToolbar;
LightboxBase.Slides = LightboxSlides;
LightboxBase.Slide = LightboxSlide;
LightboxBase.Thumbnails = LightboxThumbnails;
LightboxBase.Navigation = LightboxNavigation;
LightboxBase.Caption = LightboxCaption;
LightboxBase.CloseButton = LightboxCloseButton;
LightboxBase.open = lightbox.open;
LightboxBase.close = lightbox.close;
LightboxBase.next = lightbox.next;
LightboxBase.prev = lightbox.prev;
LightboxBase.setIndex = lightbox.setIndex;
