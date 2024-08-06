import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';

function isMacOS(userAgent: string): boolean {
  const macosPattern = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i;

  return macosPattern.test(userAgent);
}

function isIOS(userAgent: string): boolean {
  const iosPattern = /(iPhone)|(iPad)|(iPod)/i;

  return iosPattern.test(userAgent);
}

function isWindows(userAgent: string): boolean {
  const windowsPattern = /(Win32)|(Win64)|(Windows)|(WinCE)/i;

  return windowsPattern.test(userAgent);
}

function isAndroid(userAgent: string): boolean {
  const androidPattern = /Android/i;

  return androidPattern.test(userAgent);
}

function isLinux(userAgent: string): boolean {
  const linuxPattern = /Linux/i;

  return linuxPattern.test(userAgent);
}

function getOS(): OS {
  if (typeof window === 'undefined') {
    return 'undetermined';
  }

  const { userAgent } = window.navigator;

  if (isIOS(userAgent) || (isMacOS(userAgent) && 'ontouchend' in document)) {
    return 'ios';
  }
  if (isMacOS(userAgent)) {
    return 'macos';
  }
  if (isWindows(userAgent)) {
    return 'windows';
  }
  if (isAndroid(userAgent)) {
    return 'android';
  }
  if (isLinux(userAgent)) {
    return 'linux';
  }

  return 'undetermined';
}

interface UseOsOptions {
  getValueInEffect: boolean;
}

export function useOs(options: UseOsOptions = { getValueInEffect: true }): OS {
  const [value, setValue] = useState<OS>(options.getValueInEffect ? 'undetermined' : getOS());

  useIsomorphicEffect(() => {
    if (options.getValueInEffect) {
      setValue(getOS);
    }
  }, []);

  return value;
}
