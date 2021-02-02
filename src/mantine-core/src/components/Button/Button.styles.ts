import { createUseStyles } from 'react-jss';

export default createUseStyles({
  button: {
    color: (props) => {
      console.log(props);
      return 'white';
    },
  },
});
