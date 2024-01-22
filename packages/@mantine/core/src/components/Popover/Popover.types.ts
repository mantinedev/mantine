export type PopoverWidth = 'target' | React.CSSProperties['width'] | null;

export interface PopoverMiddlewares {
  shift: boolean;
  flip: boolean;
  inline?: boolean;
  size?: boolean;
}
