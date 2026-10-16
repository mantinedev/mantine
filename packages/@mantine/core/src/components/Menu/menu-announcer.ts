const ANNOUNCE_DELAY = 100;
const CLEAR_DELAY = 7000;

let region: HTMLElement | null = null;
let announceTimeout: number | null = null;
let clearTimeout: number | null = null;

function getRegion() {
  if (region && region.isConnected) {
    return region;
  }

  region = document.createElement('div');
  region.setAttribute('aria-live', 'polite');
  region.setAttribute('aria-atomic', 'true');
  region.setAttribute('data-mantine-menu-announcer', '');
  Object.assign(region.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
  });
  document.body.appendChild(region);
  return region;
}

function clearTimers() {
  announceTimeout !== null && window.clearTimeout(announceTimeout);
  clearTimeout !== null && window.clearTimeout(clearTimeout);
  announceTimeout = null;
  clearTimeout = null;
}

export function announceMenuMessage(message: string) {
  const node = getRegion();
  clearTimers();
  node.textContent = '';

  const id = window.setTimeout(() => {
    node.textContent = message;
    clearTimeout = window.setTimeout(() => {
      node.textContent = '';
    }, CLEAR_DELAY);
  }, ANNOUNCE_DELAY);
  announceTimeout = id;

  return () => {
    if (announceTimeout === id) {
      clearTimers();
      node.textContent = '';
    } else if (announceTimeout === null && node.textContent === message) {
      clearTimers();
      node.textContent = '';
    }
  };
}
