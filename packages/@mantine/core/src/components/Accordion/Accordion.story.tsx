import { useEffect, useState } from 'react';
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
        keepMounted={false}
      >
        {_items}
      </Accordion>

      <Accordion
        defaultValue="flex"
        style={{ maxWidth: 400 }}
        mx="auto"
        mt={50}
        variant="contained"
      >
        {_items}
      </Accordion>

      <Accordion defaultValue="flex" style={{ maxWidth: 400 }} mx="auto" mt={50} variant="filled">
        {_items}
      </Accordion>

      <Accordion
        defaultValue="flex"
        style={{ maxWidth: 400 }}
        mx="auto"
        mt={50}
        variant="separated"
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

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ padding: 10, background: 'rgba(0,0,0,0.05)', borderRadius: 4 }}>
      Timer running: {seconds}s
    </div>
  );
}

export function KeepMountedMode() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <h3>keepMountedMode="display-none" (Timer keeps running when collapsed)</h3>
      <Accordion keepMounted keepMountedMode="display-none" defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Control>Panel with Timer (Keep mounted display-none)</Accordion.Control>
          <Accordion.Panel>
            <Timer />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <h3 style={{ marginTop: 40 }}>
        keepMountedMode="activity" (Timer pauses/resets when collapsed)
      </h3>
      <Accordion keepMounted keepMountedMode="activity" defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Control>Panel with Timer (Keep mounted activity)</Accordion.Control>
          <Accordion.Panel>
            <Timer />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
