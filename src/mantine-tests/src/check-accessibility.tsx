import { ShallowWrapper } from 'enzyme';
import { axe, toHaveNoViolations } from 'jest-axe';

export function checkAccessibility(elements: ShallowWrapper[]) {
  expect.extend(toHaveNoViolations);

  it('has no accessibility violations', () =>
    Promise.all(
      elements.map((element) =>
        axe(element.render().html(), { rules: { region: { enabled: false } } })
      )
    ).then((results) => {
      results.forEach((result) => {
        expect(result).toHaveNoViolations();
      });
    }));
}
