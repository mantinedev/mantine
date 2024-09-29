import { Box } from '../../../core';
import { Marks } from '../Marks/Marks';
import { useSliderContext } from '../Slider.context';

export interface TrackProps {
  filled: number;
  offset?: number;
  marksOffset?: number;
  marks: { value: number; label?: React.ReactNode }[] | undefined;
  min: number;
  max: number;
  value: number;
  children: React.ReactNode;
  disabled: boolean | undefined;
  inverted: boolean | undefined;
  containerProps?: React.PropsWithRef<React.ComponentProps<'div'>>;
}

export function Track({
  filled,
  children,
  offset,
  disabled,
  marksOffset,
  inverted,
  containerProps,
  ...others
}: TrackProps) {
  const { getStyles } = useSliderContext();

  return (
    <Box {...getStyles('trackContainer')} mod={{ disabled }} {...containerProps}>
      <Box {...getStyles('track')} mod={{ inverted, disabled }}>
        <Box
          mod={{ inverted, disabled }}
          __vars={{
            '--slider-bar-width': `calc(${filled}% + var(--slider-size))`,
            '--slider-bar-offset': `calc(${offset}% - var(--slider-size))`,
          }}
          {...getStyles('bar')}
        />

        {children}

        <Marks {...others} offset={marksOffset} disabled={disabled} inverted={inverted} />
      </Box>
    </Box>
  );
}

Track.displayName = '@mantine/core/SliderTrack';
