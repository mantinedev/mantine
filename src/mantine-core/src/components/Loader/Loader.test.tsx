import React, { forwardRef } from 'react';
import { tests, render } from '@mantine/tests';
import { Loader, LoaderProps, LoaderStylesNames, defaultLoaders } from './Loader';
import { MantineLoaderComponent } from './Loader.types';

const customLoader: MantineLoaderComponent = forwardRef(() => <div data-custom-loader />);

const defaultProps: LoaderProps = {};

describe('@mantine/core/Loader', () => {
  tests.itSupportsSystemProps<LoaderProps, LoaderStylesNames>({
    component: Loader,
    props: defaultProps,
    styleProps: true,
    size: true,
    variant: true,
    extend: true,
    classes: true,
    id: true,
    refType: HTMLSpanElement,
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

  it('sets data-size attribute', () => {
    const { container, rerender } = render(<Loader size="xl" />);
    expect(container.querySelector('[data-size="xl"]')).toBeInTheDocument();

    rerender(<Loader size={100} />);
    expect(container.querySelector('[data-size]')).not.toBeInTheDocument();
  });
});
