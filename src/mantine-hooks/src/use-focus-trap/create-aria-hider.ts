import { randomId } from '../utils';

type Value = {
  node: HTMLElement;
  ariaHidden: string;
};

export function createAriaHider(
  containerNode: HTMLElement,
  selector: string = 'body > :not(script)'
) {
  const id = randomId();

  const rootNodes: Value[] = Array.from<HTMLElement>(document.querySelectorAll(selector)).map(
    (node) => {
      if (node?.shadowRoot?.contains(containerNode) || node.contains(containerNode)) {
        return undefined;
      }

      const ariaHidden = node.getAttribute('aria-hidden');
      const prevAriaHidden = node.getAttribute('data-hidden');
      const prevFocusId = node.getAttribute('data-focus-id');

      node.setAttribute('data-focus-id', id);

      if (ariaHidden === null || ariaHidden === 'false') {
        node.setAttribute('aria-hidden', 'true');
      } else if (!prevAriaHidden && !prevFocusId) {
        node.setAttribute('data-hidden', ariaHidden);
      }

      return {
        node,
        ariaHidden: prevAriaHidden || null,
      };
    }
  );

  return () => {
    rootNodes.forEach((item) => {
      // If node contains the target container OR the focus trap ID has changed, don't perform cleanup
      if (!item || id !== item.node.getAttribute('data-focus-id')) {
        return;
      }

      if (item.ariaHidden === null) {
        item.node.removeAttribute('aria-hidden');
      } else {
        item.node.setAttribute('aria-hidden', item.ariaHidden);
      }

      item.node.removeAttribute('data-focus-id');
      item.node.removeAttribute('data-hidden');
    });
  };
}
