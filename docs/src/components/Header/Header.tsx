import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.svg';
import useStyles from './Header.styles';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div>
        <Link to="/" className={classes.logo}>
          <img className={classes.image} src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
}
