import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { Button, rem, SimpleGrid, Slider, Text } from '@mantine/core';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { CodeHighlight, CodeHighlightTabs } from '@mantinex/shiki';
import { SliderStylesApi } from '@docs/styles-api';
import { MdxDataTable } from '../../MdxProvider/MdxDataTable/MdxDataTable';
import { PageSection } from '../PageSection/PageSection';
import { code, CustomizeSliderDemo } from './CustomizeSlider.demo';
import classes from './CustomizeStyles.module.css';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

const defaultCode = `
import { Slider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return <Slider defaultValue={40} marks={marks} />;
}
`;

export function CustomizeStyles() {
  return (
    <PageSection
      title="Styles overriding"
      description="Each Mantine component supports styles overriding for every internal element inside with classes or inline styles. This feature alongside other customization options allows you to implement any visual modifications to components and adapt them to fit almost any design requirements."
      alt
    >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30} mt={30}>
        <div>
          <Text mb={15} fw={500} size="lg">
            Default slider styles
          </Text>

          <Slider defaultValue={40} marks={marks} />
          <CodeHighlight
            mt={25}
            language="tsx"
            withCopyButton={false}
            code={defaultCode}
            className={classes.codeHighlight}
          />

          <Text mb={15} mt={30} fw={500} size="lg">
            Find elements that you need to change in styles API table
          </Text>

          <MdxDataTable
            head={['Name', 'Description']}
            data={Object.keys(SliderStylesApi.selectors).map((name) => [
              name,
              SliderStylesApi.selectors[name as keyof typeof SliderStylesApi.selectors],
            ])}
          />
        </div>

        <div>
          <Text mb={20} fw={500} size="lg">
            Then apply styles and add other props:
          </Text>
          <CustomizeSliderDemo />

          <CodeHighlightTabs
            mt={32}
            code={code}
            getFileIcon={getCodeFileIcon}
            className={classes.codeHighlight}
          />

          <Button
            mt={15}
            size="md"
            component={Link}
            href="/styles/styles-api"
            rightSection={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
            variant="gradient"
            className={classes.control}
          >
            View more examples
          </Button>
        </div>
      </SimpleGrid>
    </PageSection>
  );
}
