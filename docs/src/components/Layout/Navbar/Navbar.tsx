import React from 'react';
import cx from 'clsx';
import { Scrollbars } from 'react-custom-scrollbars';
import { useScrollLock, useMediaQuery } from '@mantine/hooks';
import NavbarMainLink from './NavbarMainLink/NavbarMainLink';
import NavbarDocsCategory from './NavbarDocsCategory/NavbarDocsCategory';
import { DocsData } from '../get-docs-data';
import mainLinks from './main-links';
import useStyles, { NAVBAR_BREAKPOINT } from './Navbar.styles';

interface NavbarProps {
  data: DocsData;
  opened: boolean;
  onClose(): void;
}

export default function Navbar({ data, opened, onClose }: NavbarProps) {
  const classes = useStyles();
  const isMobile = useMediaQuery(`(max-width: ${NAVBAR_BREAKPOINT}px)`);

  useScrollLock(isMobile && opened);

  const main = mainLinks.map((item) => (
    <NavbarMainLink
      key={item.to}
      to={item.to}
      color={item.theme}
      icon={<item.icon style={{ height: 18, width: 18 }} />}
      onClick={onClose}
    >
      {item.label}
    </NavbarMainLink>
  ));

  const docs = Object.keys(data).map((key) => (
    <NavbarDocsCategory links={data[key]} category={key} key={key} onLinkClick={onClose} />
  ));

  return (
    <nav className={cx(classes.navbar, { [classes.opened]: opened })}>
      <Scrollbars style={{ height: '100vh' }}>
        <div className={classes.body}>
          {main}
          <div className={classes.docs}>{docs}</div>
        </div>
      </Scrollbars>
    </nav>
  );
}
