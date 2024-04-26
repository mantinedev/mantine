import { QuestionsList } from '@/components/QuestionsList';
import { MDX_DATA } from '@/mdx';

export default function IndexPage() {
  return <QuestionsList data={MDX_DATA} />;
}
