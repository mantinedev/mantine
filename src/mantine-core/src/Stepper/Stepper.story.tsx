import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { Button } from '../Button';
import { Group } from '../Group';
import { Stepper, StepperProps } from './Stepper';
import { StepProps } from './Step/Step';

function StepWrapper(props: StepProps) {
  return (
    <Stepper.Step label="Second" description="Second description" {...props}>
      Second step content here
    </Stepper.Step>
  );
}

function Wrapper(props: Partial<StepperProps>) {
  const [active, setActive] = useState(1);

  return (
    <>
      <Stepper active={active} onStepClick={setActive} {...props}>
        <Stepper.Step label="First" description="First description">
          First step content here
        </Stepper.Step>
        <StepWrapper />
        <Stepper.Step label="Last" description="Last description">
          Last step content here
        </Stepper.Step>
        <Stepper.Completed>Completed content here</Stepper.Completed>
      </Stepper>

      <Group mt={40}>
        <Button variant="default" onClick={() => setActive(Math.max(0, active - 1))}>
          Previous
        </Button>

        <Button onClick={() => setActive(Math.min(3, active + 1))}>Next</Button>
      </Group>
    </>
  );
}

function DynamicChildren() {
  const [active, setActive] = useState(1);
  const [count, setCount] = useState(3);

  const items = Array(count)
    .fill(0)
    .map((_, index) => <Stepper.Step label={`Step ${index + 1}`} key={index} />);

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        {items}
      </Stepper>

      <Group mt={40}>
        <Button variant="default" onClick={() => setActive(Math.max(0, active - 1))}>
          Previous
        </Button>

        <Button onClick={() => setActive(Math.min(count, active + 1))}>Next</Button>
        <Button
          variant="outline"
          color="red"
          onClick={() => setCount((c) => (c - 1 > 0 ? c - 1 : 0))}
        >
          Remove step
        </Button>

        <Button variant="outline" onClick={() => setCount((c) => c + 1)}>
          Add step
        </Button>
      </Group>
    </>
  );
}

const sizes = MANTINE_SIZES.map((size, index) => (
  <Wrapper key={size} size={size} mt={index !== 0 ? 60 : 0} />
));

const verticalSizes = MANTINE_SIZES.map((size, index) => (
  <Wrapper key={size} size={size} mt={index !== 0 ? 60 : 0} orientation="vertical" />
));

