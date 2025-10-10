import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
} from '../../core';

export interface SpaceProps extends BoxProps, StylesApiProps<SpaceFactory>, ElementProps<'div'> {}

export type SpaceFactory = Factory<{
  props: SpaceProps;
  ref: HTMLDivElement;
}>;

export const Space = factory<SpaceFactory>((props) => {
  const { w, h, miw, mih, ...others } = useProps('Space', null, props);
  return <Box {...others} w={w} miw={miw ?? w} h={h} mih={mih ?? h} />;
});

Space.displayName = '@mantine/core/Space';
