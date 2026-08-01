import { getCaretCoordinates } from './get-caret-coordinates';

describe('@mantine/core/Mentions/get-caret-coordinates', () => {
  it('returns a plausible caret rect for a textarea', () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'Hello world';
    document.body.appendChild(textarea);

    const coordinates = getCaretCoordinates(textarea, 5);

    // jsdom does not perform layout, so only assert the shape and numeric types
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
});
