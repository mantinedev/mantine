import { createMemoStyles } from '../../theme';

export default createMemoStyles({
  root: {
    position: 'relative',
  },

  label: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});
