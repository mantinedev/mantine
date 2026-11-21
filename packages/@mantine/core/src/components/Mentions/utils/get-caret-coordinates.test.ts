import { getCaretCoordinates } from './get-caret-coordinates';

describe('@mantine/core/Mentions/get-caret-coordinates', () => {
  it('returns a plausible caret rect for a textarea', () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'Hello world';
    document.body.appendChild(textarea);

    const coordinates = getCaretCoordinates(textarea, 5);

    expect(typeof coordinates.top).toBe('number');
    expect(typeof coordinates.left).toBe('number');
    expect(typeof coordinates.height).toBe('number');
    expect(Number.isNaN(coordinates.top)).toBe(false);
    expect(Number.isNaN(coordinates.left)).toBe(false);

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

  it('works with input elements', () => {
    const input = document.createElement('input');
    input.value = 'test value';
    document.body.appendChild(input);

    const coordinates = getCaretCoordinates(input, 4);
    expect(Number.isNaN(coordinates.left)).toBe(false);

    document.body.removeChild(input);
  });

  function captureMirrorStyle(element: HTMLTextAreaElement | HTMLInputElement) {
    const appendChild = jest.spyOn(document.body, 'appendChild');
    getCaretCoordinates(element, 2);
    const mirror = appendChild.mock.calls.find(([node]) => node !== element)![0] as HTMLElement;
    appendChild.mockRestore();
    return { style: mirror.style, text: mirror.firstChild!.textContent };
  }

  it('does not wrap the mirror of an input', () => {
    const input = document.createElement('input');
    input.value = 'a  b c';
    document.body.appendChild(input);

    const mirror = captureMirrorStyle(input);
    expect(mirror.style.whiteSpace).toBe('nowrap');
    expect(mirror.style.wordWrap).toBe('');
    expect(mirror.text).toBe('a\u00a0');

    document.body.removeChild(input);
  });

  it('wraps the mirror of a textarea like the textarea', () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'a  b c';
    document.body.appendChild(textarea);

    const mirror = captureMirrorStyle(textarea);
    expect(mirror.style.whiteSpace).toBe('pre-wrap');
    expect(mirror.style.wordWrap).toBe('break-word');

    document.body.removeChild(textarea);
  });
});
