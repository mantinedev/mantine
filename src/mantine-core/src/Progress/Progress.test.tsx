import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
} from '@mantine/tests';
import { Progress } from './Progress';

describe('@mantine/core/Progress', () => {
  itSupportsClassName(Progress, { value: 80 });
  itSupportsStyle(Progress, { value: 80 });
  itSupportsOthers(Progress, { value: 80 });
  checkAccessibility([mount(<Progress value={80} />)]);

  it('has correct displayName', () => {
    expect(Progress.displayName).toEqual('@mantine/core/Progress');
  });

  it('passes value prop to progressbar', () => {
    const element = shallow(<Progress value={84} />);
    expect(element.render().find('[role=progressbar]').prop('style').width).toBe('84%');
  });
});
