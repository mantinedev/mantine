import React from 'react';
import { shallow, mount, unwrapForwardedRef } from '@mantine/tests';
import { ActionIcon } from './ActionIcon';

describe('@mantine/core/ActionIcon', () => {
  it('has correct displayName', () => {
    expect(ActionIcon.displayName).toEqual('@mantine/core/ActionIcon');
  });

  it('accepts className from props', () => {
    const element = unwrapForwardedRef(shallow(<ActionIcon className="test-class-name" />));
    expect(element.hasClass('test-class-name')).toBe(true);
  });

  it('renders children', () => {
    const element = shallow(
      <ActionIcon>
        <span className="test-children">test-children</span>
      </ActionIcon>
    );
    expect(element.render().find('.test-children')).toHaveLength(1);
  });

  it('has data-mantine-composable attribute', () => {
    const element = shallow(<ActionIcon />);
    expect(element.render().attr('data-mantine-composable')).toBe('true');
  });

  it('accepts style property', () => {
    const element = shallow(
      <ActionIcon style={{ border: '1px solid red', lineHeight: 1 }} />
    ).render();

    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });

  it('support ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    mount(<ActionIcon ref={ref} />);
    expect(ref.current instanceof HTMLButtonElement).toBe(true);
  });
});
