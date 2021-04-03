import React from 'react';
import { shallow, mount } from 'enzyme';
import { itSupportsClassName, itSupportsStyle, itSupportsOthers } from '@mantine/tests';
import { Loader } from '../Loader/Loader';
import { Overlay } from '../Overlay/Overlay';
import { LoadingOverlay } from './LoadingOverlay';

describe('@mantine/core/LoadingOverlay', () => {
  itSupportsClassName(LoadingOverlay, { visible: true });
  itSupportsStyle(LoadingOverlay, { visible: true });
  itSupportsOthers(LoadingOverlay, { visible: true });

  it('has correct displayName', () => {
    expect(LoadingOverlay.displayName).toEqual('@mantine/core/LoadingOverlay');
  });

  it('does not render anything if visible is false', () => {
    const element = shallow(<LoadingOverlay visible={false} />);
    expect(element.render().html()).toBe(null);
  });

  it('passes loaderProps to Loader component', () => {
    const element = mount(<LoadingOverlay visible loaderProps={{ size: 91, color: 'grape' }} />);
    expect(element.find(Loader).prop('size')).toBe(91);
    expect(element.find(Loader).prop('color')).toBe('grape');
  });

  it('passes opacity and color to Overlay component', () => {
    const element = mount(<LoadingOverlay visible overlayOpacity={0.99} overlayColor="#cecece" />);
    expect(element.find(Overlay).prop('opacity')).toBe(0.99);
    expect(element.find(Overlay).prop('color')).toBe('#cecece');
  });

  it('sets correct z-index based on zIndex prop', () => {
    const element = mount(<LoadingOverlay visible zIndex={347} />);
    expect(element.find(Loader).prop('style').zIndex).toBe(348);
    expect(element.find(Overlay).prop('zIndex')).toBe(347);
  });
});
