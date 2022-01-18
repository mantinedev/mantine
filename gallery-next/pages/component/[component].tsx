import { GetStaticPaths, GetStaticProps } from 'next';
import { GalleryComponent } from '../../data';
import ALL_COMPONENTS from '../../data/components.json';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';

export default ComponentPage;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(ALL_COMPONENTS).reduce((acc, category) => {
    acc.push(
      ...ALL_COMPONENTS[category].map((component) => ({ params: { component: component.slug } }))
    );
    return acc;
  }, []),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ data: GalleryComponent }, { component: string }> = (
  context
) => ({
  props: {
    data: Object.keys(ALL_COMPONENTS)
      .reduce((acc, category) => {
        acc.push(...ALL_COMPONENTS[category]);
        return acc;
      }, [])
      .find((component) => component.slug === context.params.component),
  },
});
