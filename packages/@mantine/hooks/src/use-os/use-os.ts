import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export type UseOSReturnValue =
  | 'undetermined'
  | 'macos'
  | 'ios'
  | 'windows'
  | 'android'
  | 'linux'
  | 'chromeos';

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

function isChromeOS(userAgent: string): boolean {
  const chromePattern = /CrOS/i;
  return chromePattern.test(userAgent);
}

function getOS(): UseOSReturnValue {
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
  if (isChromeOS(userAgent)) {
    return 'chromeos';
  }

  return 'undetermined';
}

export interface UseOsOptions {
  getValueInEffect: boolean;
}

export function useOs(options: UseOsOptions = { getValueInEffect: true }): UseOSReturnValue {
  const [value, setValue] = useState<UseOSReturnValue>(
    options.getValueInEffect ? 'undetermined' : getOS()
  );

  useIsomorphicEffect(() => {
    if (options.getValueInEffect) {
      setValue(getOS);
    }
  }, []);

  return value;
}
