import React from 'react';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Text, SimpleGrid, Slider, Button } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Slider as SliderStylesApi } from '@mantine/styles-api';
import DataTable from '../../MdxPage/MdxProvider/DataTable/DataTable';
import { PageSection } from '../PageSection/PageSection';

const code = `
<Slider
  defaultValue={40}
  marks={marks}
  labelTransition="fade"
  size={2}
  styles={(theme) => ({
    track: { '&::before': { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1] } },
    mark: { width: 6, height: 6, borderRadius: 6, transform: 'translateX(-3px) translateY(-2px)', borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1] },
    markFilled: { borderColor: theme.colors.blue[6] },
    markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
    thumb: { height: 16, width: 16, backgroundColor: theme.white, borderWidth: 1, boxShadow: theme.shadows.sm },
  })}
/>
`.trim();
const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

export function Customize() {
  return (
    <PageSection
      title="Components customization"
      description="Each Mantine component supports styles overriding for every internal element inside with classes or inline styles. This feature alongside other customization options allows you to implement any visual modifications to components and adapt them to fit almost any design requirements."
    >
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 960, cols: 1 }]} spacing={30} mt={30}>
        <div>
          <Text mb={15} weight={500} size="lg">
            Default slider styles
          </Text>
          <Slider defaultValue={40} marks={marks} />
          <Prism mt={25} language="tsx" noCopy>
            {'<Slider defaultValue={40} marks={marks} />'}
          </Prism>

          <Text mb={15} mt={30} weight={500} size="lg">
            Find elements that you need to change in styles API table
          </Text>

          <DataTable
            head={['Name', 'Description']}
            data={Object.keys(SliderStylesApi).map((name) => [name, SliderStylesApi[name]])}
          />
        </div>

        <div>
          <Text mb={20} weight={500} size="lg">
            Then apply styles and add other props:
          </Text>
          <Slider
            defaultValue={40}
            marks={marks}
            labelTransition="fade"
            size={2}
            styles={(theme) => ({
              track: {
                '&::before': {
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
                },
              },
              mark: {
                width: 6,
                height: 6,
                borderRadius: 6,
                transform: 'translateX(-3px) translateY(-2px)',
                borderColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
              },
              markFilled: {
                borderColor: theme.colors.blue[6],
              },
              markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
              thumb: {
                height: 16,
                width: 16,
                backgroundColor: theme.white,
                borderWidth: 1,
                boxShadow: theme.shadows.sm,
              },
            })}
          />

          <Prism mt={32} language="tsx" noCopy>
            {code}
          </Prism>

          <Button
            mt={15}
            size="md"
            component={Link}
            to="/theming/styles-api"
            rightIcon={<ArrowRightIcon style={{ width: 16, height: 16 }} />}
          >
            Learn more about Styles API
          </Button>
        </div>
      </SimpleGrid>
    </PageSection>
  );
}
