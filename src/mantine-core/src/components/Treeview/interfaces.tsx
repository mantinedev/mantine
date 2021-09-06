import { CSSProperties, ReactNode } from 'react';
import type { TreeviewItemProps } from './TreeviewItem/TreeviewItem';

export type Type = any;
export type Action = (props: { value?: string } | any) => JSX.Element;
export type Actions = Record<Type, Action>;
export type Icon = (props: { value?: string } | any) => JSX.Element;
export type Icons = Record<Type, Icon>;

export interface TreeviewEvents {
  onSelect?: (value: string) => void;
  onHighlight?: (value: string) => void;
}

export interface TreeviewNodes {
  labelNode?: ReactNode;
  icon?: Icon;
  icons?: Icons;
  action?: Action;
  actions?: Actions;
}

export interface TreeviewProps extends TreeviewEvents, TreeviewNodes {
  value?: string;
  type?: Type;
  initialSelected?: string;
  selected?: string;
  highlighted?: string;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  expanded?: string[];
  items: TreeviewProps[];
  selectOnHighlight?: boolean;
}

export type ITreeviewItem = TreeviewItemProps | TreeviewProps;
export type ITreeviewItems = ITreeviewItem[];
