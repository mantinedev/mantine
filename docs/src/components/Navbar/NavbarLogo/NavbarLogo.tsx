import React from 'react';
import { Link } from 'gatsby';
import logo from '../../../images/logo.svg';
import useStyles from './NavbarLogo.styles';

export default function NavbarLogo() {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.logo}>
      <img className={classes.image} src={logo} alt="" />
    </Link>
  );
}
