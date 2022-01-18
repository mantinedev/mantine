import { GetStaticPaths, GetStaticProps } from 'next';
import { GALLERY_CATEGORIES_SLUGS, getCategoryData, GalleryCategory } from '../../data';
import ALL_COMPONENTS from '../../data/components.json';
import { CategoryPage } from '../../components/CategoryPage/CategoryPage';

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: GALLERY_CATEGORIES_SLUGS.map((slug) => ({ params: { category: slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ category: GalleryCategory }, { category: string }> = (
  context
) => ({
  props: {
    category: getCategoryData(context.params.category),
    components: ALL_COMPONENTS[context.params.category],
  },
});
