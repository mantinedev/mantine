import { TextInput } from '../TextInput';
import { Accordion } from './Accordion';

export default { title: 'Accordion' };

const _items = (
  <>
    <Accordion.Item value="customize">
      <Accordion.Control>Customization</Accordion.Control>
      <Accordion.Panel>
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="flex">
      <Accordion.Control>Flexibility</Accordion.Control>
      <Accordion.Panel>
        Configure components appearance and behavior with vast amount of settings or overwrite any
        part of component styles
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="focus">
      <Accordion.Control>No annoying focus ring</Accordion.Control>
      <Accordion.Panel>
        With new :focus-visible pseudo-class focus ring appears only when user navigates with
        keyboard
      </Accordion.Panel>
    </Accordion.Item>
  </>
);

export function Variants() {
  return (
    <>
      <Accordion
        defaultValue="flex"
        style={{ maxWidth: 400 }}
        mx="auto"
        mt="xl"
        variant="default"
        radius="md"
        chevron={null}
      >
        {_items}
      </Accordion>

      <Accordion
        defaultValue="flex"
        style={{ maxWidth: 400 }}
        mx="auto"
        mt={50}
        variant="contained"
        radius="md"
      >
        {_items}
      </Accordion>

      <Accordion
        defaultValue="flex"
        style={{ maxWidth: 400 }}
        mx="auto"
        mt={50}
        variant="filled"
        radius="md"
      >
        {_items}
      </Accordion>

      <Accordion
        defaultValue="flex"
        style={{ maxWidth: 400 }}
        mx="auto"
        mt={50}
        variant="separated"
        radius="md"
      >
        {_items}
      </Accordion>
    </>
  );
}

export function NestedAccordions() {
  return (
    <Accordion multiple style={{ maxWidth: 400 }} mx="auto">
      <Accordion.Item value="item-1">
        <Accordion.Control>Nested 1</Accordion.Control>
        <Accordion.Panel>
          <Accordion>{_items}</Accordion>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Control>Nested 2</Accordion.Control>
        <Accordion.Panel>
          <Accordion>{_items}</Accordion>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export function WithInputs() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <Accordion multiple>
        <Accordion.Item value="item-1">
          <Accordion.Control>First item</Accordion.Control>
          <Accordion.Panel>
            <TextInput label="Text input" placeholder="Text input" />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Control>Second item</Accordion.Control>
          <Accordion.Panel>
            <TextInput label="Text input" placeholder="Text input" />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <TextInput label="Text input" />
    </div>
  );
}
