import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Image } from './Image';

const defaultProps = {
  src: 'test.png',
  alt: 'Test',
};

describe('@mantine/core/Image', () => {
  checkAccessibility([
    mount(<Image {...defaultProps} />),
    mount(<Image {...defaultProps} src={null} />),
    mount(<Image {...defaultProps} src={null} withPlaceholder />),
  ]);

  itSupportsClassName(Image, defaultProps);
  itSupportsOthers(Image, defaultProps);
  itSupportsStyle(Image, defaultProps);
  itSupportsRef(Image, defaultProps, HTMLImageElement, 'imageRef');
  itSupportsStylesApi(
    Image,
    { src: null, withPlaceholder: true },
    ['root', 'placeholder'],
    'image',
    'with placeholder'
  );
  itSupportsStylesApi(Image, { src: 'test.png' }, ['root', 'image'], 'image', 'with image');

  it('has correct displayName', () => {
    expect(Image.displayName).toEqual('@mantine/core/Image');
  });

  it('sets src, alt and object fit on img element', () => {
    const element = shallow(<Image src="test-src" alt="test-alt" fit="contain" />);
    expect(element.find('img').prop('src')).toBe('test-src');
    expect(element.find('img').prop('alt')).toBe('test-alt');
    expect(element.find('img').prop('style').objectFit).toBe('contain');
  });

  it('sets given width and height on wrapper element', () => {
    const element = shallow(<Image {...defaultProps} width={478} height={207} />);
    const styles = element.find('.mantine-image-root').prop('style');
    expect(styles.width).toBe(478);
    expect(styles.height).toBe(207);
  });

  it('renders placeholder based on withPlaceholder prop', () => {
    const withPlaceholder = shallow(<Image src={null} withPlaceholder />);
    const withoutPlaceholder = shallow(<Image src={null} withPlaceholder={false} />);

    expect(withPlaceholder.find('.mantine-image-placeholder')).toHaveLength(1);
    expect(withoutPlaceholder.find('.mantine-image-placeholder')).toHaveLength(0);
  });

  it('renders given placeholder if image was not loaded', () => {
    const element = shallow(
      <Image {...defaultProps} withPlaceholder placeholder="test-placeholder" />
    );

    expect(element.find('.mantine-image-placeholder').text()).toBe('test-placeholder');
  });
});
