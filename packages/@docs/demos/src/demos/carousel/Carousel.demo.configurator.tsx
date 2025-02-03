import { Carousel, CarouselProps } from '@mantine/carousel';
import { MantineDemo } from '@mantinex/demo';
import { Slides } from './_slides';

function Wrapper(props: CarouselProps) {
  return (
    <Carousel height={200} slideSize="70%" {...props}>
      <Slides count={5} />
    </Carousel>
  );
}

const code = `
import { Carousel } from '@mantine/carousel';


function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      {{props}}
    >
      {/* ...slides */}
    </Carousel>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [
    {
      prop: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
      data: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
      ],
    },
    { prop: 'slideGap', type: 'size', initialValue: 'md', libraryValue: '__' },
    { prop: 'controlsOffset', type: 'size', initialValue: 'sm', libraryValue: '__' },
    { prop: 'controlSize', type: 'number', min: 14, max: 40, initialValue: 26, libraryValue: '__' },
    { prop: 'withControls', type: 'boolean', initialValue: true, libraryValue: '__' },
    { prop: 'withIndicators', type: 'boolean', initialValue: false, libraryValue: '__' },
  ],
};
