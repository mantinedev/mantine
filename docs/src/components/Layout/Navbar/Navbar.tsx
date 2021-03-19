import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import NavbarMainLink from './NavbarMainLink/NavbarMainLink';
import NavbarDocsCategory from './NavbarDocsCategory/NavbarDocsCategory';
import getDocsData from '../get-docs-data';
import mainLinks from './main-links';
import useStyles from './Navbar.styles';

interface NavbarProps {
  data: ReturnType<typeof getDocsData>;
}

export default function Navbar({ data }: NavbarProps) {
  const classes = useStyles();

  const main = mainLinks.map((item) => (
    <NavbarMainLink
      key={item.to}
      to={item.to}
      color={item.theme}
      icon={<item.icon style={{ height: 18, width: 18 }} />}
    >
      {item.label}
    </NavbarMainLink>
  ));

  const docs = Object.keys(data).map((key) => (
    <NavbarDocsCategory links={data[key]} category={key} key={key} />
  ));

  return (
    <nav className={classes.navbar}>
      <Scrollbars style={{ height: '100vh' }}>
        <div className={classes.body}>
          {main}
          <div className={classes.docs}>{docs}</div>
        </div>
      </Scrollbars>
    </nav>
  );
}
