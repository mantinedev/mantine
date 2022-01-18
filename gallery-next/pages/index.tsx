import { GetStaticProps } from 'next';
import componentsCountByCategory from '../data/count.json';
import { HomePage } from '../components/HomePage/HomePage';

export default HomePage;

export const getStaticProps: GetStaticProps = () => ({
  props: { componentsCountByCategory },
});
