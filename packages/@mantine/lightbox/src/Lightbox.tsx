import { factory, Factory, useProps } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { LightboxCaption } from './LightboxCaption/LightboxCaption';
import { LightboxCloseButton } from './LightboxCloseButton/LightboxCloseButton';
import { LightboxNavigation } from './LightboxNavigation/LightboxNavigation';
import { LightboxProviderComponent } from './LightboxProvider/LightboxProvider';
import {
  LightboxRoot,
  LightboxRootProps,
  LightboxRootStylesNames,
} from './LightboxRoot/LightboxRoot';
import { LightboxSlide } from './LightboxSlide/LightboxSlide';
import { LightboxSlides } from './LightboxSlides/LightboxSlides';
import { LightboxThumbnails } from './LightboxThumbnails/LightboxThumbnails';
import { LightboxToolbar } from './LightboxToolbar/LightboxToolbar';
import { useLightboxZoom } from './hooks/use-lightbox-zoom';
import { lightbox, lightboxStore } from './lightbox.store';
import type { ToolbarItem } from './lightbox.types';
import classes from './Lightbox.module.css';

export type LightboxStylesNames = LightboxRootStylesNames;

export interface LightboxProps extends LightboxRootProps {
  toolbarItems?: ToolbarItem[];
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
  withZoom: false,
  withThumbnails: false,
  withFullscreen: false,
  withDownload: false,
  loop: false,
  withNavigation: true,
  closeOnClickOutside: true,
  closeOnSwipeDown: true,
  transitionDuration: 200,
  zoomMaxScale: 3,
  store: lightboxStore,
} satisfies Partial<LightboxProps>;

export const Lightbox = factory<LightboxFactory>((_props) => {
  const props = useProps('Lightbox', defaultProps, _props);
  const {
    slides,
    toolbarItems,
    withNavigation,
    withZoom,
    zoomMaxScale,
    currentIndex,
    onIndexChange,
    ...others
  } = props;

  const [_currentIndex] = useUncontrolled({
    value: currentIndex,
    defaultValue: 0,
    finalValue: 0,
    onChange: onIndexChange,
  });

  const zoom = useLightboxZoom({
    enabled: !!withZoom,
    maxScale: zoomMaxScale ?? 3,
    currentIndex: _currentIndex,
  });

  return (
    <LightboxRoot
      {...others}
      slides={slides}
      withZoom={withZoom}
      zoomMaxScale={zoomMaxScale}
      currentIndex={currentIndex}
      onIndexChange={onIndexChange}
    >
      <LightboxToolbar toolbarItems={toolbarItems} />

      <LightboxSlides>
        {slides.map((slide, index) => (
          <LightboxSlide
            key={index}
            slide={slide}
            index={index}
            getImageProps={zoom.getImageProps}
          />
        ))}
      </LightboxSlides>

      {withNavigation && <LightboxNavigation />}
      <LightboxCaption />
      <LightboxThumbnails />
    </LightboxRoot>
  );
});

Lightbox.classes = classes;
Lightbox.displayName = '@mantine/lightbox/Lightbox';
Lightbox.Root = LightboxRoot;
Lightbox.Toolbar = LightboxToolbar;
Lightbox.Slides = LightboxSlides;
Lightbox.Slide = LightboxSlide;
Lightbox.Thumbnails = LightboxThumbnails;
Lightbox.Navigation = LightboxNavigation;
Lightbox.Caption = LightboxCaption;
Lightbox.CloseButton = LightboxCloseButton;
Lightbox.Provider = LightboxProviderComponent;
Lightbox.open = lightbox.open;
Lightbox.close = lightbox.close;
Lightbox.next = lightbox.next;
Lightbox.prev = lightbox.prev;
Lightbox.setIndex = lightbox.setIndex;
