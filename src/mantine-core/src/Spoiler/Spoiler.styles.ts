import { createUseStyles } from 'react-jss';

export default createUseStyles({
  spoiler: {
    position: 'relative',
  },

  content: ({ transitionDuration }: { transitionDuration: number }) => ({
    overflow: 'hidden',
    transitionProperty: 'max-height',
    transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21)',
    transitionDuration: transitionDuration || 0,
  }),
});
