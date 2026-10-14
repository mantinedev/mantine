import type { GetStaticPaths, GetStaticProps } from 'next';
import { APP_SHELL_EXAMPLES_DATA, AppShellExampleId, AppShellPage } from '@/app-shell-examples';

interface AppShellExamplePageProps {
  exampleId: AppShellExampleId;
}

export default function AppShellExamplePage({ exampleId }: AppShellExamplePageProps) {
  return <AppShellPage exampleId={exampleId} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: APP_SHELL_EXAMPLES_DATA.map((item) => ({ params: { example: item.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<AppShellExamplePageProps> = async ({ params }) => ({
  props: { exampleId: params!.example as AppShellExampleId },
});
