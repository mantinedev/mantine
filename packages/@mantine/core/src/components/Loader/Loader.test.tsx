import { render, tests } from '@mantine-tests/core';
import { defaultLoaders, Loader, LoaderProps, LoaderStylesNames } from './Loader';
import { MantineLoaderComponent } from './Loader.types';

const customLoader: MantineLoaderComponent = () => <div data-custom-loader />;
customLoader.displayName = 'CustomLoader';

const defaultProps: LoaderProps = {};

describe('@mantine/core/Loader', () => {
  tests.itSupportsSystemProps<LoaderProps, LoaderStylesNames>({
    component: Loader,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Loader',
    stylesApiSelectors: ['root'],
  });

  it('supports custom loaders', () => {
    const { container } = render(
      <Loader
        type="custom"
        loaders={{
          ...defaultLoaders,
          custom: customLoader,
        }}
      />
    );
    expect(container.querySelector('[data-custom-loader]')).toBeInTheDocument();
  });

  it('supports custom loaders on MantineProvider', () => {
    const { container } = render(<Loader />, {
      components: {
        Loader: Loader.extend({
          defaultProps: {
            type: 'custom',
            loaders: { ...defaultLoaders, custom: customLoader },
          },
        }),
      },
    });

    expect(container.querySelector('[data-custom-loader]')).toBeInTheDocument();
  });

  it('exposes defaultLoaders as static property', () => {
    expect(Loader.defaultLoaders).toStrictEqual(defaultLoaders);
  });

  it('renders children instead of the default loader', () => {
    const { container } = render(
      <Loader loaders={{ ...defaultLoaders, oval: customLoader }}>
        <span data-children-loader />
      </Loader>
    );

    expect(container.querySelector('[data-children-loader]')).toBeInTheDocument();
    expect(container.querySelector('[data-custom-loader]')).not.toBeInTheDocument();
  });
});
