import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  FocusTrap,
  MantineTransition,
  OptionalPortal,
  RemoveScroll,
  StylesApiProps,
  Transition,
  TransitionOverride,
  useDirection,
  useMantineTheme,
  useProps,
  useStyles,
  VisuallyHidden,
} from '@mantine/core';
import {
  useFocusReturn,
  useId,
  useMergedRef,
  useReducedMotion,
  useUncontrolled,
} from '@mantine/hooks';
import { DEFAULT_LABELS } from '../default-labels';
import { useLightboxEmbla } from '../hooks/use-lightbox-embla';
import { useLightboxFullscreen } from '../hooks/use-lightbox-fullscreen';
import { useLightboxKeyboard } from '../hooks/use-lightbox-keyboard';
import { useLightboxLockScroll } from '../hooks/use-lightbox-lock-scroll';
import { useLightboxZoom } from '../hooks/use-lightbox-zoom';
import { LightboxContextProvider } from '../lightbox.context';
import { LightboxLabels, LightboxSlideData } from '../lightbox.types';
import { getSlideAccessibleName, isImageSlide } from '../slide-utils';
import classes from '../Lightbox.module.css';

export type LightboxRootStylesNames =
  | 'root'
  | 'overlay'
  | 'content'
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
  /** Controls whether the lightbox is opened @category state */
  opened: boolean;

  /** Called when the lightbox is closed @category state */
  onClose: () => void;

  /** Lightbox content (compound components) @category appearance */
  children: React.ReactNode;

  /** Array of slide data objects @category appearance */
  slides: LightboxSlideData[];

  /** Controlled current slide index @category state */
  currentIndex?: number;

  /** Called when the current slide index changes @category state */
  onIndexChange?: (index: number) => void;

  /** Labels used in the component, used for accessibility and localization @category accessibility */
  labels?: Partial<LightboxLabels>;

  /** Enables image zoom on click/pinch @default false @category behavior */
  withZoom?: boolean;

  /** Shows bottom thumbnail strip @default false @category appearance */
  withThumbnails?: boolean;

  /** Adds fullscreen toggle to toolbar @default false @category appearance */
  withFullscreen?: boolean;

  /** Adds download button to toolbar @default false @category appearance */
  withDownload?: boolean;

  /** Enables infinite loop navigation @default false @category behavior */
  loop?: boolean;

  /** Closes lightbox when an empty area is clicked: the space around the slide content and the background of the toolbar, caption and thumbnails bands. Clicks on media, controls and caption text never close it. @default false @category behavior */
  closeOnClickOutside?: boolean;

  /** Closes lightbox when swiping down on mobile @default true @category behavior */
  closeOnSwipeDown?: boolean;

  /** Determines whether keyboard shortcuts (arrows, `F`/`T`/`Z`) are active, `Escape` always closes the lightbox @default true @category behavior */
  withKeyboardEvents?: boolean;

  /** Determines whether focus should be returned to the last active element when the lightbox is closed @default true @category behavior */
  returnFocus?: boolean;

  /** Adds a hidden focusable element at the start of the lightbox content – prevents the first toolbar button from receiving visible focus when the lightbox is opened with a pointer. Set to `false` if you need custom focus management. @default true @category behavior */
  withInitialFocusPlaceholder?: boolean;

  /** Determines whether the lightbox should be rendered inside `Portal` @default true */
  withinPortal?: boolean;

  /** `z-index` of the overlay and content elements, `400` by default */
  zIndex?: string | number;

  /** Transition duration in milliseconds @default 200 @category appearance */
  transitionDuration?: number;

  /** Props passed down to the `Transition` component that animates the content, the overlay always fades. By default, the content is scaled from 95% to 100% while fading in. @category appearance */
  transitionProps?: TransitionOverride;

  /** Additional Embla carousel options. `loop` and `startIndex` are controlled by the
   * `loop` and `currentIndex` props and cannot be set here, at the top level or in
   * `breakpoints`; a `watchDrag` option is still honored at both levels, but dragging is
   * always disabled while the image is zoomed. */
  emblaOptions?: EmblaOptionsType;

  /** Maximum zoom scale @default 3 @category behavior */
  zoomMaxScale?: number;

  /** Enables animated slide transitions for programmatic navigation @default false @category appearance */
  withSlideTransition?: boolean;
}

