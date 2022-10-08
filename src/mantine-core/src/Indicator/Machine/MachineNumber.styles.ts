import { createStyles, keyframes } from '@mantine/styles';

const currentScrollDownKeyframes = keyframes({
  from: {
    transform: 'translateY(-60%)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
});

const currentScrollUpKeyframes = keyframes({
  from: {
    transform: 'translateY(60%)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
});

const oldNumberScrollUpKeyframes = keyframes({
  from: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
  to: {
    transform: 'translateY(-60%)',
    opacity: 0,
  },
});

const oldNumberScrollDownKeyframes = keyframes({
  from: {
    transform: 'translateY(0%)',
    opacity: 1,
  },
  to: {
    transform: 'translateY(60%)',
    opacity: 0,
  },
});

export default createStyles(() => ({
  baseNumber: {
    height: 18,
    width: '0.6em',
    maxWidth: '0.6em',
    position: 'relative',
    display: 'inline-block',
  },
  oldNumberTop: {
    transform: 'translateY(-100%);',
  },
  oldNumberBottom: {
    transform: 'translateY(100%);',
  },
  oldNumber: {
    display: 'inline-block',
    opacity: 0,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  currentNumberTop: {
    transform: 'translateY(0%);',
  },
  currentNumber: {
    display: 'inline-block',
    opacity: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  currentNumberScrollDown: {
    animation: `${currentScrollDownKeyframes} .2s cubic-bezier(0,0,.2, 1)`,
    animationIterationCount: 1,
  },

  currentNumberScrollUp: {
    animation: `${currentScrollUpKeyframes} .2s cubic-bezier(0,0,.2, 1)`,
    animationIterationCount: 1,
  },

  oldNumberScrollUp: {
    animation: `${oldNumberScrollUpKeyframes} .2s cubic-bezier(0,0,.2, 1)`,
    animationIterationCount: 1,
  },
  oldNumberScrollDown: {
    animation: `${oldNumberScrollDownKeyframes} .2s cubic-bezier(0,0,.2, 1)`,
    animationIterationCount: 1,
  },
}));
