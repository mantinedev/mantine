import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Transition } from '../Transition/Transition';
import { Tooltip } from './Tooltip';
import { Tooltip as TooltipStylesApi } from './styles.api';

const defaultProps = {
  opened: true,
  withArrow: true,
  label: 'tooltip',
  children: 'tooltip',
};

describe('@mantine/core/Tooltip', () => {
  checkAccessibility([
    mount(<Tooltip {...defaultProps} />),
    mount(
      <Tooltip opened label="tooltip" tooltipId="button-tooltip">
        <button type="button" aria-describedby="button-tooltip">
          button
        </button>
      </Tooltip>
    ),
    mount(<Tooltip {...defaultProps} opened={false} />),
  ]);

  itRendersChildren(Tooltip, defaultProps);
  itSupportsClassName(Tooltip, defaultProps);
  itSupportsOthers(Tooltip, defaultProps);
  itSupportsStyle(Tooltip, defaultProps);
  itSupportsRef(Tooltip, defaultProps, HTMLDivElement, 'tooltipRef');
  itSupportsStylesApi(Tooltip, defaultProps, Object.keys(TooltipStylesApi), 'tooltip');

  it('renders given label on inner tooltip', () => {
    const element = shallow(<Tooltip {...defaultProps} label="test-label" />);
    expect(element.render().find('.mantine-tooltip-body').text()).toBe('test-label');
  });

  it('sets pointer-events property based on allowPointerEvents prop', () => {
    const allowed = shallow(<Tooltip {...defaultProps} allowPointerEvents />);
    const notAllowed = shallow(<Tooltip {...defaultProps} allowPointerEvents={false} />);

    expect(allowed.render().find('.mantine-tooltip-tooltip').css('pointer-events')).toBe('all');
    expect(notAllowed.render().find('.mantine-tooltip-tooltip').css('pointer-events')).toBe('none');
  });

  it('sets given width and z-index on tooltip body', () => {
    const element = shallow(<Tooltip {...defaultProps} width={245} zIndex={986} />);
    expect(element.render().find('.mantine-tooltip-tooltip').css('width')).toBe('245px');
    expect(element.render().find('.mantine-tooltip-tooltip').css('z-index')).toBe('986');
  });

  it('sets white-space on tooltip inner based on wrapLines prop', () => {
    const wrapped = shallow(<Tooltip {...defaultProps} wrapLines />);
    const notWrapped = shallow(<Tooltip {...defaultProps} wrapLines={false} />);

    expect(wrapped.render().find('.mantine-tooltip-body').css('white-space')).toBe('normal');
    expect(notWrapped.render().find('.mantine-tooltip-body').css('white-space')).toBe('nowrap');
  });

  it('passes transition, duration and timingFunction to Transition component', () => {
    const element = shallow(
      <Tooltip
        {...defaultProps}
        transition="fade"
        transitionDuration={455}
        transitionTimingFunction="ease"
      />
    );
    const transition = element.find(Transition);
    expect(transition.prop('duration')).toBe(455);
    expect(transition.prop('transition')).toBe('fade');
    expect(transition.prop('timingFunction')).toBe('ease');
  });

  it('has correct displayName', () => {
    expect(Tooltip.displayName).toEqual('@mantine/core/Tooltip');
  });
});
