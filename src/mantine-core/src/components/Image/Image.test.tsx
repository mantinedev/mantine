import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { Image } from './Image';

const defaultProps = {
  src: 'test.png',
  alt: 'Test',
};

describe('@mantine/core/Image', () => {
  checkAccessibility([
    render(<Image {...defaultProps} />),
    render(<Image {...defaultProps} src={null} />),
    render(<Image {...defaultProps} src={null} withPlaceholder />),
  ]);

  itSupportsClassName(Image, defaultProps);
  itSupportsSx(Image, defaultProps);
  itSupportsMargins(Image, defaultProps);
  itSupportsOthers(Image, defaultProps);
  itSupportsStyle(Image, defaultProps);
  itSupportsRef(Image, defaultProps, HTMLDivElement);
  itSupportsStylesApi(
    Image,
    { src: null, withPlaceholder: true },
    ['root', 'placeholder'],
    'Image',
    'with placeholder'
  );
  itSupportsStylesApi(
    Image,
    { src: 'test.png', caption: 'test-caption' },
    ['root', 'image', 'caption'],
    'Image',
    'with image'
  );

  it('sets src, alt and object fit on img element', () => {
    const element = shallow(<Image src="test-src" alt="test-alt" fit="contain" />);
    expect(element.find('img').prop('src')).toBe('test-src');
    expect(element.find('img').prop('alt')).toBe('test-alt');
    expect(element.find('img').prop('style').objectFit).toBe('contain');
  });

  it('sets given width and height on img element', () => {
    const element = shallow(<Image {...defaultProps} width={478} height={207} />);
    const styles = element.find('.mantine-Image-image').prop('style');
    expect(styles.width).toBe(478);
    expect(styles.height).toBe(207);
  });

  it('renders placeholder based on withPlaceholder prop', () => {
    const withPlaceholder = shallow(<Image src={null} withPlaceholder />);
    const withoutPlaceholder = shallow(<Image src={null} withPlaceholder={false} />);

    expect(withPlaceholder.find('.mantine-Image-placeholder')).toHaveLength(1);
    expect(withoutPlaceholder.find('.mantine-Image-placeholder')).toHaveLength(0);
  });

  it('renders given caption', () => {
    const withoutCaption = shallow(<Image src="test" />);
    const withCaption = shallow(<Image src="test" caption="test-caption" />);

    expect(withoutCaption.render().find('figcaption')).toHaveLength(0);
    expect(withCaption.render().find('figcaption')).toHaveLength(1);
    expect(withCaption.render().find('figcaption').text()).toBe('test-caption');
  });

  it('renders given placeholder if image was not loaded', () => {
    const element = shallow(
      <Image {...defaultProps} withPlaceholder placeholder="test-placeholder" />
    );

    expect(element.find('.mantine-Image-placeholder').text()).toBe('test-placeholder');
  });

  it('has correct displayName', () => {
    expect(Image.displayName).toEqual('@mantine/core/Image');
  });
});
