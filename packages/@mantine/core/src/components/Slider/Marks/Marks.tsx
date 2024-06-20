import { Box } from '../../../core';
import { useSliderContext } from '../Slider.context';
import { getPosition } from '../utils/get-position/get-position';
import { isMarkFilled } from './is-mark-filled';

export interface MarksProps {
  marks: { value: number; label?: React.ReactNode }[] | undefined;
  min: number;
  max: number;
  value: number;
  offset: number | undefined;
  disabled: boolean | undefined;
  inverted: boolean | undefined;
}

export function Marks({ marks, min, max, disabled, value, offset, inverted }: MarksProps) {
  const { getStyles } = useSliderContext();

  if (!marks) {
    return null;
  }

  const items = marks.map((mark, index) => (
    <Box
      {...getStyles('markWrapper')}
      __vars={{ '--mark-offset': `${getPosition({ value: mark.value, min, max })}%` }}
      key={index}
    >
      <Box
        {...getStyles('mark')}
        mod={{ filled: isMarkFilled({ mark, value, offset, inverted }), disabled }}
      />
      {mark.label && <div {...getStyles('markLabel')}>{mark.label}</div>}
    </Box>
  ));

  return <div>{items}</div>;
}

Marks.displayName = '@mantine/core/SliderMarks';
