import Link from 'next/link';
import { Divider, Highlight } from '@mantine/core';
import { Frontmatter } from '@/types';
import classes from './QuestionsListGroup.module.css';

export interface QuestionsListGroupProps {
  search: string;
  category: string;
  questions: Frontmatter[];
}

export function QuestionsListGroup({ category, questions, search }: QuestionsListGroupProps) {
  const items = questions.map((question) => (
    <Link key={question.slug} href={`/q/${question.slug}`} className={classes.question}>
      <Highlight highlight={search} className={classes.questionTitle}>
        {question.title}
      </Highlight>
      <Highlight highlight={search} className={classes.questionDescription}>
        {question.description}
      </Highlight>
    </Link>
  ));

  return (
    <section className={classes.group}>
      <header className={classes.header}>
        <h2 className={classes.category}>{category}</h2>
        <Divider className={classes.divider} />
      </header>
      {items}
    </section>
  );
}
