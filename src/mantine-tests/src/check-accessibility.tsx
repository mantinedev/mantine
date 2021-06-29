import { ReactWrapper } from 'enzyme';
import { axe, toHaveNoViolations } from 'jest-axe';

const config = {
  rules: {
    region: {
      enabled: false,
    },
  },
};

export function checkAccessibility(elements: ReactWrapper[]) {
  expect.extend(toHaveNoViolations);

  it('has no accessibility violations', async () => {
    // it does not work any other way
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    for (const element of elements) {
      const result = await axe(element.getDOMNode(), config);
      expect(result).toHaveNoViolations();
    }
    /* eslint-enable no-restricted-syntax, no-await-in-loop */
  }, 30000);
}
