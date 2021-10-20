import React from 'react';
import { MantineSize, MantineNumberSize } from '@mantine/styles';
import { useUncontrolled } from '@mantine/hooks';
import { Collapse } from '../../../Collapse';
import { NavbarLink } from '../NavbarLink/NavbarLink';
import { ChevronIcon } from './ChevronIcon';
import useStyles from './NavbarLinksGroup.styles';

export interface NavbarLinksGroupProps {
  children: React.ReactNode;
  opened?: boolean;
  initiallyOpened?: boolean;
  onChange?(opened: boolean): void;
  icon?: React.ReactNode;
  getRightSection?(opened: boolean): React.ReactNode;
  label: React.ReactNode;
  size?: MantineSize;
  transitionDuration?: number;
  offset?: MantineNumberSize;
}

export function NavbarLinksGroup({
  children,
  opened,
  initiallyOpened,
  onChange,
  icon,
  getRightSection,
  transitionDuration = 250,
  size,
  label,
  offset = 'xl',
}: NavbarLinksGroupProps) {
  const { classes, cx } = useStyles({ offset, transitionDuration });
  const [_opened, handleChange] = useUncontrolled({
    value: opened,
    defaultValue: initiallyOpened,
    finalValue: true,
    rule: (val) => typeof val === 'boolean',
    onChange,
  });

  const filteredLinks = React.Children.toArray(children).filter(
    (item: any) => item.type === NavbarLink || item.type === NavbarLinksGroup
  ) as React.ReactElement[];

  const links = filteredLinks.map((link, index) => (
    <div key={index} className={classes.linksGroupLinkWrapper}>
      {React.cloneElement(link, { className: cx(link.props.className, classes.linksGroupLink) })}
    </div>
  ));

  const defaultRightSection = (
    <div
      className={classes.linksGroupChevron}
      style={{ transform: _opened ? 'rotate(0deg)' : 'rotate(-90deg)' }}
    >
      <ChevronIcon width={12} height={12} />
    </div>
  );

  const rightSection =
    typeof getRightSection === 'function' ? getRightSection(_opened) : defaultRightSection;

  return (
    <div>
      <NavbarLink
        component="button"
        icon={icon}
        rightSection={rightSection}
        size={size}
        onClick={() => handleChange(!_opened)}
      >
        {label}
      </NavbarLink>
      <Collapse in={_opened} transitionDuration={transitionDuration}>
        <div className={classes.linksGroup}>{links}</div>
      </Collapse>
    </div>
  );
}
