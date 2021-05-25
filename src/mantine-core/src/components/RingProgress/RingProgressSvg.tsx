import React from 'react';
import { getSizeValue, MantineNumberSize } from '../../theme';
import { sizes } from './RingProgress.styles';

interface RingProgressSvgProps extends React.ComponentProps<'svg'> {
  size?: MantineNumberSize;
}

export function RingProgressSVG(props: RingProgressSvgProps) {
  const { size, ...rest } = props;
  return (
    <svg
      viewBox="0 0 100 100"
      style={{
        height: getSizeValue({ size, sizes }),
        width: getSizeValue({ size, sizes }),
      }}
      {...rest}
    />
  );
}