export type LightboxRootFactory = Factory<{
  props: LightboxRootProps;
  ref: HTMLDivElement;
  stylesNames: LightboxRootStylesNames;
  vars: LightboxCssVariables;
}>;

export const lightboxRootDefaultProps = {
  withZoom: false,
  withThumbnails: false,
  withFullscreen: false,
  withDownload: false,
  loop: false,
  closeOnClickOutside: false,
  closeOnSwipeDown: true,
  withKeyboardEvents: true,
  returnFocus: true,
  withInitialFocusPlaceholder: true,
  withinPortal: true,
  transitionDuration: 200,
  zoomMaxScale: 3,
  withSlideTransition: false,
} satisfies Partial<LightboxRootProps>;

const defaultContentTransition: MantineTransition = {
  common: { transformOrigin: 'center center' },
  in: { opacity: 1, transform: 'scale(1)' },
  out: { opacity: 0, transform: 'scale(0.95)' },
  transitionProperty: 'transform, opacity',
};

const CLICK_OUTSIDE_MOVE_THRESHOLD = 5;

function isLightboxBackdrop(target: EventTarget, content: HTMLElement) {
  return (
    target === content ||
    (target instanceof HTMLElement && target.hasAttribute('data-lightbox-backdrop'))
  );
}

const varsResolver = createVarsResolver<LightboxRootFactory>(
  (_, { transitionDuration, zIndex }) => ({
    root: {
      '--lightbox-transition-duration': `${transitionDuration}ms`,
      '--lightbox-overlay-color': undefined,
      '--lightbox-z-index': zIndex !== undefined ? `${zIndex}` : undefined,
      '--lightbox-toolbar-height': undefined,
      '--lightbox-thumbnails-height': undefined,
    },
  })
);

