import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Progress } from './Progress';

const defaultProps = { value: 80 };

describe('@mantine/core/Progress', () => {
  itSupportsClassName(Progress, defaultProps);
  itSupportsStyle(Progress, defaultProps);
  itSupportsMargins(Progress, defaultProps);
  itSupportsOthers(Progress, defaultProps);
  itSupportsSx(Progress, defaultProps);
  itSupportsRef(Progress, defaultProps, HTMLDivElement);
  checkAccessibility([render(<Progress value={80} aria-label="test-progress" />)]);

  it('has correct displayName', () => {
    expect(Progress.displayName).toEqual('@mantine/core/Progress');
  });

  it('renders given amount of sections', () => {
    const element = shallow(
      <Progress
        value={84}
        sections={[
          { value: 40, color: 'cyan' },
          { value: 20, color: 'red' },
          { value: 15, color: 'lime' },
        ]}
      />
    );

    expect(element.render().find('.mantine-Progress-bar')).toHaveLength(3);
  });

  it('passes value prop to progressbar', () => {
    const element = shallow(<Progress value={84} />);
    expect(element.render().find('[role=progressbar]').prop('style').width).toBe('84%');
  });

  it('has correct aria attributes', () => {
    const element = shallow(<Progress value={84} />);
    expect(element.render().find('[role=progressbar]').attr('aria-valuenow')).toBe('84');
    expect(element.render().find('[role=progressbar]').attr('aria-valuemin')).toBe('0');
    expect(element.render().find('[role=progressbar]').attr('aria-valuemax')).toBe('100');
  });
});
