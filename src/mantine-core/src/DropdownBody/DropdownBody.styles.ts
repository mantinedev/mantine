import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  dropdownBody: {
    backgroundColor: OpenColor.white,
    boxSizing: 'border-box',
    borderRadius: 4,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2)',
  },

  withPadding: {
    padding: 12,
  },
});
