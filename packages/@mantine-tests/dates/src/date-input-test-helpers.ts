import userEvent from '@testing-library/user-event';

export function getInputValue(container: HTMLElement) {
  const element = container.querySelector('[data-dates-input]');
  return element instanceof HTMLButtonElement
    ? element.textContent
    : element?.getAttribute('value');
}

export function expectValue(container: HTMLElement, value: string) {
  expect(getInputValue(container)).toBe(value);
}

export function clickInput(container: HTMLElement) {
  return userEvent.click(container.querySelector('[data-dates-input]')!);
}

export function expectOpenedPopover(container: HTMLElement) {
  expect(container.querySelector('[data-dates-dropdown]')).toBeInTheDocument();
}

export function expectNoPopover(container: HTMLElement) {
  expect(container.querySelectorAll('[data-dates-dropdown]')).toHaveLength(0);
}

export function expectOpenedModal(container: HTMLElement) {
  expect(container.querySelector('.mantine-Modal-content')).toBeInTheDocument();
}

export function expectNoModal(container: HTMLElement) {
  expect(container.querySelectorAll('.mantine-Modal-content')).toHaveLength(0);
}

export function clickControl(container: HTMLElement, index: number) {
  return userEvent.click(container.querySelectorAll('table button')[index]);
}
