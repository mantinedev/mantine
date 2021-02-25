import React from 'react';
import { shallow, checkAccessibility } from '@mantine/tests';
import { Progress } from './Progress';

describe('@mantine/core/Progress', () => {
  checkAccessibility([shallow(<Progress value={80} />)]);

  it('has correct displayName', () => {
    expect(Progress.displayName).toEqual('@mantine/core/Progress');
  });

  it('passes value prop to progressbar', () => {
    const element = shallow(<Progress value={84} />);
    expect(element.render().find('[role=progressbar]').prop('style').width).toBe('84%');
  });

  it('accepts className from props', () => {
    const element = shallow(<Progress value={80} className="test-class-name" />);
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });

  it('accepts style property', () => {
    const element = shallow(
      <Progress value={80} style={{ border: '1px solid red', lineHeight: 1 }} />
    ).render();

    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });

  it('support ...others props', () => {
    const element = shallow(<Progress value={80} data-other-attribute="test" />);
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });
});
