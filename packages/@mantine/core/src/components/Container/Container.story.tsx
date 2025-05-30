import { createTheme, MantineThemeProvider, rem } from '../../core';
import { Container } from './Container';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(200),
  xs: rem(300),
  sm: rem(400),
  md: rem(500),
  lg: rem(600),
  xl: rem(700),
  xxl: rem(800),
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size }) => ({
        root: {
          '--container-size':
            size !== undefined && size in CONTAINER_SIZES ? CONTAINER_SIZES[size] : rem(size),
        },
      }),
    }),
  },
});

export default { title: 'Container' };

export function Usage() {
  return (
    <MantineThemeProvider theme={theme}>
      <Container size="md" bg="gray.1" strategy="grid">
        <div style={{ background: 'orange' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis quasi asperiores!
          Adipisci dolorem cumque sunt maiores ullam alias rerum architecto voluptatibus reiciendis.
          Nulla, maxime alias? Impedit dolore voluptatibus ducimus? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo facilis quasi asperiores! Adipisci dolorem cumque sunt
          maiores ullam alias rerum architecto voluptatibus reiciendis. Nulla, maxime alias? Impedit
          dolore voluptatibus ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          facilis quasi asperiores! Adipisci dolorem cumque sunt maiores ullam alias rerum
          architecto voluptatibus reiciendis. Nulla, maxime alias? Impedit dolore voluptatibus
          ducimus?
        </div>
        <div data-breakout style={{ background: 'silver' }}>
          Breakout
        </div>
      </Container>
    </MantineThemeProvider>
  );
}

export function NonFluidWithinFluid() {
  return (
    <Container fluid h={50} bg="blue">
      <Container h={50} bg="red">
        Child container
      </Container>
    </Container>
  );
}
