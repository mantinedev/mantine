import { act, renderHook } from '@testing-library/react';
import { useCombobox } from './use-combobox';

describe('@mantine/core/Combobox/use-combobox shadow DOM support', () => {
  // Helper to create a shadow DOM container
  function createShadowContainer() {
    const host = document.createElement('div');
    const shadow = host.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    shadow.appendChild(container);
    document.body.appendChild(host);

    return { host, shadow, container };
  }

  // Helper to create a combobox with options in shadow DOM
  function setupShadowCombobox() {
    const { host, shadow, container } = createShadowContainer();
    const hook = renderHook(() => useCombobox({ defaultOpened: true }));

    // Render the combobox structure in shadow DOM
    const comboboxContainer = document.createElement('div');
    comboboxContainer.innerHTML = `
      <div>
        <input data-combobox-target />
        <div id="test-list-id" role="listbox">
          <div data-combobox-option id="option-1">Option 1</div>
          <div data-combobox-option id="option-2">Option 2</div>
          <div data-combobox-option id="option-3" data-combobox-disabled>Option 3 (disabled)</div>
          <div data-combobox-option id="option-4">Option 4</div>
        </div>
      </div>
    `;
    container.appendChild(comboboxContainer);

    // Set the target ref to point to an element inside the shadow DOM
    const targetElement = container.querySelector('[data-combobox-target]') as HTMLElement;
    hook.result.current.targetRef.current = targetElement;

    // Set list ID
    act(() => {
      hook.result.current.setListId('test-list-id');
    });

    return { host, shadow, container, hook, targetElement };
  }

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('finds elements inside shadow DOM using selectOption', () => {
    const { hook, shadow } = setupShadowCombobox();

    // Select first option
    act(() => {
      hook.result.current.selectOption(0);
    });

    // Verify the element inside shadow DOM was found and marked as selected
    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption).toBeTruthy();
    expect(selectedOption?.id).toBe('option-1');
    expect(selectedOption?.getAttribute('aria-selected')).toBe('true');
  });

  it('finds elements inside shadow DOM using selectNextOption', () => {
    const { hook, shadow } = setupShadowCombobox();

    // Select first option
    act(() => {
      hook.result.current.selectOption(0);
    });

    // Select next option
    act(() => {
      hook.result.current.selectNextOption();
    });

    // Verify the second element was selected
    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption?.id).toBe('option-2');
  });

  it('finds elements inside shadow DOM using selectPreviousOption', () => {
    const { hook, shadow } = setupShadowCombobox();

    // Select second option
    act(() => {
      hook.result.current.selectOption(1);
    });

    // Select previous option
    act(() => {
      hook.result.current.selectPreviousOption();
    });

    // Verify the first element was selected
    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption?.id).toBe('option-1');
  });

  it('skips disabled options when navigating in shadow DOM', () => {
    const { hook, shadow } = setupShadowCombobox();

    // Select option 2 (index 1)
    act(() => {
      hook.result.current.selectOption(1);
    });

    // Try to select next - should skip option 3 (disabled) and go to option 4
    act(() => {
      hook.result.current.selectNextOption();
    });

    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption?.id).toBe('option-4');
  });

  it('finds active option inside shadow DOM using selectActiveOption', () => {
    const { hook, shadow, container } = setupShadowCombobox();

    // Mark option 2 as active
    const option2 = container.querySelector('#option-2') as HTMLElement;
    option2.setAttribute('data-combobox-active', 'true');

    // Select active option
    act(() => {
      hook.result.current.selectActiveOption();
    });

    // Verify option 2 was selected
    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption?.id).toBe('option-2');
  });

  it('finds first available option inside shadow DOM using selectFirstOption', () => {
    const { hook, shadow } = setupShadowCombobox();

    // Select first option
    act(() => {
      hook.result.current.selectFirstOption();
    });

    // Verify first option was selected
    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption?.id).toBe('option-1');
  });

  it('resets selected option inside shadow DOM using resetSelectedOption', () => {
    const { hook, shadow } = setupShadowCombobox();

    // Select first option
    act(() => {
      hook.result.current.selectOption(0);
    });

    // Verify it's selected
    expect(shadow.querySelector('[data-combobox-selected]')).toBeTruthy();

    // Reset selection
    act(() => {
      hook.result.current.resetSelectedOption();
    });

    // Verify no option is selected
    expect(shadow.querySelector('[data-combobox-selected]')).toBeFalsy();
  });

  it('clicks selected option inside shadow DOM using clickSelectedOption', () => {
    const { hook, container } = setupShadowCombobox();
    const clickSpy = jest.fn();

    // Add click listener to option 1
    const option1 = container.querySelector('#option-1') as HTMLElement;
    option1.addEventListener('click', clickSpy);

    // Select first option
    act(() => {
      hook.result.current.selectOption(0);
    });

    // Click selected option
    act(() => {
      hook.result.current.clickSelectedOption();
    });

    // Verify click was called
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('updates selected option index for active option in shadow DOM', async () => {
    const { hook, container } = setupShadowCombobox();

    // Mark option 2 as active
    const option2 = container.querySelector('#option-2') as HTMLElement;
    option2.setAttribute('data-combobox-active', 'true');

    // Update selected option index to active
    act(() => {
      hook.result.current.updateSelectedOptionIndex('active');
    });

    // Wait for timeout to complete
    await new Promise((resolve) => setTimeout(resolve, 10));

    // Verify the index was updated to 1 (option 2)
    expect(hook.result.current.getSelectedOptionIndex()).toBe(1);
  });

  it('works with nested shadow DOMs', () => {
    const { host, container } = createShadowContainer();

    // Create another nested shadow root
    const nestedHost = document.createElement('div');
    const nestedShadow = nestedHost.attachShadow({ mode: 'open' });
    container.appendChild(nestedHost);

    const hook = renderHook(() => useCombobox({ defaultOpened: true }));

    // Render combobox in nested shadow DOM
    const comboboxContainer = document.createElement('div');
    comboboxContainer.innerHTML = `
      <div>
        <input data-combobox-target />
        <div id="nested-list-id" role="listbox">
          <div data-combobox-option id="nested-option-1">Nested Option 1</div>
          <div data-combobox-option id="nested-option-2">Nested Option 2</div>
        </div>
      </div>
    `;
    nestedShadow.appendChild(comboboxContainer);

    // Set the target ref to point to an element inside the nested shadow DOM
    const targetElement = nestedShadow.querySelector('[data-combobox-target]') as HTMLElement;
    hook.result.current.targetRef.current = targetElement;

    // Set list ID
    act(() => {
      hook.result.current.setListId('nested-list-id');
    });

    // Select first option
    act(() => {
      hook.result.current.selectOption(0);
    });

    // Verify the element inside nested shadow DOM was found and marked as selected
    const selectedOption = nestedShadow.querySelector('[data-combobox-selected]');
    expect(selectedOption).toBeTruthy();
    expect(selectedOption?.id).toBe('nested-option-1');

    document.body.removeChild(host);
  });

  it('loops from last to first option when loop is enabled', () => {
    const { hook, shadow } = setupShadowCombobox();

    // Select last option (option 4, index 3)
    act(() => {
      hook.result.current.selectOption(3);
    });

    expect(shadow.querySelector('[data-combobox-selected]')?.id).toBe('option-4');

    // Select next - should loop back to first
    act(() => {
      hook.result.current.selectNextOption();
    });

    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption?.id).toBe('option-1');
  });

  it('loops from first to last option when loop is enabled', () => {
    const { hook, shadow } = setupShadowCombobox();

    // Select first option
    act(() => {
      hook.result.current.selectOption(0);
    });

    expect(shadow.querySelector('[data-combobox-selected]')?.id).toBe('option-1');

    // Select previous - should loop to last
    act(() => {
      hook.result.current.selectPreviousOption();
    });

    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption?.id).toBe('option-4');
  });

  it('does not loop when loop is disabled', () => {
    const { host, shadow, container } = createShadowContainer();
    const hook = renderHook(() => useCombobox({ defaultOpened: true, loop: false }));

    // Render the combobox structure in shadow DOM
    const comboboxContainer = document.createElement('div');
    comboboxContainer.innerHTML = `
      <div>
        <input data-combobox-target />
        <div id="test-list-id" role="listbox">
          <div data-combobox-option id="option-1">Option 1</div>
          <div data-combobox-option id="option-2">Option 2</div>
        </div>
      </div>
    `;
    container.appendChild(comboboxContainer);

    const targetElement = container.querySelector('[data-combobox-target]') as HTMLElement;
    hook.result.current.targetRef.current = targetElement;

    act(() => {
      hook.result.current.setListId('test-list-id');
    });

    // Select last option
    act(() => {
      hook.result.current.selectOption(1);
    });

    expect(shadow.querySelector('[data-combobox-selected]')?.id).toBe('option-2');

    // Try to select next - should stay on last option
    act(() => {
      hook.result.current.selectNextOption();
    });

    const selectedOption = shadow.querySelector('[data-combobox-selected]');
    expect(selectedOption?.id).toBe('option-2');

    document.body.removeChild(host);
  });
});
