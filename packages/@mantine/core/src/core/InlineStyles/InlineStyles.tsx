import { useMantineStyleNonce } from '../MantineProvider';
import { InlineStylesInput, stylesToString } from './styles-to-string/styles-to-string';

export interface InlineStylesProps
  extends InlineStylesInput, Omit<React.ComponentProps<'style'>, keyof InlineStylesInput> {
  deduplicate?: boolean;
}

function simpleHash(str: string): string {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) & 0xffffffff;
  }
  return (hash >>> 0).toString(36);
}

export function InlineStyles({ deduplicate, ...props }: InlineStylesProps) {
  const nonce = useMantineStyleNonce();
  const css = stylesToString(props);

  if (deduplicate) {
    return (
      <style href={`mantine-${simpleHash(css)}`} precedence="mantine" nonce={nonce?.()}>
        {css}
      </style>
    );
  }

  return (
    <style
      data-mantine-styles="inline"
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{ __html: css }}
    />
  );
}
