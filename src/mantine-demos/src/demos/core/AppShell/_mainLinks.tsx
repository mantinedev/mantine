import React from 'react';
import { IconGitPullRequest, IconAlertCircle, IconMessages, IconDatabase } from '@tabler/icons';
import { ThemeIcon, NavLink } from '@mantine/core';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <NavLink
      label={label}
      icon={
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
       }
      />
  );
}

const data = [
  { icon: <IconGitPullRequest size={16} />, color: 'blue', label: 'Pull Requests' },
  { icon: <IconAlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  { icon: <IconMessages size={16} />, color: 'violet', label: 'Discussions' },
  { icon: <IconDatabase size={16} />, color: 'grape', label: 'Databases' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
