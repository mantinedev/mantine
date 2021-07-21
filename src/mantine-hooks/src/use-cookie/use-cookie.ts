import { useRef } from 'react';

function getCookie(name: string) {
  const cookie = `${name}=`;
  const decoded = decodeURIComponent(document.cookie);
  const arr = decoded.split('; ');
  return arr.reduce((acc, val) => {
    if (val.indexOf(cookie) === 0) {
      return val.substring(cookie.length);
    }
    return acc;
  }, '');
}

function _setCookie(name: string, value: string) {
  const cookieName = `${name}=`;
  const cookieValue =
    value === ''
      ? `${cookieName}; Expires=Thu, 01 Jan 1970 00:00:01 GMT`
      : value.indexOf(cookieName) === 0
      ? value.substring(cookieName.length)
      : value;

  document.cookie = `${cookieName}${cookieValue}`;
  return value === '' ? '' : cookieValue;
}

export function useCookie(name: string) {
  const cookieValueRef = useRef<string>(getCookie(name));

  const setCookie = (value?: React.SetStateAction<string>) => {
    if (typeof value === 'string') {
      cookieValueRef.current = _setCookie(name, value);
    } else if (typeof value === 'function') {
      const cookieValue = value(cookieValueRef.current);
      cookieValueRef.current = _setCookie(name, cookieValue);
    } else {
      cookieValueRef.current = _setCookie(name, '');
    }
  };

  return [cookieValueRef, setCookie] as const;
}
