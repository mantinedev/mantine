import { forwardRef } from 'react';
import { isElement } from './is-element';

const TestComponent = () => <div />;
const TextRefComponent = forwardRef<HTMLDivElement>((_props, ref) => <div ref={ref} />);
TextRefComponent.displayName = 'TextRefComponent';

describe('@mantine/utils/is-element', () => {
  it('correctly detects elements', () => {
    expect(isElement(<div>Element</div>)).toBe(true);
    expect(isElement(<TestComponent />)).toBe(true);
    expect(isElement(<TextRefComponent />)).toBe(true);
  });

  it('correctly detects jsx parts that are not elements', () => {
    expect(isElement(<>Element</>)).toBe(false);
    expect(isElement('string')).toBe(false);
    expect(isElement(2)).toBe(false);
    expect(isElement(null)).toBe(false);
    expect(isElement(undefined)).toBe(false);
    expect(isElement(true)).toBe(false);
    expect(isElement([<div key="1">Element</div>])).toBe(false);
  });
});
