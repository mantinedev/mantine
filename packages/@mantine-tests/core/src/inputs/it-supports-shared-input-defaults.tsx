import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  /** Selector that has the `data-size` attribute reflecting the resolved input size. @default `[data-size]` */
  sizeSelector?: string;
  /** Component-specific theme key, used to confirm component defaults still win over the umbrella */
  componentName: string;
  /** Set to `false` for components that do not render `Input.Wrapper` (e.g. bare `Input`) */
  withWrapper?: boolean;
}

export function itSupportsSharedInputDefaults<Props>(
  options: Options<Props>,
  name = 'inherits defaults from theme.components.Input and theme.components.InputWrapper'
) {
  describe(name, () => {
    it('inherits size from theme.components.Input.defaultProps', () => {
      const { container } = render(<options.component {...(options.props as any)} />, {
        components: {
          Input: { defaultProps: { size: 'xl' } },
        },
      });

      const sizedNode = container.querySelector(options.sizeSelector ?? '[data-size]');
      expect(sizedNode).toBeInTheDocument();
      expect(sizedNode).toHaveAttribute('data-size', 'xl');
    });

    if (options.withWrapper !== false) {
      it('inherits withAsterisk from theme.components.InputWrapper.defaultProps', () => {
        const { container } = render(
          <options.component {...(options.props as any)} label="test-label" />,
          {
            components: {
              InputWrapper: { defaultProps: { withAsterisk: true } },
            },
          }
        );

        expect(container.querySelector('.mantine-InputWrapper-required')).toBeInTheDocument();
      });
    }

    it('component-specific defaults override umbrella defaults', () => {
      const { container } = render(<options.component {...(options.props as any)} />, {
        components: {
          Input: { defaultProps: { size: 'xl' } },
          [options.componentName]: { defaultProps: { size: 'xs' } },
        },
      });

      const sizedNode = container.querySelector(options.sizeSelector ?? '[data-size]');
      expect(sizedNode).toHaveAttribute('data-size', 'xs');
    });

    it('caller props override umbrella defaults', () => {
      const { container } = render(
        <options.component {...({ ...options.props, size: 'sm' } as any)} />,
        {
          components: {
            Input: { defaultProps: { size: 'xl' } },
          },
        }
      );

      const sizedNode = container.querySelector(options.sizeSelector ?? '[data-size]');
      expect(sizedNode).toHaveAttribute('data-size', 'sm');
    });
  });
}
