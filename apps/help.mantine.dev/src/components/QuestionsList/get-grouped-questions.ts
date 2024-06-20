import Fuse from 'fuse.js';
import { Frontmatter } from '@/types';

const categoriesOrder = ['about', 'common', 'next.js', 'tooling', 'styles', 'forms', 'components'];

export function getGroupedQuestions(questions: Frontmatter[], searchQuery: string) {
  const fuse = new Fuse(questions, {
    keys: ['title', 'tags', 'category', 'description'],
    threshold: 0.3,
  });

  const searchResults =
    searchQuery.trim().length > 0
      ? fuse.search(searchQuery)
      : questions.map((question) => ({ item: question }));

  const grouped = searchResults.reduce<Record<string, Frontmatter[]>>(
    (acc, payload) => {
      const { category } = payload.item;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(payload.item);

      return acc;
    },
    {} as Record<string, Frontmatter[]>
  );

  return Object.keys(grouped)
    .sort((a, b) => {
      const aIndex = categoriesOrder.indexOf(a);
      const bIndex = categoriesOrder.indexOf(b);

      if (aIndex === -1 && bIndex === -1) {
        return a.localeCompare(b);
      }

      if (aIndex === -1) {
        return 1;
      }

      if (bIndex === -1) {
        return -1;
      }

      return aIndex - bIndex;
    })
    .filter((key) => grouped[key].length)
    .map((key) => ({
      category: key,
      questions: grouped[key],
    }));
}
