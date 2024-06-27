import { useLocalStorage } from '@mantine/hooks';
import { NpmIcon, YarnIcon } from '@mantinex/dev-icons';
import { CodeHighlightTabs } from '@mantinex/shiki';
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
    key: 'script-tab',
    defaultValue: 0,
  });

  return (
    <CodeHighlightTabs
      classNames={{ root: classes.root }}
      activeTab={tab}
      onTabChange={setTab}
      code={[
        {
          fileName: 'yarn',
          code: yarnScript,
          language: 'bash',
          icon: <YarnIcon className={classes.icon} size={16} />,
        },
        {
          fileName: 'npm',
          code: npmScript,
          language: 'bash',
          icon: <NpmIcon className={classes.icon} size={16} />,
        },
      ]}
    />
  );
}
