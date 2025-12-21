import type { FileButtonFactory, FileButtonProps } from './FileButton';

export { FileButton } from './FileButton';

export type { FileButtonProps, FileButtonFactory };

export namespace FileButton {
  export type Props<Multiple extends boolean = false> = FileButtonProps<Multiple>;
  export type Factory = FileButtonFactory;
}
