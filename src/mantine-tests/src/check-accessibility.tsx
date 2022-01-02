import { axe, toHaveNoViolations } from 'jest-axe';
import { RenderResult } from '@testing-library/react';

const config = {
  rules: {
    region: {
      enabled: false,
    },
  },
};

export function checkAccessibility(elements: RenderResult[]) {
  expect.extend(toHaveNoViolations);

  it('has no accessibility violations', async () => {
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    for (const element of elements) {
      const result = await axe(element.container, config);
      expect(result).toHaveNoViolations();
    }
  }, 30000);
}
