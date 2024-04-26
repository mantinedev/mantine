import { Button, Fieldset, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Fieldset, TextInput, Button } from '@mantine/core';

function Demo() {
  return (
    <form>
      <Fieldset disabled variant="unstyled">
        <TextInput label="Your name" placeholder="Your name" />
        <TextInput label="Your email" placeholder="Your email" mt="md" />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </Fieldset>
    </form>
  );
}
`;

function Demo() {
  return (
    <form>
      <Fieldset disabled variant="unstyled">
        <TextInput label="Your name" placeholder="Your name" />
        <TextInput label="Your email" placeholder="Your email" mt="md" />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </Fieldset>
    </form>
  );
}

export const FieldsetInputs: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
