import { ReactWrapper } from 'enzyme';
import { axe, toHaveNoViolations } from 'jest-axe';

export function checkAccessibility(elements: ReactWrapper[]) {
  expect.extend(toHaveNoViolations);

  it('has no accessibility violations', () =>
    Promise.all(
      elements.map((element) =>
        axe(element.getDOMNode(), { rules: { region: { enabled: false } } })
      )
    ).then((results) => {
      results.forEach((result) => {
        expect(result).toHaveNoViolations();
      });
    }));
}
