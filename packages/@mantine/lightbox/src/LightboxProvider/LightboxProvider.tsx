import { useEffect, useMemo } from 'react';
import { factory, Factory, useProps } from '@mantine/core';
import {
  createLightboxActions,
  LightboxStore,
  lightboxStore,
  useLightboxStore,
} from '../lightbox.store';
import { LightboxBase, LightboxProps } from '../LightboxBase';

export interface LightboxProviderProps extends Omit<
  LightboxProps,
  'opened' | 'onClose' | 'slides' | 'currentIndex' | 'onIndexChange'
> {
  /** Lightbox store, can be used to create multiple instances @default lightboxStore @category state */
  store?: LightboxStore;
}

export type LightboxProviderFactory = Factory<{
  props: LightboxProviderProps;
  ref: HTMLDivElement;
  stylesNames: never;
  compound: true;
}>;

const defaultProps = {
  store: lightboxStore,
} satisfies Partial<LightboxProviderProps>;

export const LightboxProviderComponent = factory<LightboxProviderFactory>((_props) => {
  const props = useProps('LightboxProvider', defaultProps, _props);
  const { store, loop, ...others } = props;

  const state = useLightboxStore(store!);
  const actions = useMemo(() => createLightboxActions(store!), [store]);

  useEffect(() => {
    if (store!.getState().loop !== !!loop) {
      store!.setState((current) => ({ ...current, loop: !!loop }));
    }
  }, [loop, store]);

  return (
    <LightboxBase
      {...others}
      loop={loop}
      opened={state.opened}
      onClose={actions.close}
      slides={state.slides}
      currentIndex={state.currentIndex}
      onIndexChange={actions.setIndex}
    />
  );
});

LightboxProviderComponent.displayName = '@mantine/lightbox/LightboxProvider';
