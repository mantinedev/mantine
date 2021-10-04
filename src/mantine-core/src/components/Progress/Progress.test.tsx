import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { Progress } from './Progress';
import { Progress as ProgressStylesApi } from './styles.api';

const defaultProps = { value: 80 };

describe('@mantine/core/Progress', () => {
  itSupportsClassName(Progress, defaultProps);
  itSupportsStyle(Progress, defaultProps);
  itSupportsMargins(Progress, defaultProps);
  itSupportsOthers(Progress, defaultProps);
  itSupportsRef(Progress, defaultProps, HTMLDivElement);
  checkAccessibility([mount(<Progress value={80} aria-label="test-progress" />)]);
  itSupportsStylesApi(Progress, defaultProps, Object.keys(ProgressStylesApi), 'progress');

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

    expect(element.render().find('.mantine-progress-bar')).toHaveLength(3);
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
