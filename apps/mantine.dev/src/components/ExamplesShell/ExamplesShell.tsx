import { useEffect, useState } from 'react';
import { useDirection } from '@mantine/core';
import { Shell } from '@/components/Shell';
import { ExamplesNavbar } from './ExamplesNavbar/ExamplesNavbar';
import type { ExampleItem, ExamplesGroup } from './types';
import classes from './ExamplesShell.module.css';

interface ExamplesShellProps {
  /** Examples displayed in the navbar */
  data: ExampleItem[];

  /** Navbar groups, in display order */
  groups: ExamplesGroup[];

  /** Page path used for example links, for example `/combobox` */
  basePath: string;

  /** Id of the example displayed on the page */
  activeId: string;

  children: React.ReactNode;
}

export function ExamplesShell({ data, groups, basePath, activeId, children }: ExamplesShellProps) {
  const [opened, setNavbarOpened] = useState(false);
  const { setDirection } = useDirection();

  useEffect(() => {
    setDirection('ltr');
  }, []);

  return (
    <div className={classes.root}>
      <Shell
        withNavbar={false}
        withMobileNavbar={false}
        withNav={false}
        navbarOpened={opened}
        onNavbarOpenedChange={setNavbarOpened}
        headerControlsProps={{ withDirectionToggle: false }}
        fluid
      >
        <ExamplesNavbar
          data={data}
          groups={groups}
          basePath={basePath}
          activeId={activeId}
          opened={opened}
          onClose={() => setNavbarOpened(false)}
        />
        <div className={classes.main}>{children}</div>
      </Shell>
    </div>
  );
}
