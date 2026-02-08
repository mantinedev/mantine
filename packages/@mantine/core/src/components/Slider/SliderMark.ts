import React from 'react';

export interface SliderMark {
  /** The value at which the mark is positioned */
  value: number;

  /** Optional label displayed below the mark */
  label?: React.ReactNode;

  /** If true, the mark will not be displayed on the track but can still be used with restrictToMarks for snapping */
  hidden?: boolean;
}
