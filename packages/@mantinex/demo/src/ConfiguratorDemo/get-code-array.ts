import { ShikiLanguage } from '@mantinex/shiki';
import { clearProps } from './clear-props';
import type { ConfiguratorControlOptions } from './ConfiguratorDemo';
import { injectProps } from './inject-props';

type CodePayload = string | ((props: Record<string, any>) => string);

export type Code = CodePayload | { code: CodePayload; language: ShikiLanguage; fileName: string }[];

interface GetCodeArrayInput {
  code: Code;
  controls: ConfiguratorControlOptions[];
  state: Record<string, any>;
}

interface TransformCodePayloadInput {
  code: CodePayload;
  controls: ConfiguratorControlOptions[];
  state: Record<string, any>;
}

function transformCodePayload({ code, controls, state }: TransformCodePayloadInput) {
  return typeof code === 'function'
    ? code(clearProps(controls, state))
    : injectProps(clearProps(controls, state), code);
}

export function getCodeArray({ code, controls, state }: GetCodeArrayInput) {
  if (typeof code === 'string' || typeof code === 'function') {
    return [
      {
        fileName: 'Demo.tsx',
        language: 'tsx' as const,
        code: transformCodePayload({ code, controls, state }),
      },
    ];
  }

  if (Array.isArray(code)) {
    return code.map((item) => ({
      fileName: item.fileName || 'Demo.tsx',
      language: item.language || 'tsx',
      code: transformCodePayload({ code: item.code, controls, state }),
    }));
  }

  throw new Error('Unexpected code format in configurator');
}
