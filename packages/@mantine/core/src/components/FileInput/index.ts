import type { FileInputFactory, FileInputProps } from './FileInput';

export { FileInput } from './FileInput';

export type { FileInputProps, FileInputFactory };

export namespace FileInput {
  export type Props<Multiple extends boolean = false> = FileInputProps<Multiple>;
  export type Factory = FileInputFactory;
}
