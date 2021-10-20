export const isIosDevice = () =>
  typeof window !== 'undefined' && navigator.userAgent.match(/iphone|ipod|ipad/i);
