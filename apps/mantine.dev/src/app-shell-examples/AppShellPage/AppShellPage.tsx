import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { CodeHighlightTabs } from '@mantinex/shiki';
import { PageHead } from '@/components/PageHead';
import { APP_SHELL_EXAMPLES_COMPONENTS } from '../examples';
import { ExamplesDrawer } from './ExamplesDrawer/ExamplesDrawer';

export function AppShellPage() {
  const router = useRouter();
  const exampleId = router.query.e as string;
  const state = router.query.s as string;

  useEffect(() => {
    if (exampleId && !(exampleId in APP_SHELL_EXAMPLES_COMPONENTS)) {
      router.replace('/app-shell?e=BasicAppShell');
    }
  }, [exampleId]);

  if (!(exampleId in APP_SHELL_EXAMPLES_COMPONENTS)) {
    return <ExamplesDrawer />;
  }
  const data =
    APP_SHELL_EXAMPLES_COMPONENTS[exampleId as keyof typeof APP_SHELL_EXAMPLES_COMPONENTS];

  return (
    <>
      <PageHead
        title="AppShell examples"
        description="10+ examples of using Mantine AppShell component"
      />

      <div>
        {state === 'code' ? (
          <CodeHighlightTabs code={data.code} getFileIcon={getCodeFileIcon} />
        ) : (
          <data.component />
        )}
        <ExamplesDrawer />
      </div>
    </>
  );
}
