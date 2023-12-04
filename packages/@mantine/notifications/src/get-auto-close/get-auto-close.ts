export function getAutoClose(
  autoClose: boolean | number | undefined,
  notificationAutoClose: boolean | number | undefined
) {
  if (typeof notificationAutoClose === 'number') {
    return notificationAutoClose;
  }

  if (notificationAutoClose === false || autoClose === false) {
    return false;
  }

  return autoClose;
}
