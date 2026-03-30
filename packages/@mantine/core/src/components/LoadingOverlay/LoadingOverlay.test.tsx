import { render, screen, tests } from '@mantine-tests/core';
import { LoadingOverlay, LoadingOverlayProps, LoadingOverlayStylesNames } from './LoadingOverlay';

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe('@mantine/core/LoadingOverlay', () => {
  tests.itSupportsSystemProps<LoadingOverlayProps, LoadingOverlayStylesNames>({
    component: LoadingOverlay,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/LoadingOverlay',
    stylesApiSelectors: ['root', 'loader', 'overlay'],
  });

  it('renders when visible prop is true', () => {
    const { container } = render(<LoadingOverlay visible />);
    expect(container.querySelector('.mantine-LoadingOverlay-root')).toBeInTheDocument();
  });

  it('does not render when visible prop is false', () => {
    const { container } = render(<LoadingOverlay visible={false} />);
    expect(container.querySelector('.mantine-LoadingOverlay-root')).not.toBeInTheDocument();
  });

  it('passes loaderProps to Loader component', () => {
    render(<LoadingOverlay visible loaderProps={{ 'data-testid': 'test-loader' } as any} />);
    expect(screen.getByTestId('test-loader')).toBeInTheDocument();
  });

  it('passes overlayProps to Overlay component', () => {
    render(<LoadingOverlay visible overlayProps={{ 'data-testid': 'test-overlay' } as any} />);
    expect(screen.getAllByTestId('test-overlay')).toHaveLength(2);
  });

  it('renders custom loader via loaderProps.children', () => {
    render(
      <LoadingOverlay
        visible
        loaderProps={{ children: <span data-testid="custom-loader">test-loader</span> }}
      />
    );
    expect(screen.getByTestId('custom-loader')).toBeInTheDocument();
    expect(screen.getByText('test-loader')).toBeInTheDocument();
  });
});
