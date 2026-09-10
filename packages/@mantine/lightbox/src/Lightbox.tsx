import { lightbox } from './lightbox.store';
import { LightboxBase } from './LightboxBase';
import { LightboxCaption } from './LightboxCaption/LightboxCaption';
import { LightboxCloseButton } from './LightboxCloseButton/LightboxCloseButton';
import { LightboxNavigation } from './LightboxNavigation/LightboxNavigation';
import { LightboxProviderComponent } from './LightboxProvider/LightboxProvider';
import { LightboxRoot } from './LightboxRoot/LightboxRoot';
import { LightboxSlide } from './LightboxSlide/LightboxSlide';
import { LightboxSlides } from './LightboxSlides/LightboxSlides';
import { LightboxThumbnails } from './LightboxThumbnails/LightboxThumbnails';
import { LightboxToolbar } from './LightboxToolbar/LightboxToolbar';
import classes from './Lightbox.module.css';

export type { LightboxFactory, LightboxProps, LightboxStylesNames } from './LightboxBase';

export const Lightbox = LightboxBase;

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
