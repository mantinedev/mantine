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

const defaultProps: Partial<SpaceProps> = {};

export const Space = factory<SpaceFactory>((props, ref) => {
  const { w, h, miw, mih, ...others } = useProps('Space', defaultProps, props);
  return <Box ref={ref} {...others} w={w} miw={miw ?? w} h={h} mih={mih ?? h} />;
});

Space.displayName = '@mantine/core/Space';
