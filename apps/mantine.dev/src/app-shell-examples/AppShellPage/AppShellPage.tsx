import { useRouter } from 'next/router';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { PageHead } from '@/components/PageHead';
import { APP_SHELL_EXAMPLES_DATA } from '../app-shell-examples-data';
import { APP_SHELL_EXAMPLES_COMPONENTS, AppShellExampleId } from '../examples';
import { ExamplesDrawer } from './ExamplesDrawer/ExamplesDrawer';

interface AppShellPageProps {
  exampleId: AppShellExampleId;
}

export function AppShellPage({ exampleId }: AppShellPageProps) {
  const router = useRouter();
  const state = router.query.s as string;
  const data = APP_SHELL_EXAMPLES_COMPONENTS[exampleId];
  const metaData = APP_SHELL_EXAMPLES_DATA.find((item) => item.id === exampleId);

  return (
    <>
      <PageHead
        title={metaData ? `${metaData.name} | AppShell examples` : 'AppShell examples'}
        description={metaData?.fullDescription || metaData?.description}
      />

      <div>
        {state === 'code' ? (
          <CodeHighlightTabs key={exampleId} code={data.code} getFileIcon={getCodeFileIcon} />
        ) : (
          <data.component />
        )}
        <ExamplesDrawer exampleId={exampleId} />
      </div>
    </>
  );
}
