import { createFormActions } from '@mantine/form';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getLabelledControl(root: ParentNode, label: string) {
  const labels = Array.from(root.querySelectorAll('label'));
  const match = labels.find(
    (element) => element.textContent?.trim().replace(/\s*\*$/, '') === label
  );
  if (!match) {
    return null;
  }
  const id = match.getAttribute('for');
  return id
    ? root.querySelector<HTMLElement>(`[id="${id}"]`)
    : match.querySelector<HTMLElement>('input, textarea');
}

function setNativeValue(element: HTMLInputElement | HTMLTextAreaElement, value: string) {
  const prototype = Object.getPrototypeOf(element);
  const setter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;
  setter?.call(element, value);
  element.dispatchEvent(new Event('input', { bubbles: true }));
}

export function formatDayLabel(date: Date) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  return `${date.getDate()} ${month} ${date.getFullYear()}`;
}

export function createFiller(root: HTMLElement) {
  return {
    /** True when an input with the given label is rendered */
    has(label: string) {
      return getLabelledControl(root, label) !== null;
    },

    /** Types a value into the input or textarea with the given label */
    async type(label: string, value: string) {
      const control = getLabelledControl(root, label);
      if (control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement) {
        control.focus();
        setNativeValue(control, value);
        control.blur();
        await sleep(0);
      }
    },

    /** Clicks a radio, checkbox or button with the given accessible name */
    async click(name: string) {
      const candidates = Array.from(
        root.querySelectorAll<HTMLElement>('input[type=radio], input[type=checkbox], button')
      );
      const target = candidates.find((element) => {
        const label = element.id ? root.querySelector(`label[for="${element.id}"]`) : null;
        const text = (
          label?.textContent ||
          element.getAttribute('aria-label') ||
          element.textContent ||
          ''
        ).trim();
        return text === name;
      });
      target?.click();
      await sleep(0);
    },

    /** Opens the picker input with the given label and picks the day, pressing Save when the dropdown has one */
    async pickDate(label: string, date: Date) {
      const control = getLabelledControl(root, label);
      control?.click();
      await sleep(100);
      const dayLabel = formatDayLabel(date);
      const day = Array.from(
        document.querySelectorAll<HTMLButtonElement>('button[aria-label]')
      ).find((button) => button.getAttribute('aria-label') === dayLabel);
      day?.click();
      await sleep(50);
      const save = Array.from(document.querySelectorAll<HTMLButtonElement>('button')).find(
        (button) => button.textContent?.trim() === 'Save'
      );
      save?.click();
      await sleep(0);
    },

    /** Opens a year range picker input with the given label and picks the two years from the visible decade */
    async pickYearRange(label: string, from: number, to: number) {
      const control = getLabelledControl(root, label);
      control?.click();
      await sleep(100);
      for (const year of [from, to]) {
        const button = Array.from(document.querySelectorAll<HTMLButtonElement>('button')).find(
          (element) => element.textContent?.trim() === String(year)
        );
        button?.click();
        await sleep(50);
      }
      const save = Array.from(document.querySelectorAll<HTMLButtonElement>('button')).find(
        (button) => button.textContent?.trim() === 'Save'
      );
      save?.click();
      await sleep(0);
    },

    /** Writes values straight into the form store through `createFormActions`, the form must have a `name` */
    setValues<Values extends Record<string, any>>(formName: string, values: Partial<Values>) {
      createFormActions<Values>(formName).setValues(values);
    },
  };
}

export type Filler = ReturnType<typeof createFiller>;
