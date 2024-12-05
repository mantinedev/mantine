import { Container } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Container } from '@mantine/core';

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size={480} {...demoProps}>
        480px Container without padding
      </Container>
    </>
  );
}
`;

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps} mt={0}>
        Default Container
      </Container>
      <Container size="xs" {...demoProps}>
        xs Container
      </Container>
      <Container px={0} size={480} {...demoProps}>
        480px Container without padding
      </Container>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
