export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';

function getOS() {
  const { userAgent } = window.navigator;
  const { platform } = window.navigator;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os: OS = 'undetermined';

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'macos';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else if (/Linux/.test(platform)) {
    os = 'linux';
  }

  return os;
}

export function useOs(): OS {
  if (typeof window !== 'undefined') {
    return getOS();
  }

  return 'undetermined';
}
