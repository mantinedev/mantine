import { Carousel } from '@mantine/carousel';
import { MantineDemo } from '@mantinex/demo';
import { Slides } from './_slides';

function Wrapper(props: any) {
  return (
    <Carousel height={200} slideSize="70%" slideGap="md" emblaOptions={props}>
      <Slides count={5} />
    </Carousel>
  );
}

const code = (props: any) => `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      emblaOptions={{
        loop: ${props.loop},
        dragFree: ${props.dragFree},
        align: '${props.align}'
      }}
    >
      {/* ...slides */}
    </Carousel>
  );
}
`;

export const emblaOptions: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [
    {
      prop: 'align',
      type: 'segmented',
      initialValue: 'center',
      libraryValue: '__',
      data: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
      ],
    },
    { prop: 'loop', type: 'boolean', initialValue: true, libraryValue: '__' },
    { prop: 'dragFree', type: 'boolean', initialValue: false, libraryValue: '__' },
  ],
};
