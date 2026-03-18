import { useDisclosure } from '@mantine/hooks';
import { Box } from '../../core';
import { Button } from '../Button';
import { Group } from '../Group';
import { Modal } from '../Modal';
import { ScrollArea } from '../ScrollArea';
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
  const [modalOpened, { toggle: toggleModal }] = useDisclosure(false);

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
      <AppShell.Header>
        <Group justify="center">Header</Group>
      </AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggleFooter}>Toggle footer</Button>
          <Button onClick={toggleNavbar}>Toggle navbar</Button>
          <Button onClick={toggleNavbarMobile}>Toggle navbar mobile</Button>

          <Button onClick={toggleAside}>Toggle aside</Button>
          <Button onClick={toggleAsideMobile}>Toggle aside mobile</Button>

          <Button onClick={toggleModal}>Open modal</Button>
        </Group>
        <p>{longContent}</p>

        <Modal opened={modalOpened} onClose={toggleModal} title="Modal inside AppShell">
          <p>Dialog Content</p>
        </Modal>
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
  const [modalOpened, { toggle: toggleModal }] = useDisclosure(false);

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
        <Group justify="space-between">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Button hidden by the aside</Button>
        </Group>
      </AppShell.Header>
      <AppShell.Main style={{ height: '200vh' }}>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggle}>Toggle navbar</Button>
          <Button onClick={toggleMobile}>Toggle navbar mobile</Button>
          <Button onClick={toggleModal}>Open modal</Button>
        </Group>
        <p>Other content</p>

        <Modal opened={modalOpened} onClose={toggleModal} title="Modal inside AppShell">
          <p>Dialog Content</p>
        </Modal>
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

export function StaticMode() {
  const [navbarOpened, { toggle }] = useDisclosure(true);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true);
  const [asideMobileOpened, { toggle: toggleAsideMobile }] = useDisclosure(false);

  return (
    <AppShell
      mode="static"
      padding="md"
      navbar={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !navbarOpened, mobile: !mobileOpened },
      }}
      aside={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !asideOpened, mobile: !asideMobileOpened },
      }}
      header={{
        height: 60,
      }}
      footer={{
        height: 50,
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          Header (static)
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <p>Navbar (static)</p>
        <p>
          Scroll the main content to see the static behavior. Unlike fixed mode, these sections are
          part of the document flow.
        </p>

        <Group mb="md">
          <Button onClick={toggle}>Toggle navbar</Button>
          <Button onClick={toggleMobile}>Toggle navbar mobile</Button>
          <Button onClick={toggleAside}>Toggle aside</Button>
          <Button onClick={toggleAsideMobile}>Toggle aside mobile</Button>
        </Group>
      </AppShell.Navbar>
      <AppShell.Main>
        <Group mb="md">
          <Button onClick={toggle}>Toggle navbar</Button>
          <Button onClick={toggleMobile}>Toggle navbar mobile</Button>
          <Button onClick={toggleAside}>Toggle aside</Button>
          <Button onClick={toggleAsideMobile}>Toggle aside mobile</Button>
        </Group>
        <p>{longContent}</p>
      </AppShell.Main>
      <AppShell.Aside>
        <p>Aside (static)</p>
      </AppShell.Aside>
      <AppShell.Footer>
        <Group h="100%" px="md">
          Footer (static)
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}

export function StaticInsideFixed() {
  return (
    <AppShell
      mode="fixed"
      padding="0px"
      zIndex={10}
      navbar={{
        width: { base: 200, md: 260 },
        breakpoint: 'sm',
      }}
      aside={{
        width: { base: 200, md: 260 },
        breakpoint: 'sm',
      }}
      header={{
        height: 60,
      }}
      footer={{
        height: 50,
      }}
    >
      <AppShell.Navbar p="md">Outer navbar (fixed)</AppShell.Navbar>
      <AppShell.Aside p="md">Outer aside (fixed)</AppShell.Aside>
      <AppShell.Header>
        <Group h="100%" px="md">
          Outer header (fixed)
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <AppShell
          mode="static"
          zIndex={1}
          padding={0}
          navbar={{
            width: { base: 180, md: 220 },
            breakpoint: 'sm',
          }}
          aside={{
            width: { base: 180, md: 220 },
            breakpoint: 'sm',
          }}
          header={{ height: 50 }}
          footer={{ height: 50 }}
        >
          <AppShell.Navbar p="md">Inner navbar (static)</AppShell.Navbar>
          <AppShell.Aside p="md">Inner aside (static)</AppShell.Aside>
          <AppShell.Header>
            <Group h="100%" px="md">
              Inner header (static)
            </Group>
          </AppShell.Header>
          <AppShell.Main h="calc(100dvh - 220px)">
            <ScrollArea h="calc(100dvh - 220px - var(--app-shell-padding, 0px))">
              <Box p="md">
                <p>Inner AppShell with static mode inside outer AppShell with fixed mode.</p>
                <p>{longContent}</p>
              </Box>
            </ScrollArea>
          </AppShell.Main>

          <AppShell.Footer>
            <Group h="100%" px="md">
              Inner footer (static)
            </Group>
          </AppShell.Footer>
        </AppShell>
      </AppShell.Main>
      <AppShell.Footer>
        <Group h="100%" px="md">
          Outer footer (fixed)
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
}
