import { applyHoverStyleForTouch } from './apply-hover-style-for-touch';

const testHoverStyle = {
  backgroundColor: 'red',
};

const testReturnStyle = {
  backgroundColor: 'blue',
  '@media (hover: hover)': {
    '&:hover': testHoverStyle,
  },
  '@media (hover: none)': {
    '&:active': testHoverStyle,
  },
};

describe('@mantine/core/utils/apply-hover-style', () => {
  it('return style with hover', () => {
    expect({
      backgroundColor: 'blue',
      ...applyHoverStyleForTouch(testHoverStyle),
    }).toStrictEqual(testReturnStyle);
  });
});
