import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { TagsInputStore, useTagsInput } from './use-tags-input';

const STORE_ACTIONS: (keyof TagsInputStore)[] = [
  'getValue',
  'setValue',
  'getSearch',
  'setSearch',
  'addTag',
  'addSplittedTags',
  'registerDropdownCallbacks',
  'isDropdownOpened',
  'openDropdown',
  'closeDropdown',
  'toggleDropdown',
  'getSelectedOptionIndex',
  'selectOption',
  'selectFirstOption',
  'selectActiveOption',
  'selectNextOption',
  'selectPreviousOption',
  'resetSelectedOption',
  'updateSelectedOptionIndex',
  'clickSelectedOption',
  'getListId',
  'setListId',
  'focusSearchInput',
  'focusTarget',
  'isSplitChar',
];

describe('@mantine/core/TagsInput/use-tags-input', () => {
  tests.itSupportsControllerMemoization<TagsInputStore>({
    hook: () => useTagsInput(),
    actions: STORE_ACTIONS,
    changeState: (store) => store.setValue(['React']),
  });

  tests.itSupportsControllerMemoization<TagsInputStore>({
    hook: () => useTagsInput(),
    actions: STORE_ACTIONS,
    changeState: (store) => store.openDropdown(),
  });

  it('returns value from getValue and calls onChange from setValue', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTagsInput({ defaultValue: ['React'], onChange }));
    expect(hook.result.current.getValue()).toEqual(['React']);

    act(() => hook.result.current.setValue(['Vue']));
    expect(hook.result.current.getValue()).toEqual(['Vue']);
    expect(onChange).toHaveBeenLastCalledWith(['Vue']);
  });

  it('reads values set earlier in the same handler when uncontrolled', () => {
    const hook = renderHook(() => useTagsInput());
    let value: string[] = [];
    let search = '';

    act(() => {
      hook.result.current.setSearch('Sv');
      hook.result.current.addTag('React');
      hook.result.current.addTag('Vue');
      value = hook.result.current.getValue();
      search = hook.result.current.getSearch();
    });

    expect(value).toEqual(['React', 'Vue']);
    expect(search).toBe('');
    expect(hook.result.current.getValue()).toEqual(['React', 'Vue']);
  });

  it('keeps the controlled value when the parent does not update it', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTagsInput({ value: ['React'], onChange }));

    act(() => {
      hook.result.current.addTag('Vue');
    });
    expect(onChange).toHaveBeenCalledWith(['React', 'Vue']);
    expect(hook.result.current.getValue()).toEqual(['React']);
  });

  it('calls onSearchChange from setSearch', () => {
    const onSearchChange = jest.fn();
    const hook = renderHook(() => useTagsInput({ onSearchChange }));

    act(() => hook.result.current.setSearch('Re'));
    expect(onSearchChange).toHaveBeenCalledWith('Re');
    expect(hook.result.current.getSearch()).toBe('Re');
  });

  it('adds a tag and clears the search', () => {
    const hook = renderHook(() => useTagsInput({ defaultSearchValue: 'Vue' }));
    let added = false;

    act(() => {
      added = hook.result.current.addTag('Vue');
    });

    expect(added).toBe(true);
    expect(hook.result.current.getValue()).toEqual(['Vue']);
    expect(hook.result.current.getSearch()).toBe('');
  });

  it('does not add an empty tag', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useTagsInput({ onChange }));
    let added = true;

    act(() => {
      added = hook.result.current.addTag('');
    });

    expect(added).toBe(false);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('rejects duplicates case-insensitively and clears the search', () => {
    const onDuplicate = jest.fn();
    const hook = renderHook(() =>
      useTagsInput({ defaultValue: ['React'], defaultSearchValue: 'react', onDuplicate })
    );

    act(() => {
      hook.result.current.addTag('react');
    });

    expect(onDuplicate).toHaveBeenCalledWith('react');
    expect(hook.result.current.getValue()).toEqual(['React']);
    expect(hook.result.current.getSearch()).toBe('');
  });

  it('adds duplicates when allowDuplicates is set and uses custom isDuplicate', () => {
    const onDuplicate = jest.fn();
    const hook = renderHook(() =>
      useTagsInput({
        defaultValue: ['React'],
        allowDuplicates: true,
        isDuplicate: (tag, current) => current.includes(tag),
        onDuplicate,
      })
    );

    act(() => {
      hook.result.current.addTag('react');
    });
    expect(onDuplicate).not.toHaveBeenCalled();

    act(() => {
      hook.result.current.addTag('React');
    });
    expect(onDuplicate).toHaveBeenCalledWith('React');
    expect(hook.result.current.getValue()).toEqual(['React', 'react', 'React']);
  });

  it('rejects tags above maxTags and keeps the search', () => {
    const onMaxTags = jest.fn();
    const hook = renderHook(() =>
      useTagsInput({ defaultValue: ['React'], defaultSearchValue: 'Vue', maxTags: 1, onMaxTags })
    );

    act(() => {
      hook.result.current.addTag('Vue');
    });

    expect(onMaxTags).toHaveBeenCalledWith('Vue');
    expect(hook.result.current.getValue()).toEqual(['React']);
    expect(hook.result.current.getSearch()).toBe('Vue');
  });

  it('rejects tags with isValidTag and keeps the search', () => {
    const onInvalidTag = jest.fn();
    const isValidTag = jest.fn((tag: string) => tag.includes('@'));
    const hook = renderHook(() =>
      useTagsInput({
        defaultValue: ['a@b.c'],
        defaultSearchValue: 'bad',
        isValidTag,
        onInvalidTag,
      })
    );

    act(() => {
      hook.result.current.addTag('bad');
    });

    expect(isValidTag).toHaveBeenCalledWith('bad', ['a@b.c']);
    expect(onInvalidTag).toHaveBeenCalledWith('bad');
    expect(hook.result.current.getValue()).toEqual(['a@b.c']);
    expect(hook.result.current.getSearch()).toBe('bad');
  });

  it('splits text into tags with splitChars', () => {
    const onDuplicate = jest.fn();
    const hook = renderHook(() =>
      useTagsInput({ defaultValue: ['React'], splitChars: ['|'], maxTags: 3, onDuplicate })
    );

    act(() => hook.result.current.addSplittedTags('Vue| react |Svelte|Angular'));

    expect(onDuplicate).toHaveBeenCalledWith('react');
    expect(hook.result.current.getValue()).toEqual(['React', 'Vue', 'Svelte']);
    expect(hook.result.current.getSearch()).toBe('');
  });

  it('keeps tags rejected by isValidTag in the search when splitting', () => {
    const calls: string[] = [];
    const hook = renderHook(() =>
      useTagsInput({
        isValidTag: (tag) => tag.includes('@'),
        onSearchChange: (search) => calls.push(`search:${search}`),
        onInvalidTag: (tag) => calls.push(`invalid:${tag}`),
      })
    );

    act(() => hook.result.current.addSplittedTags('a@b.c, bad, c@d.e, worse'));

    expect(hook.result.current.getValue()).toEqual(['a@b.c', 'c@d.e']);
    expect(hook.result.current.getSearch()).toBe('bad,worse');
    expect(calls).toEqual(['search:bad,worse', 'invalid:bad', 'invalid:worse']);
  });

  it('validates split tags against tags accepted earlier in the same submission', () => {
    const hook = renderHook(() =>
      useTagsInput({ isValidTag: (_tag, currentValues) => currentValues.length < 1 })
    );

    act(() => hook.result.current.addSplittedTags('a,b'));

    expect(hook.result.current.getValue()).toEqual(['a']);
    expect(hook.result.current.getSearch()).toBe('b');
  });

  it('opens, closes and toggles the dropdown', () => {
    const hook = renderHook(() => useTagsInput());
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.openDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(true);

    act(() => hook.result.current.toggleDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);

    act(() => hook.result.current.toggleDropdown());
    act(() => hook.result.current.closeDropdown());
    expect(hook.result.current.isDropdownOpened()).toBe(false);
  });

  it('calls dropdown options before registered dropdown callbacks', () => {
    const calls: string[] = [];
    const hook = renderHook(() =>
      useTagsInput({
        onDropdownOpen: () => calls.push('option-open'),
        onDropdownClose: () => calls.push('option-close'),
      })
    );

    hook.result.current.registerDropdownCallbacks({
      onOpen: (source) => calls.push(`registered-open-${source}`),
      onClose: (source) => calls.push(`registered-close-${source}`),
    });

    act(() => hook.result.current.openDropdown('keyboard'));
    act(() => hook.result.current.closeDropdown('mouse'));

    expect(calls).toEqual([
      'option-open',
      'registered-open-keyboard',
      'option-close',
      'registered-close-mouse',
    ]);
  });

  it('keeps the store stable when splitChars is passed inline', () => {
    const hook = renderHook(({ splitChars }) => useTagsInput({ splitChars }), {
      initialProps: { splitChars: ['|'] },
    });
    const first = hook.result.current;
    expect(first.isSplitChar('|')).toBe(true);
    expect(first.isSplitChar(',')).toBe(false);

    hook.rerender({ splitChars: [';'] });
    expect(hook.result.current).toBe(first);
    expect(first.isSplitChar(';')).toBe(true);
    expect(first.isSplitChar('|')).toBe(false);
  });
});
