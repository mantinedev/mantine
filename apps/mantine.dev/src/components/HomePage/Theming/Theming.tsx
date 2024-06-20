import { Badge, Button, Group } from '@mantine/core';
import { CodeHighlight } from '@mantinex/shiki';
import { PageSection } from '../PageSection/PageSection';
import classes from './Theming.module.css';

const code = `
import { Badge, Button, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Greycliff CF, sans-serif',
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Button color="ocean-blue">Ocean blue button</Button>
      <Badge color="bright-pink" variant="filled">Bright pink badge</Badge>
    </MantineProvider>
  );
}
`;

export function Theming() {
  return (
    <PageSection
      title="Flexible theming"
      description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements."
    >
      <Group justify="center" mt="xl">
        <Button color="ocean-blue" style={{ fontFamily: 'var(--docs-font-primary)' }}>
          Ocean blue button
        </Button>
        <Badge
          color="bright-pink"
          variant="filled"
          size="lg"
          pt={3}
          style={{ fontFamily: 'var(--docs-font-primary)' }}
          styles={{ label: { display: 'flex', alignItems: 'center' } }}
        >
          Bright pink badge
        </Badge>
      </Group>

      <CodeHighlight
        withCopyButton={false}
        language="tsx"
        code={code}
        className={classes.codeHighlight}
      />
    </PageSection>
  );
}
