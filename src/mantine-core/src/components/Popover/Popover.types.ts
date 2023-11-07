export type PopoverWidth = 'target' | React.CSSProperties['width'];

export interface PopoverMiddlewares {
  shift: boolean;
  flip: boolean;
  inline?: boolean;
  size?: boolean;
}
