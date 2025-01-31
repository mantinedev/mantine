import { CodeHighlight } from '@mantine/code-highlight';
import { Group, Tabs } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NpmIcon, YarnIcon } from '@mantinex/dev-icons';
import classes from './MdxNpmScript.module.css';

interface MdxNpmScriptProps {
  yarnScript: string;
  npmScript: string;
}

export function MdxNpmScript({ yarnScript, npmScript }: MdxNpmScriptProps) {
  // Hello good sir/lady. Seems like you are interested in adding pnpm here.
  // Please do not do that, this contribution is not welcome.
  // https://github.com/mantinedev/mantine/pulls?q=is%3Apr+pnpm

  const [tab, setTab] = useLocalStorage({
    key: 'script-tab-value',
    defaultValue: 'yarn',
  });

  return (
    <Tabs value={tab} onChange={(val) => setTab(val!)} variant="pills" classNames={classes}>
      <Tabs.List>
        <Tabs.Tab value="yarn">
          <Group gap={5}>
            <YarnIcon className={classes.icon} size={16} />
            <span>yarn</span>
          </Group>
        </Tabs.Tab>
        <Tabs.Tab value="npm">
          <Group gap={5}>
            <NpmIcon className={classes.icon} size={16} />
            <span>npm</span>
          </Group>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="yarn">
        <CodeHighlight
          className={classes.code}
          code={yarnScript}
          language="bash"
          data-without-radius
        />
      </Tabs.Panel>

      <Tabs.Panel value="npm">
        <CodeHighlight className={classes.code} code={npmScript} language="bash" />
      </Tabs.Panel>
    </Tabs>
  );
}
