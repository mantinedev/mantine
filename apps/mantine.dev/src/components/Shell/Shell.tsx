import { Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderControls } from '@mantinex/mantine-header';
import { DocsHeader } from './DocsHeader/DocsHeader';
import { DocsMobileNavbar } from './DocsNavbar/DocsMobileNavbar';
import { DocsNavbar } from './DocsNavbar/DocsNavbar';
import { ShellProvider } from './Shell.context';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
  fluid?: boolean;
  withNav?: boolean;
  withNavbar?: boolean;
  withMobileNavbar?: boolean;
  navbarOpened?: boolean;
  onNavbarOpenedChange?: (opened: boolean) => void;
  headerControlsProps?: Partial<React.ComponentProps<typeof HeaderControls>>;
}

export function Shell({
  children,
  withNav = true,
  withNavbar = true,
  withMobileNavbar = true,
  fluid = false,
  navbarOpened,
  onNavbarOpenedChange,
  headerControlsProps,
}: ShellProps) {
  const [mobileNavbarOpened, mobileNavbarHandlers] = useDisclosure(false, {
    onClose: () => onNavbarOpenedChange?.(false),
    onOpen: () => onNavbarOpenedChange?.(true),
  });

  return (
    <ShellProvider
      value={{
        navbarOpened: typeof navbarOpened === 'boolean' ? navbarOpened : mobileNavbarOpened,
        toggleNavbar: mobileNavbarHandlers.toggle,
        closeNavbar: mobileNavbarHandlers.close,
      }}
    >
      <div>
        <DocsHeader headerControlsProps={headerControlsProps} withNav={withNav} />
        {withNavbar ? (
          <Container size={1440} fluid={fluid} px={fluid ? 0 : undefined}>
            <div className={classes.inner}>
              {withMobileNavbar && mobileNavbarOpened && <DocsMobileNavbar />}
              <DocsNavbar />
              <main className={classes.content}>{children}</main>
            </div>
          </Container>
        ) : (
          children
        )}
      </div>
    </ShellProvider>
  );
}
