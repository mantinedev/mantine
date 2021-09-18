import { serializeStyles } from '@emotion/serialize';
import { insertStyles } from '@emotion/utils';
import type { EmotionCache } from '@emotion/cache';
import { useGuaranteedMemo } from './utils/use-guaranteed-memo/use-guaranteed-memo';
import type { CSS } from './types';
import { useCache } from './CacheProvider';

const refPropertyName = 'ref' as const;

function getRef(args: any[]) {
  let ref;

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
  function _cssFactory(params: { cache: EmotionCache }) {
    const { cache } = params;

    const css: CSS = (...styles) => {
      const { ref, args } = getRef(styles);
      const serialized = serializeStyles(args, cache.registered);
      insertStyles(cache as any, serialized, false);
      return `${cache.key}-${serialized.name}${ref === undefined ? '' : ` ${ref}`}`;
    };

    return css;
  }

  return { cssFactory: _cssFactory };
})();

export function useCss() {
  const cache = useCache();
  return useGuaranteedMemo(() => cssFactory({ cache }), [cache]);
}
