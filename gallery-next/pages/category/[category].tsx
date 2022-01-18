import { GetStaticPaths, GetStaticProps } from 'next';
import { GALLERY_CATEGORIES_SLUGS, getCategoryData, GalleryCategory } from '../../data';
import { getComponentsByCategory } from '../../data/components';
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
    components: getComponentsByCategory()[context.params.category],
  },
});
