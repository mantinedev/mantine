import { SegmentedControl, VisuallyHidden } from '@mantine/core';
import { readingSizes } from './data';
import classes from './Prose.module.css';

interface TextSizeControlProps {
  value: string;
  onChange: (value: string) => void;
}

export function TextSizeControl({ value, onChange }: TextSizeControlProps) {
  return (
    <SegmentedControl
      value={value}
      onChange={onChange}
      aria-label="Text size"
      className={classes.textSize}
      data={readingSizes.map((size) => ({
        value: size.value,
        label: (
          <>
            <span aria-hidden style={{ fontSize: size.fontSize }}>
              A
            </span>
            <VisuallyHidden>{size.label}</VisuallyHidden>
          </>
        ),
      }))}
    />
  );
}
