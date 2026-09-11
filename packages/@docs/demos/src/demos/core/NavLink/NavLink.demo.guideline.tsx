import { FolderIcon, UsersIcon } from '@phosphor-icons/react';
import { NavLink } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FolderIcon, UsersIcon } from '@phosphor-icons/react';
import { NavLink } from '@mantine/core';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus" variant="rail"
        label="Projects"
        leftSection={<FolderIcon size={16} />}
        withGuideline
        defaultOpened
      >
        <NavLink href="#required-for-focus" variant="rail" label="Website" active />
        <NavLink href="#required-for-focus" variant="rail" label="Mobile app" />
        <NavLink
          href="#required-for-focus" variant="rail"
          label="Design system"
          withGuideline
          defaultOpened
        >
          <NavLink href="#required-for-focus" variant="rail" label="Tokens" />
          <NavLink href="#required-for-focus" variant="rail" label="Components" />
        </NavLink>
      </NavLink>
      <NavLink
        href="#required-for-focus" variant="rail"
        label="Team"
        leftSection={<UsersIcon size={16} />}
        withGuideline
      >
        <NavLink href="#required-for-focus" variant="rail" label="Members" />
        <NavLink href="#required-for-focus" variant="rail" label="Invitations" />
      </NavLink>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        variant="rail"
        label="Projects"
        leftSection={<FolderIcon size={16} />}
        withGuideline
        defaultOpened
      >
        <NavLink href="#required-for-focus" variant="rail" label="Website" active />
        <NavLink href="#required-for-focus" variant="rail" label="Mobile app" />
        <NavLink
          href="#required-for-focus"
          variant="rail"
          label="Design system"
          withGuideline
          defaultOpened
        >
          <NavLink href="#required-for-focus" variant="rail" label="Tokens" />
          <NavLink href="#required-for-focus" variant="rail" label="Components" />
        </NavLink>
      </NavLink>
      <NavLink
        href="#required-for-focus"
        variant="rail"
        label="Team"
        leftSection={<UsersIcon size={16} />}
        withGuideline
      >
        <NavLink href="#required-for-focus" variant="rail" label="Members" />
        <NavLink href="#required-for-focus" variant="rail" label="Invitations" />
      </NavLink>
    </>
  );
}

export const guideline: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 240,
  component: Demo,
  code,
};
