import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  errorNotification: {
    width: '100%',
  },

  title: {
    backgroundColor: OpenColor.red[5],
    color: `${OpenColor.white} !important`,
    textShadow: `1px 1px 0 ${OpenColor.red[9]}`,
    textAlign: 'center',
    height: 34,
    lineHeight: '34px',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },

  body: {
    backgroundColor: OpenColor.red[0],
    padding: 15,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    lineHeight: 1.4,

    '&:only-child': {
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
    },
  },

  error: {
    marginTop: 5,
  },
});
