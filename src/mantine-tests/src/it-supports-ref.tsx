import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

const waitForComponentToPaint = async (wrapper: any) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve));
    wrapper.update();
  });
};

export function itSupportsRef(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  refType: any,
  refProp: string = 'ref'
) {
  it('supports ref', async () => {
    const ref = React.createRef<typeof refType>();
    const element = mount(<Component {...requiredProps} {...{ [refProp]: ref }} />);
    await waitForComponentToPaint(element);
    expect(ref.current instanceof refType).toBe(true);
  });
}
