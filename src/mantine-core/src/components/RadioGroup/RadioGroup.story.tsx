import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { RadioGroup, Radio } from './index';

const sizes = MANTINE_SIZES.map((size) => (
  <RadioGroup
    style={{ padding: 20 }}
    defaultValue="1"
    label={`${size} size`}
    size={size}
    spacing={size}
    key={size}
  >
    <Radio value="1" label={size} />
    <Radio value="2" label={size} />
    <Radio value="3" label={size} />
  </RadioGroup>
));

function Controlled() {
  const [value, setValue] = useState(null);
  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="1" label="Item 1" />
      <Radio value="2" label="Item 2" />
      <Radio value="3" label="Item 3" />
    </RadioGroup>
  );
}

function MultiLine() {
  const [value, setValue] = useState(null);
  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio value="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Tincidunt dui ut ornare lectus. Hac habitasse platea dictumst
        vestibulum rhoncus est pellentesque. Condimentum mattis pellentesque id nibh. Parturient
        montes nascetur ridiculus mus mauris vitae ultricies leo. Enim neque volutpat ac tincidunt
        vitae semper. Sollicitudin tempor id eu nisl. Tempus quam pellentesque nec nam aliquam sem
        et tortor consequat. Diam sollicitudin tempor id eu. Vitae semper quis lectus nulla at. Sit
        amet nulla facilisi morbi tempus iaculis urna id. Imperdiet sed euismod nisi porta lorem
        mollis aliquam ut.
      </Radio>
      <Radio value="2">
        Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Quam
        vulputate dignissim suspendisse in est ante in nibh mauris. Vulputate sapien nec sagittis
        aliquam malesuada bibendum arcu vitae. Varius quam quisque id diam vel quam elementum.
        Ultricies leo integer malesuada nunc vel risus commodo viverra. Arcu odio ut sem nulla
        pharetra diam sit. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Fermentum
        iaculis eu non diam phasellus vestibulum lorem sed risus. Pulvinar elementum integer enim
        neque. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris.
      </Radio>
      <Radio value="3">
        Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tellus mauris a diam
        maecenas sed enim. Pharetra et ultrices neque ornare aenean. Cras pulvinar mattis nunc sed
        blandit libero volutpat sed cras. Felis eget nunc lobortis mattis aliquam. Ultricies integer
        quis auctor elit sed vulputate. Fusce ut placerat orci nulla pellentesque dignissim enim sit
        amet. Aliquet risus feugiat in ante metus dictum at tempor commodo. Tortor pretium viverra
        suspendisse potenti nullam ac. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
        at.
      </Radio>
      <Radio value="4">Imperdiet sed euismod nisi porta</Radio>
    </RadioGroup>
  );
}

storiesOf('@mantine/core/RadioGroup/stories', module)
  .add('Too many items in horizontal', () => (
    <RadioGroup
      style={{ padding: 40, maxWidth: 300, background: 'rgba(0, 0, 0, .1)' }}
      label="Too many items"
    >
      <Radio value="item-1" label="item-1" />
      <Radio value="item-2" label="item-2" />
      <Radio value="item-3" label="item-3" />
      <Radio value="item-4" label="item-4" />
      <Radio value="item-5" label="item-5" />
      <Radio value="item-6" label="item-6" />
    </RadioGroup>
  ))
  .add('Sizes', () => <>{sizes}</>)
  .add('Controlled', () => <Controlled />)
  .add('Multiple lines', () => <MultiLine />);
