import { isExternalInputChange } from './is-external-input-change';

describe('@mantine/core/Combobox/is-external-input-change', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  type InputChangeEvent = Parameters<typeof isExternalInputChange>[0];

  const createEvent = (input: HTMLInputElement) =>
    ({ currentTarget: input }) as unknown as InputChangeEvent;

  it('returns false when the focused input is in the main document', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    expect(isExternalInputChange(createEvent(input))).toBe(false);
  });

  it('returns true when the input is not focused', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    expect(isExternalInputChange(createEvent(input))).toBe(true);
  });

  it('returns false when the focused input is inside an iframe document', () => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    const iframeDocument = iframe.contentDocument!;
    const input = iframeDocument.createElement('input');
    iframeDocument.body.appendChild(input);
    input.focus();
    expect(isExternalInputChange(createEvent(input))).toBe(false);
  });
});