export const LightboxRoot = factory<LightboxRootFactory>((_props) => {
  const props = useProps('LightboxRoot', lightboxRootDefaultProps, _props);
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
    labels,
    withZoom,
    withThumbnails,
    withFullscreen,
    withDownload,
    loop,
    closeOnClickOutside,
    closeOnSwipeDown,
    withKeyboardEvents,
    returnFocus,
    withInitialFocusPlaceholder,
    withinPortal,
    zIndex,
    transitionDuration,
    transitionProps,
    emblaOptions,
    zoomMaxScale,
    withSlideTransition,
    attributes,
    mod,
    onClick,
    onPointerDown,
    ref,
    ...others
  } = props;

  const getStyles = useStyles<LightboxRootFactory>({
    name: 'Lightbox',
    classes,
    props,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
    stable: true,
  });

  const _labels = useMemo(() => ({ ...DEFAULT_LABELS, ...labels }), [labels]);

  const [_currentIndex, setCurrentIndex] = useUncontrolled({
    value: currentIndex,
    defaultValue: 0,
    finalValue: 0,
    onChange: onIndexChange,
  });

  const currentIndexRef = useRef(_currentIndex);
  const suppressSelectRef = useRef<number | null>(null);
  const pointerDownRef = useRef<{ target: EventTarget; x: number; y: number } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mergedContentRef = useMergedRef(ref, contentRef);

  const [startIndex, setStartIndex] = useState(_currentIndex);
  const [prevOpened, setPrevOpened] = useState(opened);

  if (opened !== prevOpened) {
    setPrevOpened(opened);
    if (opened) {
      setStartIndex(_currentIndex);
    }
  }

  const { dir } = useDirection();

  const currentSlide = slides[_currentIndex];

  const zoom = useLightboxZoom({
    enabled: !!withZoom && zoomMaxScale! > 1 && !!currentSlide && isImageSlide(currentSlide),
    maxScale: zoomMaxScale!,
    currentIndex: _currentIndex,
  });

  const [emblaRef, embla] = useLightboxEmbla({
    emblaOptions,
    loop,
    startIndex,
    dir,
    zoomed: zoom.zoomed,
  });

  useEffect(() => {
    currentIndexRef.current = _currentIndex;
  });

  const [thumbnailsVisible, setThumbnailsVisible] = useState(!!withThumbnails);
  const [prevWithThumbnails, setPrevWithThumbnails] = useState(withThumbnails);

  if (withThumbnails !== prevWithThumbnails) {
    setPrevWithThumbnails(withThumbnails);
    setThumbnailsVisible(!!withThumbnails);
  }

  const { isFullscreen, toggleFullscreen, exitOwnedFullscreen } = useLightboxFullscreen();

  const thumbnailsId = useId();

  const toggleThumbnails = useCallback(() => {
    const thumbnails = document.getElementById(thumbnailsId);

    if (thumbnails && document.activeElement && thumbnails.contains(document.activeElement)) {
      const dialog = thumbnails.closest<HTMLElement>('[role="dialog"]');
      const toggle = dialog?.querySelector<HTMLElement>(`[aria-controls="${thumbnailsId}"]`);
      (toggle ?? dialog)?.focus();
    }

    setThumbnailsVisible((prev) => !prev);
  }, [thumbnailsId]);

  const { resetZoom } = zoom;

  useEffect(() => {
    if (!opened) {
      resetZoom();
      setThumbnailsVisible(!!withThumbnails);
      exitOwnedFullscreen();
    }
  }, [opened, resetZoom, withThumbnails, exitOwnedFullscreen]);

  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const animateSlides = !!withSlideTransition && !reduceMotion;

  const handleNext = useCallback(() => {
    embla?.scrollNext(!animateSlides);
  }, [embla, animateSlides]);

  const handlePrev = useCallback(() => {
    embla?.scrollPrev(!animateSlides);
  }, [embla, animateSlides]);

  const setIndex = useCallback(
    (index: number) => {
      if (index === currentIndexRef.current) {
        return;
      }

      setCurrentIndex(index);
      suppressSelectRef.current = index;
      embla?.scrollTo(index, !animateSlides);
      suppressSelectRef.current = null;
    },
    [embla, animateSlides, setCurrentIndex]
  );

  const handleFirst = useCallback(() => {
    if (slides.length > 0) {
      setIndex(0);
    }
  }, [setIndex, slides.length]);

  const handleLast = useCallback(() => {
    if (slides.length > 0) {
      setIndex(slides.length - 1);
    }
  }, [setIndex, slides.length]);

  useLightboxKeyboard({
    opened,
    enabled: withKeyboardEvents!,
    dir,
    contentRef,
    onClose,
    onNext: handleNext,
    onPrev: handlePrev,
    onFirst: handleFirst,
    onLast: handleLast,
    onToggleFullscreen: withFullscreen ? toggleFullscreen : undefined,
    onToggleThumbnails: withThumbnails ? toggleThumbnails : undefined,
    onToggleZoom: withZoom ? zoom.toggleZoom : undefined,
    onZoomPan: withZoom ? zoom.panZoom : undefined,
  });

  useEffect(() => {
    if (!embla) {
      return undefined;
    }

    const onSelect = () => {
      const selected = embla.selectedScrollSnap();

      if (selected !== suppressSelectRef.current) {
        setCurrentIndex(selected);
      }
    };

    const onReInit = () => {
      if (embla.selectedScrollSnap() !== currentIndexRef.current) {
        suppressSelectRef.current = currentIndexRef.current;
        embla.scrollTo(currentIndexRef.current, true);
        suppressSelectRef.current = null;
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
    if (embla && opened && embla.selectedScrollSnap() !== _currentIndex) {
      suppressSelectRef.current = _currentIndex;
      embla.scrollTo(_currentIndex, !animateSlides);
      suppressSelectRef.current = null;
    }
  }, [_currentIndex, embla, opened, animateSlides]);

  useEffect(() => {
    if (slides.length > 0 && _currentIndex > slides.length - 1) {
      setCurrentIndex(slides.length - 1);
    }
  }, [slides.length, _currentIndex, setCurrentIndex]);

  useFocusReturn({ opened, shouldReturnFocus: returnFocus });

  const shouldLockScroll = useLightboxLockScroll({
    opened,
    exitDuration:
      typeof transitionProps?.exitDuration === 'number'
        ? transitionProps.exitDuration
        : typeof transitionProps?.duration === 'number'
          ? transitionProps.duration
          : transitionDuration,
    exitDelay: typeof transitionProps?.exitDelay === 'number' ? transitionProps.exitDelay : 0,
    reduceMotion,
  });

  const transition: TransitionOverride = {
    transition: defaultContentTransition,
    duration: transitionDuration,
    timingFunction: 'ease',
    ...transitionProps,
  };

  const overlayTransition: TransitionOverride = {
    transition: 'fade',
    duration: transition.duration,
    exitDuration: transition.exitDuration,
    timingFunction: transition.timingFunction,
    enterDelay: transition.enterDelay,
    exitDelay: transition.exitDelay,
    keepMounted: transition.keepMounted,
  };

  const currentSlideLabel = getSlideAccessibleName(currentSlide);

  const contextValue = useMemo(
    () => ({
      getStyles,
      labels: _labels,
      opened,
      slides,
      currentIndex: _currentIndex,
      setIndex,
      next: handleNext,
      prev: handlePrev,
      embla: embla ?? null,
      emblaRef,
      withZoom: !!withZoom,
      withThumbnails: !!withThumbnails,
      withFullscreen: !!withFullscreen,
      withDownload: !!withDownload,
      thumbnailsVisible,
      thumbnailsId,
      toggleThumbnails,
      isFullscreen,
      toggleFullscreen,
      zoomed: zoom.zoomed,
      toggleZoom: zoom.toggleZoom,
      getImageZoomProps: zoom.getImageProps,
      onClose,
      loop: !!loop,
      closeOnSwipeDown: !!closeOnSwipeDown,
      transitionDuration: transitionDuration!,
    }),
    [
      getStyles,
      _labels,
      opened,
      slides,
      _currentIndex,
      setIndex,
      handleNext,
      handlePrev,
      embla,
      emblaRef,
      withZoom,
      withThumbnails,
      withFullscreen,
      withDownload,
      thumbnailsVisible,
      thumbnailsId,
      toggleThumbnails,
      isFullscreen,
      toggleFullscreen,
      zoom,
      onClose,
      loop,
      closeOnSwipeDown,
      transitionDuration,
    ]
  );

  return (
    <OptionalPortal withinPortal={withinPortal}>
      <LightboxContextProvider value={contextValue}>
        <RemoveScroll enabled={shouldLockScroll}>
          <Box {...getStyles('root')}>
            <Transition mounted={opened} {...overlayTransition}>
              {(overlayStyles) => <Box {...getStyles('overlay', { style: overlayStyles })} />}
            </Transition>

            <Transition mounted={opened} {...transition}>
              {(contentStyles) => (
                <FocusTrap active={opened} innerRef={mergedContentRef}>
                  <Box
                    {...getStyles('content', {
                      className,
                      style: style ? [style, contentStyles] : contentStyles,
                    })}
                    role="dialog"
                    aria-modal="true"
                    aria-label={_labels.lightboxLabel}
                    tabIndex={-1}
                    data-mantine-stop-propagation
                    {...others}
                    mod={mod}
                    onPointerDown={(event) => {
                      onPointerDown?.(event);
                      pointerDownRef.current = {
                        target: event.target,
                        x: event.clientX,
                        y: event.clientY,
                      };
                    }}
                    onClick={(event) => {
                      onClick?.(event);
                      const pressed = pointerDownRef.current;
                      pointerDownRef.current = null;

                      if (
                        closeOnClickOutside &&
                        !event.defaultPrevented &&
                        pressed &&
                        event.target === pressed.target &&
                        Math.hypot(event.clientX - pressed.x, event.clientY - pressed.y) <=
                          CLICK_OUTSIDE_MOVE_THRESHOLD &&
                        isLightboxBackdrop(event.target, event.currentTarget)
                      ) {
                        onClose();
                      }
                    }}
                  >
                    {withInitialFocusPlaceholder && <FocusTrap.InitialFocus />}

                    <VisuallyHidden role="status" aria-live="polite" aria-atomic="true">
                      {slides.length > 0
                        ? `${_labels.slideLabel(_currentIndex + 1, slides.length)}${currentSlideLabel ? `: ${currentSlideLabel}` : ''}`
                        : null}
                    </VisuallyHidden>
                    {children}
                  </Box>
                </FocusTrap>
              )}
            </Transition>
          </Box>
        </RemoveScroll>
      </LightboxContextProvider>
    </OptionalPortal>
  );
});

LightboxRoot.classes = classes;
LightboxRoot.varsResolver = varsResolver;
LightboxRoot.displayName = '@mantine/lightbox/LightboxRoot';