storiesOf('Stepper', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Wrapper color="teal" />
    </div>
  ))
  .add('Vertical orientation', () => (
    <div style={{ padding: 40 }}>
      <Wrapper orientation="vertical" />
      <Wrapper orientation="vertical" iconPosition="right" mt="xl" />
      <div style={{ marginTop: 40 }}>
        <Stepper active={1} orientation="vertical">
          <Stepper.Step label="Step 1" description="Create an account" />
          <Stepper.Step
            label="Step 2"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut quam vitae
            lorem viverra ultricies. Integer hendrerit, quam mollis tempus iaculis, tellus est
            pellentesque eros, vel molestie risus eros sit amet sem. Fusce pretium ex quis neque
            fringilla facilisis. Aenean sed luctus tortor, eget suscipit neque. Pellentesque
            consequat neque quis porta luctus. Donec vitae est id velit condimentum mollis id
            vel est. Sed eleifend interdum enim, a facilisis ex faucibus nec. Morbi vel est et
            mauris congue ullamcorper. Duis eget velit lacinia, consequat neque vel, dignissim
            massa.`}
            loading
          />
          <Stepper.Step
            label="Step 3"
            description={`Curabitur in neque dignissim, accumsan ante et, aliquam ex. Mauris nibh tortor,
            blandit sit amet eleifend sed, convallis in erat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In hac habitasse platea dictumst. Integer feugiat elit
            vel neque tincidunt semper. Pellentesque euismod dignissim massa, ac venenatis ipsum
            vulputate mattis. Integer a efficitur ligula. Fusce lacinia lacus at sem luctus
            accumsan nec nec turpis. Fusce interdum, orci id porta viverra, sem lorem porta
            nibh, eget bibendum ligula sapien sit amet orci. Maecenas lobortis lorem dui, a
            volutpat nunc accumsan at. Curabitur ac auctor ante, et convallis diam. Donec eget
            mi consectetur, pharetra urna et, volutpat nibh. Integer sit amet diam ligula.
            Phasellus ex purus, dictum non purus ut, viverra maximus sem. Sed luctus eget massa
            vitae dapibus. Sed ante tortor, viverra at urna et, feugiat scelerisque dolor. Fusce lacinia lacus at sem luctus
            accumsan nec nec turpis. Fusce interdum, orci id porta viverra, sem lorem porta
            nibh, eget bibendum ligula sapien sit amet orci. Maecenas lobortis lorem dui, a
            volutpat nunc accumsan at. Curabitur ac auctor ante, et convallis diam. Donec eget
            mi consectetur, pharetra urna et, volutpat nibh.`}
          />
          <Stepper.Step label="Step 3" description="Get full access" />
          <Stepper.Step
            label="Step 4"
            description={`Curabitur in neque dignissim, accumsan ante et, aliquam ex. Mauris nibh tortor,
            blandit sit amet eleifend sed, convallis in erat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In hac habitasse platea dictumst. Integer feugiat elit
            vel neque tincidunt semper. Pellentesque euismod dignissim massa, ac venenatis ipsum
            vulputate mattis. Integer a efficitur ligula. Fusce lacinia lacus at sem luctus
            accumsan nec nec turpis. Fusce interdum, orci id porta viverra, sem lorem porta
            nibh, eget bibendum ligula sapien sit amet orci. Maecenas lobortis lorem dui, a
            volutpat nunc accumsan at. Curabitur ac auctor ante, et convallis diam. Donec eget
            mi consectetur, pharetra urna et, volutpat nibh. Integer sit amet diam ligula.
            Phasellus ex purus, dictum non purus ut, viverra maximus sem. Sed luctus eget massa
            vitae dapibus. Sed ante tortor, viverra at urna et, feugiat scelerisque dolor. Fusce lacinia lacus at sem luctus
            accumsan nec nec turpis. Fusce interdum, orci id porta viverra, sem lorem porta
            nibh, eget bibendum ligula sapien sit amet orci. Maecenas lobortis lorem dui, a
            volutpat nunc accumsan at. Curabitur ac auctor ante, et convallis diam. Donec eget
            mi consectetur, pharetra urna et, volutpat nibh.`}
          />
          <Stepper.Step
            label="Step 5"
            description={`Curabitur in neque dignissim, accumsan ante et, aliquam ex. Mauris nibh tortor,
            blandit sit amet eleifend sed, convallis in erat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In hac habitasse platea dictumst. Integer feugiat elit
            vel neque tincidunt semper. Pellentesque euismod dignissim massa, ac venenatis ipsum
            vulputate mattis. Integer a efficitur ligula. Fusce lacinia lacus at sem luctus
            accumsan nec nec turpis. Fusce interdum, orci id porta viverra, sem lorem porta
            nibh, eget bibendum ligula sapien sit amet orci. Maecenas lobortis lorem dui, a
            volutpat nunc accumsan at. Curabitur ac auctor ante, et convallis diam. Donec eget
            mi consectetur, pharetra urna et, volutpat nibh. Integer sit amet diam ligula.
            Phasellus ex purus, dictum non purus ut, viverra maximus sem. Sed luctus eget massa
            vitae dapibus. Sed ante tortor, viverra at urna et, feugiat scelerisque dolor. Fusce lacinia lacus at sem luctus
            accumsan nec nec turpis. Fusce interdum, orci id porta viverra, sem lorem porta
            nibh, eget bibendum ligula sapien sit amet orci. Maecenas lobortis lorem dui, a
            volutpat nunc accumsan at. Curabitur ac auctor ante, et convallis diam. Donec eget
            mi consectetur, pharetra urna et, volutpat nibh.`}
          />
          <Stepper.Step label="Step 6" description="Get full access" />
        </Stepper>
      </div>
    </div>
  ))
  .add('Icon position right', () => (
    <div style={{ padding: 40 }}>
      <Wrapper iconPosition="right" />
    </div>
  ))
  .add('Loading state', () => (
    <div style={{ padding: 40 }}>
      <Stepper active={0}>
        <Stepper.Step label="First" />
        <Stepper.Step color="orange" label="Second" loading />
        <Stepper.Step label="Third" />
      </Stepper>
    </div>
  ))
  .add('Icons only', () => (
    <div style={{ padding: 40 }}>
      <Stepper active={1}>
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>

      <Stepper active={1} mt={60} orientation="vertical">
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>
    </div>
  ))
  .add('Responsive', () => (
    <div style={{ padding: 40 }}>
      <Wrapper breakpoint="sm" />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Vertical sizes', () => (
    <div style={{ padding: 40 }}>
      {verticalSizes}
      <Wrapper mt={60} orientation="vertical" iconSize={80} />
    </div>
  ))
  .add('Dynamic children', () => (
    <div style={{ padding: 40 }}>
      <DynamicChildren />
    </div>
  ));
