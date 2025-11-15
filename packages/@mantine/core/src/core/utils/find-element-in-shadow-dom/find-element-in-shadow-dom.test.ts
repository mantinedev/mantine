import {
  findElementBySelector,
  findElementsBySelector,
  getRootElement,
} from './find-element-in-shadow-dom';

describe('@mantine/core/utils/find-element-in-shadow-dom', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('findElementBySelector', () => {
    it('finds element in regular DOM', () => {
      document.body.innerHTML = '<div id="test">Test</div>';
      const element = findElementBySelector('#test');
      expect(element?.id).toBe('test');
    });

    it('finds element in shadow DOM', () => {
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      shadow.innerHTML = '<div id="shadow-test">Shadow Test</div>';
      document.body.appendChild(host);

      const element = findElementBySelector('#shadow-test');
      expect(element?.id).toBe('shadow-test');
    });

    it('finds element in nested shadow DOM', () => {
      const host1 = document.createElement('div');
      const shadow1 = host1.attachShadow({ mode: 'open' });
      document.body.appendChild(host1);

      const host2 = document.createElement('div');
      const shadow2 = host2.attachShadow({ mode: 'open' });
      shadow1.appendChild(host2);

      shadow2.innerHTML = '<div id="nested-shadow">Nested Shadow</div>';

      const element = findElementBySelector('#nested-shadow');
      expect(element?.id).toBe('nested-shadow');
    });

    it('returns null when element is not found', () => {
      document.body.innerHTML = '<div id="test">Test</div>';
      const element = findElementBySelector('#non-existent');
      expect(element).toBeNull();
    });

    it('finds element by class selector in shadow DOM', () => {
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      shadow.innerHTML = '<div class="test-class">Test</div>';
      document.body.appendChild(host);

      const element = findElementBySelector('.test-class');
      expect(element?.className).toBe('test-class');
    });

    it('finds element by attribute selector in shadow DOM', () => {
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      shadow.innerHTML = '<div data-test="value">Test</div>';
      document.body.appendChild(host);

      const element = findElementBySelector('[data-test="value"]');
      expect(element?.getAttribute('data-test')).toBe('value');
    });

    it('searches from provided root element', () => {
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      shadow.innerHTML = '<div id="in-shadow">Test</div>';
      document.body.appendChild(host);

      // Search from shadow root directly
      const element = findElementBySelector('#in-shadow', shadow);
      expect(element?.id).toBe('in-shadow');
    });

    it('returns first matching element when multiple exist', () => {
      document.body.innerHTML = `
        <div class="duplicate">First</div>
        <div class="duplicate">Second</div>
      `;

      const element = findElementBySelector('.duplicate');
      expect(element?.textContent).toBe('First');
    });
  });

  describe('findElementsBySelector', () => {
    it('finds all elements in regular DOM', () => {
      document.body.innerHTML = `
        <div class="test">Test 1</div>
        <div class="test">Test 2</div>
        <div class="test">Test 3</div>
      `;

      const elements = findElementsBySelector('.test');
      expect(elements).toHaveLength(3);
      expect(elements[0].textContent).toBe('Test 1');
      expect(elements[1].textContent).toBe('Test 2');
      expect(elements[2].textContent).toBe('Test 3');
    });

    it('finds all elements across shadow DOM boundaries', () => {
      // Create regular DOM element
      const regularDiv = document.createElement('div');
      regularDiv.className = 'test';
      regularDiv.textContent = 'Regular';
      document.body.appendChild(regularDiv);

      // Create shadow DOM with element
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      shadow.innerHTML = '<div class="test">Shadow</div>';
      document.body.appendChild(host);

      const elements = findElementsBySelector('.test');
      expect(elements).toHaveLength(2);
      expect(elements.map((el) => el.textContent)).toEqual(['Regular', 'Shadow']);
    });

    it('finds all elements in nested shadow DOMs', () => {
      // First shadow DOM
      const host1 = document.createElement('div');
      const shadow1 = host1.attachShadow({ mode: 'open' });
      shadow1.innerHTML = '<div class="test">Shadow 1</div>';
      document.body.appendChild(host1);

      // Nested shadow DOM
      const host2 = document.createElement('div');
      const shadow2 = host2.attachShadow({ mode: 'open' });
      shadow2.innerHTML = '<div class="test">Nested Shadow 2</div>';
      shadow1.appendChild(host2);

      const elements = findElementsBySelector('.test');
      expect(elements).toHaveLength(2);
    });

    it('returns empty array when no elements found', () => {
      document.body.innerHTML = '<div id="test">Test</div>';
      const elements = findElementsBySelector('.non-existent');
      expect(elements).toHaveLength(0);
    });

    it('finds elements by complex selector in shadow DOM', () => {
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <div data-combobox-option>Option 1</div>
        <div data-combobox-option data-combobox-disabled>Option 2</div>
        <div data-combobox-option>Option 3</div>
      `;
      document.body.appendChild(host);

      const elements = findElementsBySelector('[data-combobox-option]');
      expect(elements).toHaveLength(3);
    });

    it('maintains order of elements found', () => {
      document.body.innerHTML = `
        <div class="ordered">1</div>
        <div class="ordered">2</div>
        <div class="ordered">3</div>
      `;

      const elements = findElementsBySelector('.ordered');
      expect(elements[0].textContent).toBe('1');
      expect(elements[1].textContent).toBe('2');
      expect(elements[2].textContent).toBe('3');
    });
  });

  describe('getRootElement', () => {
    it('returns document when target is null', () => {
      const root = getRootElement(null);
      expect(root).toBe(document);
    });

    it('returns document when target is undefined', () => {
      const root = getRootElement(undefined);
      expect(root).toBe(document);
    });

    it('returns document for regular DOM element', () => {
      const element = document.createElement('div');
      document.body.appendChild(element);

      const root = getRootElement(element);
      expect(root).toBe(document);
    });

    it('returns shadow root for element inside shadow DOM', () => {
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      const element = document.createElement('div');
      shadow.appendChild(element);
      document.body.appendChild(host);

      const root = getRootElement(element);
      expect(root).toBe(shadow);
      expect(root instanceof ShadowRoot).toBe(true);
    });

    it('returns shadow root for nested shadow DOM element', () => {
      const host1 = document.createElement('div');
      const shadow1 = host1.attachShadow({ mode: 'open' });
      document.body.appendChild(host1);

      const host2 = document.createElement('div');
      const shadow2 = host2.attachShadow({ mode: 'open' });
      shadow1.appendChild(host2);

      const element = document.createElement('div');
      shadow2.appendChild(element);

      const root = getRootElement(element);
      expect(root).toBe(shadow2);
      expect(root instanceof ShadowRoot).toBe(true);
    });

    it('returns document as fallback for non-standard root node', () => {
      // Create a mock element with a non-standard getRootNode result
      const element = document.createElement('div');
      Object.defineProperty(element, 'getRootNode', {
        value: () => ({}), // Return non-Document, non-ShadowRoot object
      });

      const root = getRootElement(element);
      expect(root).toBe(document);
    });
  });

  describe('integration tests', () => {
    it('works with complex nested structure', () => {
      // Create a complex nested structure with multiple shadow roots
      document.body.innerHTML = '<div class="regular">Regular 1</div>';

      const host1 = document.createElement('div');
      const shadow1 = host1.attachShadow({ mode: 'open' });
      shadow1.innerHTML = '<div class="regular">Shadow 1-1</div>';
      document.body.appendChild(host1);

      const host2 = document.createElement('div');
      const shadow2 = host2.attachShadow({ mode: 'open' });
      shadow2.innerHTML = '<div class="regular">Shadow 2-1</div>';
      shadow1.appendChild(host2);

      const host3 = document.createElement('div');
      const shadow3 = host3.attachShadow({ mode: 'open' });
      shadow3.innerHTML = '<div class="regular">Shadow 3-1</div>';
      document.body.appendChild(host3);

      const elements = findElementsBySelector('.regular');
      expect(elements).toHaveLength(4);
      expect(elements.map((el) => el.textContent)).toEqual([
        'Regular 1',
        'Shadow 1-1',
        'Shadow 2-1',
        'Shadow 3-1',
      ]);
    });

    it('can find and manipulate elements in shadow DOM', () => {
      const host = document.createElement('div');
      const shadow = host.attachShadow({ mode: 'open' });
      shadow.innerHTML = '<div id="target">Original</div>';
      document.body.appendChild(host);

      const element = findElementBySelector('#target');
      expect(element?.textContent).toBe('Original');

      // Manipulate the element
      if (element) {
        element.textContent = 'Modified';
      }

      const modifiedElement = findElementBySelector('#target');
      expect(modifiedElement?.textContent).toBe('Modified');
    });
  });
});
