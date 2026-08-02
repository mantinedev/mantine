import { useCallback, useEffect, useRef, useState } from 'react';
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
  /** Controls whether the lightbox is opened */
  opened: boolean;

  /** Called when the lightbox is closed */
  onClose: () => void;

  /** Lightbox content (compound components) */
  children: React.ReactNode;

  /** Array of slide data objects */
  slides: LightboxSlideData[];

  /** Controlled current slide index */
  currentIndex?: number;

  /** Called when the current slide index changes */
  onIndexChange?: (index: number) => void;

  /** Lightbox store, can be used to create multiple instances @default lightboxStore */
  store?: LightboxStore;

  /** Enables image zoom on click/pinch @default false */
  withZoom?: boolean;

  /** Shows bottom thumbnail strip @default false */
  withThumbnails?: boolean;

  /** Adds fullscreen toggle to toolbar @default false */
  withFullscreen?: boolean;

  /** Adds download button to toolbar @default false */
  withDownload?: boolean;

  /** Custom toolbar items, overrides default toolbar */
  toolbarItems?: ToolbarItem[];

  /** Enables infinite loop navigation @default false */
  loop?: boolean;

  /** Shows previous/next navigation arrows @default true */
  withNavigation?: boolean;

  /** Closes lightbox when clicking outside slide content @default true */
  closeOnClickOutside?: boolean;

  /** Closes lightbox when swiping down on mobile @default true */
  closeOnSwipeDown?: boolean;

  /** Transition duration in milliseconds @default 200 */
  transitionDuration?: number;

  /** Additional Embla carousel options */
  emblaOptions?: EmblaOptionsType;

  /** Maximum zoom scale @default 3 */
  zoomMaxScale?: number;

  /** Enables animated slide transitions for programmatic navigation @default false */
  withSlideTransition?: boolean;
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
  withSlideTransition: false,
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
    closeOnSwipeDown,
    transitionDuration,
    emblaOptions,
    zoomMaxScale,
    withSlideTransition,
    withNavigation,
    toolbarItems,
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

  const zoomIsActive = useRef(false);
  const prevOpenedRef = useRef(opened);
  const startIndexRef = useRef(_currentIndex);
  const currentIndexRef = useRef(_currentIndex);

  currentIndexRef.current = _currentIndex;

  if (opened && !prevOpenedRef.current) {
    startIndexRef.current = _currentIndex;
  }

  const [emblaRef, embla] = useEmblaCarousel({
    loop,
    startIndex: startIndexRef.current,
    watchDrag: withZoom ? () => !zoomIsActive.current : true,
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

  zoomIsActive.current = zoom.zoomState.isZoomed;

  const [slidePhase, setSlidePhase] = useState<'idle' | 'dragging' | 'snapping'>('idle');

  useEffect(() => {
    if (!embla) {
      return undefined;
    }

    const onPointerDown = () => {
      setSlidePhase('dragging');
    };

    const onPointerUp = () => {
      setSlidePhase('snapping');
    };

    const onSettle = () => {
      setSlidePhase('idle');
    };

    embla.on('pointerDown', onPointerDown);
    embla.on('pointerUp', onPointerUp);
    embla.on('settle', onSettle);
    return () => {
      embla.off('pointerDown', onPointerDown);
      embla.off('pointerUp', onPointerUp);
      embla.off('settle', onSettle);
    };
  }, [embla]);

  const slideTransitionActive =
    slidePhase === 'snapping' || (slidePhase === 'idle' && !!withSlideTransition);

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

    const onReInit = () => {
      if (embla.selectedScrollSnap() !== currentIndexRef.current) {
        embla.scrollTo(currentIndexRef.current, true);
      }
    };

    embla.on('select', onSelect);
    embla.on('reInit', onReInit);
    return () => {
      embla.off('select', onSelect);
      embla.off('reInit', onReInit);
    };
  }, [embla, setCurrentIndex]);

  useEffect(() => {
    prevOpenedRef.current = opened;
  }, [opened]);

  useEffect(() => {
    if (embla && opened && embla.selectedScrollSnap() !== _currentIndex) {
      embla.scrollTo(_currentIndex, false);
    }
  }, [_currentIndex, embla, opened]);

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
            getImageZoomProps: zoom.getImageProps,
            onClose,
            loop: !!loop,
            withSlideTransition: !!withSlideTransition,
            slideTransitionActive,
            closeOnSwipeDown: !!closeOnSwipeDown,
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
