export default function getAutoClose(
  autoClose: boolean | number,
  notificationAutoClose: boolean | number
) {
  if (typeof notificationAutoClose === 'number') {
    return notificationAutoClose;
  }

  if (notificationAutoClose === false || autoClose === false) {
    return false;
  }

  return autoClose;
}
