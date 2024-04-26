import { axe as Axe, toHaveNoViolations } from 'jest-axe';
import { renderWithAct } from './render';

const config = {
  rules: {
    region: {
      enabled: false,
    },

    'autocomplete-valid': {
      enabled: false,
    },
  },
};

export function axe(elements: React.ReactElement[]) {
  expect.extend(toHaveNoViolations);

  it('has no accessibility violations', async () => {
    for (const element of elements) {
      const { container } = await renderWithAct(element);
      const result = await Axe(container, config);
      expect(result).toHaveNoViolations();
    }
  }, 30000);
}
