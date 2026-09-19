import { render, tests } from '@mantine-tests/core';
import {
  BackgroundImage,
  BackgroundImageProps,
  BackgroundImageStylesNames,
} from './BackgroundImage';

const defaultProps: BackgroundImageProps = {
  src: 'test.png',
};

describe('@mantine/core/BackgroundImage', () => {
  tests.itSupportsSystemProps<BackgroundImageProps, BackgroundImageStylesNames>({
    component: BackgroundImage,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/BackgroundImage',
    stylesApiSelectors: ['root'],
  });

  it('renders src as background-image of the root element', () => {
    const { container } = render(<BackgroundImage src="test.png" />);
    expect(container.querySelector('.mantine-BackgroundImage-root')).toHaveStyle({
      backgroundImage: 'url(test.png)',
    });
  });
});
