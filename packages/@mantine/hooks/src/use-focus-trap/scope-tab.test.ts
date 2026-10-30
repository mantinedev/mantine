import { scopeTab } from './scope-tab';

function setup(html: string) {
  document.body.innerHTML = `<div id="trap" tabindex="-1">${html}</div><button id="outside">outside</button>`;
  const node = document.getElementById('trap')!;
  const el = (id: string) => document.getElementById(id) as HTMLElement;
  const tab = (shiftKey = false) => {
    const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey, cancelable: true });
    scopeTab(node, event);
    return event;
  };
  return { node, el, tab };
}

const FORM = `
  <button id="close">close</button>
  <input id="first" />
  <input id="second" />
  <input id="checkbox" type="checkbox" />
  <button id="submit">submit</button>
`;

describe('@mantine/hooks/use-focus-trap/scope-tab', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('moves focus to the next tabbable element on Tab', () => {
    const { el, tab } = setup(FORM);
    el('second').focus();
    const event = tab();
    expect(event.defaultPrevented).toBe(true);
    expect(el('checkbox')).toHaveFocus();
  });

  it('moves focus to the previous tabbable element on Shift+Tab', () => {
    const { el, tab } = setup(FORM);
    el('second').focus();
    const event = tab(true);
    expect(event.defaultPrevented).toBe(true);
    expect(el('first')).toHaveFocus();
  });

  it('wraps focus from the last element to the first and back', () => {
    const { el, tab } = setup(FORM);
    el('submit').focus();
    tab();
    expect(el('close')).toHaveFocus();
    tab(true);
    expect(el('submit')).toHaveFocus();
  });

  it('does nothing when focus is outside of the node', () => {
    const { el, tab } = setup(FORM);
    el('outside').focus();
    const event = tab();
    expect(event.defaultPrevented).toBe(false);
    expect(el('outside')).toHaveFocus();
  });

  it('moves focus to the first/last tabbable element when the node itself is focused', () => {
    const { node, el, tab } = setup(FORM);
    node.focus();
    tab();
    expect(el('close')).toHaveFocus();
    node.focus();
    tab(true);
    expect(el('submit')).toHaveFocus();
  });

  it('continues from the DOM position of a focused non-tabbable element', () => {
    const { el, tab } = setup(`
      <button id="close">close</button>
      <div id="cell" tabindex="-1">cell</div>
      <button id="submit">submit</button>
    `);
    el('cell').focus();
    tab();
    expect(el('submit')).toHaveFocus();
    el('cell').focus();
    tab(true);
    expect(el('close')).toHaveFocus();
  });

  it('skips disabled and tabindex=-1 elements', () => {
    const { el, tab } = setup(`
      <button id="close">close</button>
      <button id="disabled" disabled>disabled</button>
      <button id="hidden" tabindex="-1">hidden</button>
      <button id="submit">submit</button>
    `);
    el('close').focus();
    tab();
    expect(el('submit')).toHaveFocus();
  });

  it('skips elements that refuse focus', () => {
    const { el, tab } = setup(FORM);
    Object.defineProperty(el('checkbox'), 'focus', { value: () => {} });
    el('second').focus();
    tab();
    expect(el('submit')).toHaveFocus();
  });

  it('treats a radio group as a single tab stop', () => {
    const { el, tab } = setup(`
      <input id="before" />
      <input id="r1" type="radio" name="group" />
      <input id="r2" type="radio" name="group" checked />
      <input id="r3" type="radio" name="group" />
      <input id="after" />
    `);
    el('before').focus();
    tab();
    expect(el('r2')).toHaveFocus();
    tab();
    expect(el('after')).toHaveFocus();
    tab(true);
    expect(el('r2')).toHaveFocus();
    tab(true);
    expect(el('before')).toHaveFocus();
  });

  it('enters an unchecked radio group at the first radio forwards and the last radio backwards', () => {
    const { el, tab } = setup(`
      <input id="before" />
      <input id="r1" type="radio" name="group" />
      <input id="r2" type="radio" name="group" />
      <input id="after" />
    `);
    el('before').focus();
    tab();
    expect(el('r1')).toHaveFocus();
    tab();
    expect(el('after')).toHaveFocus();
    tab(true);
    expect(el('r2')).toHaveFocus();
    tab(true);
    expect(el('before')).toHaveFocus();
  });

  it('includes contenteditable elements and summary in the sequence', () => {
    const { el, tab } = setup(`
      <button id="close">close</button>
      <div id="editor" contenteditable="true">editor</div>
      <div id="not-editor" contenteditable="false">text</div>
      <details><summary id="summary">summary</summary>details</details>
      <button id="submit">submit</button>
    `);
    el('close').focus();
    tab();
    expect(el('editor')).toHaveFocus();
    tab();
    expect(el('summary')).toHaveFocus();
    tab();
    expect(el('submit')).toHaveFocus();
  });

  it('visits elements with positive tabindex first in ascending order', () => {
    const { el, tab } = setup(`
      <button id="second" tabindex="2">second</button>
      <button id="first" tabindex="1">first</button>
      <button id="third">third</button>
      <button id="fourth" tabindex="0">fourth</button>
    `);
    el('first').focus();
    tab();
    expect(el('second')).toHaveFocus();
    tab();
    expect(el('third')).toHaveFocus();
    tab();
    expect(el('fourth')).toHaveFocus();
    tab();
    expect(el('first')).toHaveFocus();
  });

  it('lets the browser handle Tab inside elements with native tab stops', () => {
    const { el, tab } = setup(`
      <input id="before" />
      <input id="time" type="time" />
      <button id="submit">submit</button>
    `);
    jest.useFakeTimers();
    el('time').focus();
    const event = tab();
    expect(event.defaultPrevented).toBe(false);
    expect(el('time')).toHaveFocus();
    jest.runAllTimers();
    expect(el('time')).toHaveFocus();
    jest.useRealTimers();
  });

  it('returns focus to the next element when a native tab stops element lets focus escape', () => {
    const { el, tab } = setup(`
      <input id="before" />
      <input id="time" type="time" />
      <button id="submit">submit</button>
    `);
    jest.useFakeTimers();
    el('time').focus();
    tab();
    el('outside').focus();
    jest.runAllTimers();
    expect(el('submit')).toHaveFocus();

    el('time').focus();
    tab(true);
    el('outside').focus();
    jest.runAllTimers();
    expect(el('before')).toHaveFocus();
    jest.useRealTimers();
  });

  it('corrects native Tab from a native tab stops element that skipped elements inside the trap', () => {
    const { el, tab } = setup(`
      <input id="before" />
      <input id="time" type="time" />
      <button id="submit">submit</button>
    `);
    jest.useFakeTimers();
    el('time').focus();
    tab();
    el('before').focus();
    jest.runAllTimers();
    expect(el('submit')).toHaveFocus();
    jest.useRealTimers();
  });

  it('keeps focus in place and prevents default when there are no tabbable elements', () => {
    const { node, tab } = setup('<p>text</p>');
    node.focus();
    const event = tab();
    expect(event.defaultPrevented).toBe(true);
    expect(node).toHaveFocus();
  });

  it('selects the value of a text input it moves focus to, like native Tab', () => {
    const { el, tab } = setup(`
      <input id="first" value="first value" />
      <button id="middle">middle</button>
      <input id="last" value="100,00" />
    `);
    const first = el('first') as HTMLInputElement;
    const last = el('last') as HTMLInputElement;

    el('middle').focus();
    tab();
    expect(last).toHaveFocus();
    expect([last.selectionStart, last.selectionEnd]).toEqual([0, last.value.length]);

    el('middle').focus();
    tab(true);
    expect(first).toHaveFocus();
    expect([first.selectionStart, first.selectionEnd]).toEqual([0, first.value.length]);
  });

  it('keeps the caret position of a textarea it moves focus to, like native Tab', () => {
    const { el, tab } = setup(`
      <button id="close">close</button>
      <textarea id="notes">first line</textarea>
    `);
    const notes = el('notes') as HTMLTextAreaElement;
    notes.setSelectionRange(5, 5);

    el('close').focus();
    tab();
    expect(notes).toHaveFocus();
    expect([notes.selectionStart, notes.selectionEnd]).toEqual([5, 5]);
  });
});
