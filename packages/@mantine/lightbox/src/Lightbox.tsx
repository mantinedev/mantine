import { LightboxBase } from './LightboxBase';
import { LightboxProviderComponent } from './LightboxProvider/LightboxProvider';

export type { LightboxFactory, LightboxProps, LightboxStylesNames } from './LightboxBase';

export const Lightbox = LightboxBase;

Lightbox.Provider = LightboxProviderComponent;
