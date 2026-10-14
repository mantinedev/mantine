import { MantineThemeProvider } from '../../core';
import { Button } from '../Button';
import { Grid } from './Grid';

export default { title: 'Grid' };

export function Usage() {
  return (
    <div style={{ padding: 0 }}>
      <Grid bg="pink.3">
        <Grid.Col span={{ sm: 6, md: 3 }}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={{ sm: 6, md: 3 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
        <Grid.Col span={{ sm: 6, md: 3 }}>
          <Button fullWidth>Third</Button>
        </Grid.Col>
        <Grid.Col span={{ sm: 6, md: 3 }}>
          <Button fullWidth>Forth</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function ContainerBreakpoints() {
  return (
    <div style={{ padding: 40, resize: 'horizontal', overflow: 'hidden' }}>
      <Grid
        type="container"
        gap={{ base: 10, xs: 30, lg: 50 }}
        breakpoints={{ xs: '400px', sm: '600px', md: '800px', lg: '1000px', xl: '1200px' }}
      >
        <Grid.Col span={{ sm: 6, md: 3 }}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={{ sm: 6, md: 3 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
        <Grid.Col span={{ sm: 6, md: 3 }}>
          <Button fullWidth>Third</Button>
        </Grid.Col>
        <Grid.Col span={{ sm: 6, md: 3 }}>
          <Button fullWidth>Forth</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function ContentAuto() {
  return (
    <div style={{ padding: 0 }}>
      <Grid bg="pink.3">
        <Grid.Col span={{ base: 'auto', sm: 'content' }}>
          <Button fullWidth>First</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function NestedAutoGrids() {
  return (
    <div>
      <Grid>
        <Grid.Col span={1} bg="lightyellow">
          First
        </Grid.Col>
        <Grid.Col span="auto" bg="seagreen">
          Second
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={6}>
          <Grid bg="red">
            <Grid.Col span={1} bg="lightyellow">
              First
            </Grid.Col>
            <Grid.Col span="auto" bg="seagreen">
              Second
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={6}>Not nested</Grid.Col>
      </Grid>
    </div>
  );
}

export function Offset() {
  return (
    <div style={{ padding: 0 }}>
      <Grid columns={12} bg="pink.3">
        <Grid.Col span={4}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={4} offset={{ sm: 2, md: 4 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function Order() {
  return (
    <div style={{ padding: 0 }}>
      <Grid columns={12} bg="pink.3">
        <Grid.Col span={4} order={{ base: 2, sm: 1 }}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={4} order={{ base: 1, sm: 2 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function PxBreakpoints() {
  return (
    <MantineThemeProvider
      theme={{
        breakpoints: {
          xs: '400px',
          sm: '600px',
          md: '800px',
          lg: '1000px',
          xl: '1200px',
        },
      }}
    >
      <Grid columns={12} bg="pink.3">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Button fullWidth>Third</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Button fullWidth>Forth</Button>
        </Grid.Col>
      </Grid>
    </MantineThemeProvider>
  );
}

export function NestedInheritance() {
  return (
    <div style={{ padding: 0 }}>
      <Grid justify="center" align="center" bg="pink.3">
        <Grid.Col span={12} order={2} align="flex-end" style={{ minHeight: 200 }}>
          <Grid bg="blue.3" style={{ height: 160 }}>
            <Grid.Col span={3} bg="lime.3">
              First
            </Grid.Col>
            <Grid.Col span={3} order={1} bg="yellow.3">
              Second
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function GapWithoutBase() {
  return (
    <div style={{ padding: 0 }}>
      <Grid gap={{ sm: 'xl' }} bg="pink.3">
        <Grid.Col span={6}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function ContainerWithoutBreakpoints() {
  return (
    <div style={{ padding: 40, resize: 'horizontal', overflow: 'hidden' }}>
      <Grid type="container">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Button fullWidth>First</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Button fullWidth>Second</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export function ColumnsWithoutSpan() {
  return (
    <div style={{ padding: 0 }}>
      <Grid columns={24} bg="pink.3">
        <Grid.Col>
          <Button fullWidth>No span</Button>
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <Button fullWidth>md: 12</Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}
