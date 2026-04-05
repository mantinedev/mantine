import { useCallback, useEffect, useState } from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  FocusTrap,
  Portal,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { useFullscreenDocument, useUncontrolled } from '@mantine/hooks';
import { LightboxContextProvider } from '../lightbox.context';
import { lightboxStore, LightboxStore } from '../lightbox.store';
import type { LightboxSlideData, ToolbarItem } from '../lightbox.types';
import { useLightboxKeyboard } from '../hooks/use-lightbox-keyboard';
import { useLightboxZoom } from '../hooks/use-lightbox-zoom';
import classes from '../Lightbox.module.css';

export type LightboxRootStylesNames =
  | 'root'
  | 'overlay'
  | 'toolbar'
  | 'toolbarGroup'
  | 'toolbarButton'
  | 'counter'
  | 'slides'
  | 'slidesViewport'
  | 'slidesContainer'
  | 'slide'
  | 'slideImage'
  | 'slideVideo'
  | 'thumbnails'
  | 'thumbnailsViewport'
  | 'thumbnailsContainer'
  | 'thumbnail'
  | 'thumbnailImage'
  | 'navigation'
  | 'navigationButton'
  | 'caption'
  | 'closeButton';

export type LightboxCssVariables = {
  root:
    | '--lightbox-transition-duration'
    | '--lightbox-overlay-color'
    | '--lightbox-z-index'
    | '--lightbox-toolbar-height'
    | '--lightbox-thumbnails-height';
};

export interface LightboxRootProps
  extends BoxProps, StylesApiProps<LightboxRootFactory>, ElementProps<'div', 'children'> {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
  slides: LightboxSlideData[];
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  store?: LightboxStore;
  withZoom?: boolean;
  withThumbnails?: boolean;
  withFullscreen?: boolean;
  withDownload?: boolean;
  toolbarItems?: ToolbarItem[];
  loop?: boolean;
  withNavigation?: boolean;
  closeOnClickOutside?: boolean;
  closeOnSwipeDown?: boolean;
  transitionDuration?: number;
  emblaOptions?: EmblaOptionsType;
  zoomMaxScale?: number;
}

export type LightboxRootFactory = Factory<{
  props: LightboxRootProps;
  ref: HTMLDivElement;
  stylesNames: LightboxRootStylesNames;
  vars: LightboxCssVariables;
}>;

const defaultProps = {
  store: lightboxStore,
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
} satisfies Partial<LightboxRootProps>;

const varsResolver = createVarsResolver<LightboxRootFactory>((_, { transitionDuration }) => ({
  root: {
    '--lightbox-transition-duration': `${transitionDuration}ms`,
    '--lightbox-overlay-color': undefined,
    '--lightbox-z-index': undefined,
    '--lightbox-toolbar-height': undefined,
    '--lightbox-thumbnails-height': undefined,
  },
}));

export const LightboxRoot = factory<LightboxRootFactory>((_props) => {
  const props = useProps('LightboxRoot', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    onClose,
    children,
    slides,
    currentIndex,
    onIndexChange,
    store,
    withZoom,
    withThumbnails,
    withFullscreen,
    withDownload,
    loop,
    closeOnClickOutside,
    transitionDuration,
    emblaOptions,
    zoomMaxScale,
    attributes,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<LightboxRootFactory>({
    name: 'Lightbox',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const [_currentIndex, setCurrentIndex] = useUncontrolled({
    value: currentIndex,
    defaultValue: 0,
    finalValue: 0,
    onChange: onIndexChange,
  });

  const [emblaRef, embla] = useEmblaCarousel({
    loop,
    startIndex: _currentIndex,
    watchDrag: !withZoom,
    ...emblaOptions,
  });

  const [thumbnailsVisible, setThumbnailsVisible] = useState(!!withThumbnails);
  const { toggle: toggleFullscreenFn, fullscreen: isFullscreen } = useFullscreenDocument();

  const toggleThumbnails = useCallback(() => {
    setThumbnailsVisible((prev) => !prev);
  }, []);

  const toggleFullscreen = useCallback(() => {
    toggleFullscreenFn();
  }, [toggleFullscreenFn]);

  const zoom = useLightboxZoom({
    enabled: !!withZoom,
    maxScale: zoomMaxScale!,
    currentIndex: _currentIndex,
  });

  const handleNext = useCallback(() => {
    embla?.scrollNext();
  }, [embla]);

  const handlePrev = useCallback(() => {
    embla?.scrollPrev();
  }, [embla]);

  useLightboxKeyboard({
    opened,
    onClose,
    onNext: handleNext,
    onPrev: handlePrev,
    onToggleFullscreen: withFullscreen ? toggleFullscreen : undefined,
    onToggleThumbnails: withThumbnails ? toggleThumbnails : undefined,
    onToggleZoom: withZoom ? zoom.toggleZoom : undefined,
  });

  useEffect(() => {
    if (!embla) {
      return undefined;
    }

    const onSelect = () => {
      setCurrentIndex(embla.selectedScrollSnap());
    };

    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla, setCurrentIndex]);

  useEffect(() => {
    if (embla && opened) {
      embla.scrollTo(_currentIndex, true);
    }
  }, [opened]);

  useEffect(() => {
    if (!opened) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [opened]);

  if (!opened) {
    return null;
  }

  return (
    <Portal>
      <FocusTrap active>
        <LightboxContextProvider
          value={{
            getStyles,
            store: store!,
            slides,
            currentIndex: _currentIndex,
            setIndex: (index: number) => {
              setCurrentIndex(index);
              embla?.scrollTo(index);
            },
            embla: embla ?? null,
            emblaRef,
            withZoom: !!withZoom,
            withThumbnails: !!withThumbnails,
            withFullscreen: !!withFullscreen,
            withDownload: !!withDownload,
            thumbnailsVisible,
            toggleThumbnails,
            isFullscreen,
            toggleFullscreen,
            zoomState: zoom.zoomState,
            toggleZoom: zoom.toggleZoom,
            onClose,
            loop: !!loop,
          }}
        >
          <Box
            {...getStyles('root')}
            {...others}
            role="dialog"
            aria-modal="true"
            aria-roledescription="carousel"
            tabIndex={-1}
            mod={mod}
            onClick={(event) => {
              if (closeOnClickOutside && event.target === event.currentTarget) {
                onClose();
              }
            }}
          >
            {children}
          </Box>
        </LightboxContextProvider>
      </FocusTrap>
    </Portal>
  );
});

LightboxRoot.classes = classes;
LightboxRoot.varsResolver = varsResolver;
LightboxRoot.displayName = '@mantine/lightbox/LightboxRoot';
