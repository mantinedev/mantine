import { useEffect, useLayoutEffect } from 'react';

// useEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect avoids it by replacing useEffect with useLayoutEffect during ssr
export const useIsomorphicEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;
