import clsx from 'clsx';
import { serializeStyles, RegisteredCache } from '@emotion/serialize';
import { insertStyles, getRegisteredStyles } from '@emotion/utils';
import type { EmotionCache } from '@emotion/cache';
import { useGuaranteedMemo } from './utils/use-guaranteed-memo/use-guaranteed-memo';
import type { CSS } from './types';
import { useEmotionCache } from './use-emotion-cache';

const refPropertyName = 'ref' as const;

function getRef(args: any[]) {
  let ref: string;

  if (args.length !== 1) {
    return { args, ref };
  }

  const [arg] = args;

  if (!(arg instanceof Object)) {
    return { args, ref };
  }

  if (!(refPropertyName in arg)) {
    return { args, ref };
  }

  ref = arg[refPropertyName];
  const argCopy = { ...arg };
  delete argCopy[refPropertyName];
  return { args: [argCopy], ref };
}

export const { cssFactory } = (() => {
  function merge(registered: RegisteredCache, css: CSS, className: string) {
    const registeredStyles: string[] = [];

    const rawClassName = getRegisteredStyles(registered, registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles);
  }

  function _cssFactory(params: { cache: EmotionCache }) {
    const { cache } = params;

    const css: CSS = (...styles: any) => {
      const { ref, args } = getRef(styles);
      const serialized = serializeStyles(args, cache.registered);
      insertStyles(cache as any, serialized, false);
      return `${cache.key}-${serialized.name}${ref === undefined ? '' : ` ${ref}`}`;
    };

    const cx = (...args: any) => merge(cache.registered, css, clsx(args));

    return { css, cx };
  }

  return { cssFactory: _cssFactory };
})();

export function useCss() {
  const cache = useEmotionCache();
  return useGuaranteedMemo(() => cssFactory({ cache }), [cache]);
}
