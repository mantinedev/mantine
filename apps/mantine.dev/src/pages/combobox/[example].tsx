import type { GetStaticPaths, GetStaticProps } from 'next';
import { COMBOBOX_EXAMPLES_DATA, ComboboxExampleId, ComboboxPage } from '@/combobox-examples';

interface ComboboxExamplePageProps {
  exampleId: ComboboxExampleId;
}

export default function ComboboxExamplePage({ exampleId }: ComboboxExamplePageProps) {
  return <ComboboxPage exampleId={exampleId} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: COMBOBOX_EXAMPLES_DATA.map((item) => ({ params: { example: item.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ComboboxExamplePageProps> = async ({ params }) => ({
  props: { exampleId: params!.example as ComboboxExampleId },
});
