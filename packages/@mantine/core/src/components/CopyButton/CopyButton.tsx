import { useClipboard, type ClipboardValue } from '@mantine/hooks';
import { useProps } from '../../core';

export interface CopyButtonProps {
  /** Children callback, provides current status and copy function as an argument */
  children: (payload: { copied: boolean; copy: () => void }) => React.ReactNode;

  /** Value that is copied to the clipboard when the button is clicked, accepts a string, an object with `html` and `text` properties or a function that returns one of them */
  value: ClipboardValue | (() => ClipboardValue);

  /** Copied status timeout in ms @default 1000 */
  timeout?: number;
}

const defaultProps = {
  timeout: 1000,
} satisfies Partial<CopyButtonProps>;

export function CopyButton(props: CopyButtonProps) {
  const { children, timeout, value, ...others } = useProps('CopyButton', defaultProps, props);
  const clipboard = useClipboard({ timeout });
  const copy = () => clipboard.copy(value);
  return <>{children({ copy, copied: clipboard.copied, ...others })}</>;
}

CopyButton.displayName = '@mantine/core/CopyButton';

export namespace CopyButton {
  export type Props = CopyButtonProps;
}
