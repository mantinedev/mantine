import type { LightboxFactory, LightboxProps, LightboxStylesNames } from './Lightbox';
import type {
  LightboxCaptionProps,
  LightboxCaptionStylesNames,
} from './LightboxCaption/LightboxCaption';
import type {
  LightboxCloseButtonProps,
  LightboxCloseButtonStylesNames,
} from './LightboxCloseButton/LightboxCloseButton';
import type {
  LightboxNavigationProps,
  LightboxNavigationStylesNames,
} from './LightboxNavigation/LightboxNavigation';
import type { LightboxProviderProps } from './LightboxProvider/LightboxProvider';
import type {
  LightboxCssVariables,
  LightboxRootProps,
  LightboxRootStylesNames,
} from './LightboxRoot/LightboxRoot';
import type { LightboxSlideProps, LightboxSlideStylesNames } from './LightboxSlide/LightboxSlide';
import type {
  LightboxSlidesProps,
  LightboxSlidesStylesNames,
} from './LightboxSlides/LightboxSlides';
import type {
  LightboxThumbnailsProps,
  LightboxThumbnailsStylesNames,
} from './LightboxThumbnails/LightboxThumbnails';
import type {
  LightboxToolbarProps,
  LightboxToolbarStylesNames,
} from './LightboxToolbar/LightboxToolbar';

export {
  lightbox,
  createLightbox,
  createLightboxStore,
  useLightboxStore,
  lightboxStore,
} from './lightbox.store.js';
export type { LightboxState, LightboxStore } from './lightbox.store.js';

export type {
  LightboxSlideData,
  LightboxImageSlide,
  LightboxVideoSlide,
  LightboxVideoSlideTrack,
  LightboxCustomSlide,
  LightboxLabels,
  ToolbarItem,
  ToolbarItems,
  ToolbarItemsPayload,
} from './lightbox.types.js';

export { DEFAULT_LABELS } from './default-labels.js';

export { Lightbox } from './Lightbox.js';
export { LightboxRoot } from './LightboxRoot/LightboxRoot.js';
export { LightboxToolbar } from './LightboxToolbar/LightboxToolbar.js';
export { LightboxSlides } from './LightboxSlides/LightboxSlides.js';
export { LightboxSlide } from './LightboxSlide/LightboxSlide.js';
export { LightboxThumbnails } from './LightboxThumbnails/LightboxThumbnails.js';
export { LightboxNavigation } from './LightboxNavigation/LightboxNavigation.js';
export { LightboxCaption } from './LightboxCaption/LightboxCaption.js';
export { LightboxCloseButton } from './LightboxCloseButton/LightboxCloseButton.js';

export {
  createFullscreenToolbarItem,
  createThumbnailsToolbarItem,
  createDownloadToolbarItem,
  createCloseToolbarItem,
} from './LightboxToolbar/toolbar-items.js';

export type {
  LightboxProps,
  LightboxStylesNames,
  LightboxFactory,
  LightboxCssVariables,
  LightboxRootProps,
  LightboxRootStylesNames,
  LightboxToolbarProps,
  LightboxToolbarStylesNames,
  LightboxSlidesProps,
  LightboxSlidesStylesNames,
  LightboxSlideProps,
  LightboxSlideStylesNames,
  LightboxThumbnailsProps,
  LightboxThumbnailsStylesNames,
  LightboxNavigationProps,
  LightboxNavigationStylesNames,
  LightboxCaptionProps,
  LightboxCaptionStylesNames,
  LightboxCloseButtonProps,
  LightboxCloseButtonStylesNames,
  LightboxProviderProps,
};

export namespace Lightbox {
  export type Props = LightboxProps;
  export type StylesNames = LightboxStylesNames;
  export type Factory = LightboxFactory;
  export type CssVariables = LightboxCssVariables;

  export namespace Root {
    export type Props = LightboxRootProps;
    export type StylesNames = LightboxRootStylesNames;
  }

  export namespace Toolbar {
    export type Props = LightboxToolbarProps;
    export type StylesNames = LightboxToolbarStylesNames;
  }

  export namespace Slides {
    export type Props = LightboxSlidesProps;
    export type StylesNames = LightboxSlidesStylesNames;
  }

  export namespace Slide {
    export type Props = LightboxSlideProps;
    export type StylesNames = LightboxSlideStylesNames;
  }

  export namespace Thumbnails {
    export type Props = LightboxThumbnailsProps;
    export type StylesNames = LightboxThumbnailsStylesNames;
  }

  export namespace Navigation {
    export type Props = LightboxNavigationProps;
    export type StylesNames = LightboxNavigationStylesNames;
  }

  export namespace Caption {
    export type Props = LightboxCaptionProps;
    export type StylesNames = LightboxCaptionStylesNames;
  }

  export namespace CloseButton {
    export type Props = LightboxCloseButtonProps;
    export type StylesNames = LightboxCloseButtonStylesNames;
  }

  export namespace Provider {
    export type Props = LightboxProviderProps;
  }
}
