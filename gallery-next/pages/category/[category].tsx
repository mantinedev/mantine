import { GetStaticPaths, GetStaticProps } from 'next';
import { GALLERY_CATEGORIES_SLUGS } from '../../data';
import { CategoryPage } from '../../components/CategoryPage/CategoryPage';

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: GALLERY_CATEGORIES_SLUGS.map((slug) => ({ params: { category: slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = (context) => ({ props: {} });
