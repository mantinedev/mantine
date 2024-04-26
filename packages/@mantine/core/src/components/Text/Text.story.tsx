import { Text } from './Text';

export default { title: 'Text' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Text>Just text</Text>
    </div>
  );
}

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores mollitia excepturi voluptas inventore doloribus saepe in iure obcaecati sunt architecto facere quis quasi suscipit recusandae fugit, veniam eaque perspiciatis?';

export function Sizes() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Text size="xs">{lorem}</Text>
      <Text size="sm" mt="xl">
        {lorem}
      </Text>
      <Text size="md" mt="xl">
        {lorem}
      </Text>
      <Text size="lg" mt="xl">
        {lorem}
      </Text>
      <Text size="xl" mt="xl">
        {lorem}
      </Text>
    </div>
  );
}

export function Truncate() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Text truncate>Please truncate this text from the end</Text>
      <Text truncate="start">Please truncate this text from the start</Text>
      <Text truncate="end">Please truncate this text from the end</Text>
    </div>
  );
}

export function Gradient() {
  return (
    <div style={{ padding: 40 }}>
      <Text variant="gradient" fz={50} fw="bold" gradient={{ from: 'red', to: 'cyan', deg: 180 }}>
        This is gradient text
      </Text>

      <Text variant="gradient" fz={80} fw="bold">
        This is gradient text 2
      </Text>
    </div>
  );
}

export function StyleProps() {
  return (
    <div style={{ padding: 40 }}>
      <Text tt="uppercase">Text transform</Text>
      <Text td="underline">Underline</Text>
      <Text td="line-through">Strike</Text>
      <Text fz="xl">Font size xl</Text>
      <Text ta="center">Align center</Text>
      <Text fw="bolder">Font weight</Text>
      <Text fs="italic">Italic</Text>
    </div>
  );
}

export function LineClamp() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Text lineClamp={3} inherit>
        From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with
        darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of
        its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are
        visible in the upper jaw when its mouth is open. Each of its thick legs ends with three
        sharp claws. On Bulbasaur&apos;s back is a green plant bulb, which is grown from a seed
        planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides
        it with energy through photosynthesis as well as from the nutrient-rich seeds contained
        within.
      </Text>
    </div>
  );
}
