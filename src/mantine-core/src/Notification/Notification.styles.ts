import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
  notification: {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '1px 1px 3px 1px rgba(0,0,0,.14)',
    paddingLeft: 22,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    backgroundColor: OpenColor.white,

    '&::before': {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: 6,
      top: 4,
      bottom: 4,
      left: 4,
      borderRadius: 4,
    },
  },

  withIcon: {
    paddingLeft: 10,
    '&::before': {
      display: 'none',
    },
  },

  body: {
    flex: 1,
    marginRight: 10,
  },

  icon: {
    boxSizing: 'border-box',
    marginRight: 12,
    width: 28,
    height: 28,
    borderRadius: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: OpenColor.white,
  },

  title: {
    lineHeight: 1.4,
    marginBottom: 2,
    fontWeight: 500,
  },

  description: {
    color: OpenColor.gray[6],
    lineHeight: 1.4,

    '&:only-child': {
      color: OpenColor.gray[9],
    },
  },

  muted: {
    '& $icon': {
      backgroundColor: OpenColor.gray[2],
      color: OpenColor.gray[6],
    },

    '&::before': {
      backgroundColor: OpenColor.gray[3],
    },
  },

  success: {
    '& $icon': {
      backgroundColor: OpenColor.teal[6],
    },

    '&::before': {
      backgroundColor: OpenColor.teal[6],
    },
  },

  danger: {
    '& $icon': {
      backgroundColor: OpenColor.red[6],
    },

    '&::before': {
      backgroundColor: OpenColor.red[6],
    },
  },

  warning: {
    '& $icon': {
      backgroundColor: OpenColor.yellow[6],
    },

    '&::before': {
      backgroundColor: OpenColor.yellow[6],
    },
  },

  primary: {
    '& $icon': {
      backgroundColor: OpenColor.blue[6],
    },

    '&::before': {
      backgroundColor: OpenColor.blue[6],
    },
  },
});
