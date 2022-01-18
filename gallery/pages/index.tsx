import { GetStaticProps } from 'next';
import { countComponentsByCategory } from '../data/components';
import { HomePage } from '../components/HomePage/HomePage';

export default HomePage;

export const getStaticProps: GetStaticProps = () => ({
  props: { componentsCountByCategory: countComponentsByCategory() },
});
