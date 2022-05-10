import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';

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

export function checkAccessibility(elements: React.ReactElement[]) {
  expect.extend(toHaveNoViolations);

  it('has no accessibility violations', async () => {
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    for (const element of elements) {
      const { container } = render(element);
      const result = await axe(container, config);
      expect(result).toHaveNoViolations();
    }
  }, 30000);
}
