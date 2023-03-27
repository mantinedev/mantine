import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';

export interface SpaceProps extends DefaultProps {}

const defaultProps: Partial<SpaceProps> = {
  w: 0,
  h: 0,
};

export const Space = forwardRef<HTMLDivElement, SpaceProps>((props: SpaceProps, ref) => {
  const { w, h, ...others } = useComponentDefaultProps('Space', defaultProps, props);
  return <Box ref={ref} w={w} miw={w} h={h} mih={h} {...others} />;
});

Space.displayName = '@mantine/core/Space';
