import { useDisclosure } from '@mantine/hooks';
import { Button } from '../Button';
import { Group } from '../Group';
import { AppShell } from './AppShell';

export default { title: 'AppShell' };

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc';

const longContent = Array(30).fill(lorem).join('\n\n');

export function Usage() {
  const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure(true);
  const [navbarMobileOpened, { toggle: toggleNavbarMobile }] = useDisclosure(false);
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true);
  const [asideMobileOpened, { toggle: toggleAsideMobile }] = useDisclosure(false);
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  const [footerOpened, { toggle: toggleFooter }] = useDisclosure(true);

  return (
    <AppShell
      padding="md"
      navbar={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !navbarOpened, mobile: !navbarMobileOpened },
      }}
      aside={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !asideOpened, mobile: !asideMobileOpened },
      }}
      header={{
        height: 60,
        collapsed: !headerOpened,
      }}
      footer={{
        height: 50,
        collapsed: !footerOpened,
      }}
    >
      <AppShell.Navbar>
        <AppShell.Section>First section</AppShell.Section>
        <AppShell.Section>Second section</AppShell.Section>
        <AppShell.Section grow>Grow section</AppShell.Section>
        <AppShell.Section>Last section</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggleFooter}>Toggle footer</Button>
          <Button onClick={toggleNavbar}>Toggle navbar</Button>
          <Button onClick={toggleNavbarMobile}>Toggle navbar mobile</Button>

          <Button onClick={toggleAside}>Toggle aside</Button>
          <Button onClick={toggleAsideMobile}>Toggle aside mobile</Button>
        </Group>
        <p>{longContent}</p>
      </AppShell.Main>

      <AppShell.Aside>Aside</AppShell.Aside>

      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}

export function AltLayout() {
  const [opened, { toggle }] = useDisclosure(true);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  return (
    <AppShell
      padding="md"
      layout="alt"
      aside={{
        width: { base: 140 },
        breakpoint: 'sm',
        collapsed: { desktop: !opened, mobile: !mobileOpened },
      }}
      header={{
        height: 50,
        collapsed: !headerOpened,
      }}
      footer={{
        height: 50,
        collapsed: !headerOpened,
      }}
    >
      <AppShell.Aside>Aside</AppShell.Aside>
      <AppShell.Header>
        <Group justify="flex-end">
          <Button>Button hidden by the aside</Button>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggle}>Toggle navbar</Button>
          <Button onClick={toggleMobile}>Toggle navbar mobile</Button>
        </Group>
        <p>Other content</p>
      </AppShell.Main>

      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}

export function HeaderOnly() {
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  return (
    <AppShell
      padding="md"
      header={{
        height: 50,
        collapsed: !headerOpened,
      }}
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
        </Group>
        <p>Other content</p>
      </AppShell.Main>
    </AppShell>
  );
}

export function Disabled() {
  const [disabled, { toggle }] = useDisclosure(true);
  return (
    <AppShell
      padding="md"
      disabled={disabled}
      navbar={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: false, mobile: false },
      }}
      header={{
        height: 50,
        collapsed: false,
      }}
    >
      <AppShell.Navbar>
        <Button>Focusable element 1</Button>
        <Button>Focusable element 2</Button>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Button onClick={toggle}>Toggle disabled</Button>
      </AppShell.Main>
    </AppShell>
  );
}

export function Unstyled() {
  const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure(true);
  const [navbarMobileOpened, { toggle: toggleNavbarMobile }] = useDisclosure(false);
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true);
  const [asideMobileOpened, { toggle: toggleAsideMobile }] = useDisclosure(false);
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  const [footerOpened, { toggle: toggleFooter }] = useDisclosure(true);

  return (
    <AppShell
      padding="md"
      unstyled
      navbar={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !navbarOpened, mobile: !navbarMobileOpened },
      }}
      aside={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !asideOpened, mobile: !asideMobileOpened },
      }}
      header={{
        height: 50,
        collapsed: !headerOpened,
      }}
      footer={{
        height: 50,
        collapsed: !footerOpened,
      }}
    >
      <AppShell.Navbar>
        <AppShell.Section>First section</AppShell.Section>
        <AppShell.Section>Second section</AppShell.Section>
        <AppShell.Section grow>Grow section</AppShell.Section>
        <AppShell.Section>Last section</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggleFooter}>Toggle footer</Button>
          <Button onClick={toggleNavbar}>Toggle navbar</Button>
          <Button onClick={toggleNavbarMobile}>Toggle navbar mobile</Button>

          <Button onClick={toggleAside}>Toggle aside</Button>
          <Button onClick={toggleAsideMobile}>Toggle aside mobile</Button>
        </Group>
        <p>Other content</p>
      </AppShell.Main>

      <AppShell.Aside>Aside</AppShell.Aside>

      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}
