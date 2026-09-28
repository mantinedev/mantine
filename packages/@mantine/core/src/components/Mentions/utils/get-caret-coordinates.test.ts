import { getCaretCoordinates } from './get-caret-coordinates';

function mockSpanOffsets(spanText: string, offsets: { top: number; left: number }) {
  const top = jest
    .spyOn(HTMLElement.prototype, 'offsetTop', 'get')
    .mockImplementation(function getOffsetTop(this: HTMLElement) {
      return this.textContent === spanText ? offsets.top : 0;
    });
  const left = jest
    .spyOn(HTMLElement.prototype, 'offsetLeft', 'get')
    .mockImplementation(function getOffsetLeft(this: HTMLElement) {
      return this.textContent === spanText ? offsets.left : 0;
    });

  return () => {
    top.mockRestore();
    left.mockRestore();
  };
}

describe('@mantine/core/Mentions/get-caret-coordinates', () => {
  it('returns the caret rect of a textarea from the mirror span and element borders', () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'Hello world';
    textarea.style.borderTopWidth = '2px';
    textarea.style.borderLeftWidth = '3px';
    textarea.style.lineHeight = '24px';
    textarea.style.fontSize = '16px';
    document.body.appendChild(textarea);
    const restore = mockSpanOffsets(' world', { top: 40, left: 50 });

    expect(getCaretCoordinates(textarea, 5)).toStrictEqual({ top: 42, left: 53, height: 24 });

    restore();
    document.body.removeChild(textarea);
  });

  it('does not leave the mirror element in the DOM', () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'abc';
    document.body.appendChild(textarea);

    const childrenBefore = document.body.childElementCount;
    getCaretCoordinates(textarea, 2);
    expect(document.body.childElementCount).toBe(childrenBefore);

    document.body.removeChild(textarea);
  });

  it('falls back to font size for height with input elements', () => {
    const input = document.createElement('input');
    input.value = 'test value';
    input.style.borderWidth = '0px';
    input.style.fontSize = '16px';
    document.body.appendChild(input);
    const restore = mockSpanOffsets(' value', { top: 0, left: 30 });

    expect(getCaretCoordinates(input, 4)).toStrictEqual({ top: 0, left: 30, height: 16 });

    restore();
    document.body.removeChild(input);
  });
});
