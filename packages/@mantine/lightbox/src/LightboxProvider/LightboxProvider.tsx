import { useEffect } from 'react';
import { factory, Factory, useProps } from '@mantine/core';
import { lightboxActions, LightboxStore, lightboxStore, useLightboxStore } from '../lightbox.store';
import { Lightbox, LightboxProps } from '../Lightbox';

export interface LightboxProviderProps extends Omit<
  LightboxProps,
  'opened' | 'onClose' | 'slides' | 'currentIndex' | 'onIndexChange'
> {
  /** Lightbox store, can be used to create multiple instances @default lightboxStore */
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

  useEffect(() => {
    if (store!.getState().loop !== !!loop) {
      lightboxActions.updateState(() => ({ loop: !!loop }), store!);
    }
  }, [loop, store]);

  return (
    <Lightbox
      {...others}
      loop={loop}
      opened={state.opened}
      onClose={() => lightboxActions.close(store!)}
      slides={state.slides}
      currentIndex={state.currentIndex}
      onIndexChange={(index) => lightboxActions.setIndex(index, store!)}
    />
  );
});

LightboxProviderComponent.displayName = '@mantine/lightbox/LightboxProvider';
