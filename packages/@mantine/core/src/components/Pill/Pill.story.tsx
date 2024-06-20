import { Input } from '../Input';
import { Pill } from './Pill';

export default { title: 'Pill' };

export function SinglePill() {
  return (
    <div style={{ padding: 40 }}>
      <Pill.Group size="xl">
        <Pill withRemoveButton>Pill</Pill>
        <Pill withRemoveButton>Pill 2</Pill>
      </Pill.Group>
    </div>
  );
}

export function Usage() {
  return (
    <>
      <div style={{ padding: 40, display: 'flex', gap: 20 }}>
        <Pill withRemoveButton size="xs">
          XS pill
        </Pill>
        <Pill withRemoveButton size="sm">
          SM pill
        </Pill>
        <Pill withRemoveButton size="md">
          MD pill
        </Pill>
        <Pill withRemoveButton size="lg">
          LG pill
        </Pill>
        <Pill withRemoveButton size="xl">
          XL pill
        </Pill>
      </div>
      <div
        style={{ padding: 40, display: 'flex', gap: 20, background: 'var(--mantine-color-gray-0)' }}
      >
        <Pill withRemoveButton variant="contrast" size="xs">
          XS pill
        </Pill>
        <Pill withRemoveButton variant="contrast" size="sm">
          SM pill
        </Pill>
        <Pill withRemoveButton variant="contrast" size="md">
          MD pill
        </Pill>
        <Pill withRemoveButton variant="contrast" size="lg">
          LG pill
        </Pill>
        <Pill withRemoveButton variant="contrast" size="xl">
          XL pill
        </Pill>
      </div>
    </>
  );
}

export function WithinInput() {
  return (
    <div style={{ padding: 40 }}>
      <Input size="xs" component="div" multiline>
        <Pill.Group size="xs">
          <Pill withRemoveButton size="xs">
            First
          </Pill>
          <Pill withRemoveButton size="xs">
            Second
          </Pill>
          <Pill withRemoveButton size="xs">
            Third
          </Pill>
        </Pill.Group>
      </Input>

      <Input size="sm" component="div" mt="xl" multiline>
        <Pill.Group size="sm">
          <Pill withRemoveButton size="sm">
            First
          </Pill>
          <Pill withRemoveButton size="sm">
            Second
          </Pill>
          <Pill withRemoveButton size="sm">
            Third
          </Pill>
        </Pill.Group>
      </Input>

      <Input size="md" component="div" mt="xl" multiline>
        <Pill.Group size="md">
          <Pill withRemoveButton size="md">
            First
          </Pill>
          <Pill withRemoveButton size="md">
            Second
          </Pill>
          <Pill withRemoveButton size="md">
            Third
          </Pill>
        </Pill.Group>
      </Input>

      <Input size="lg" component="div" mt="xl" multiline>
        <Pill.Group size="lg">
          <Pill withRemoveButton size="lg">
            First
          </Pill>
          <Pill withRemoveButton size="lg">
            Second
          </Pill>
          <Pill withRemoveButton size="lg">
            Third
          </Pill>
        </Pill.Group>
      </Input>

      <Input size="xl" component="div" mt="xl" multiline>
        <Pill.Group size="xl">
          <Pill withRemoveButton size="xl">
            First
          </Pill>
          <Pill withRemoveButton size="xl">
            Second
          </Pill>
          <Pill withRemoveButton size="xl">
            Third
          </Pill>
        </Pill.Group>
      </Input>
    </div>
  );
}

export function InputWithOverflow() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Input size="sm" component="div" multiline>
        <Pill.Group size="sm">
          <Pill withRemoveButton size="sm" radius="xl">
            First
          </Pill>
          <Pill withRemoveButton size="sm" radius="xl">
            Second
          </Pill>
          <Pill withRemoveButton size="sm" radius="xl">
            Third
          </Pill>
          <Pill withRemoveButton size="sm" radius="xl">
            Forth
          </Pill>
          <Pill withRemoveButton size="sm" radius="xl">
            Fifth
          </Pill>
          <Pill withRemoveButton size="sm" radius="xl">
            Sixth
          </Pill>
          <Pill withRemoveButton size="sm" radius="xl">
            Seventh
          </Pill>
          <Pill withRemoveButton size="sm" radius="xl">
            Eighth
          </Pill>
        </Pill.Group>
      </Input>
    </div>
  );
}

export function WithoutRemove() {
  return (
    <div style={{ padding: 40 }}>
      <Input size="xs" component="div" multiline>
        <Pill.Group size="xs">
          <Pill size="xs">First</Pill>
          <Pill size="xs">Second</Pill>
          <Pill size="xs">Third</Pill>
        </Pill.Group>
      </Input>

      <Input size="sm" component="div" mt="xl" multiline>
        <Pill.Group size="sm">
          <Pill size="sm">First</Pill>
          <Pill size="sm">Second</Pill>
          <Pill size="sm">Third</Pill>
        </Pill.Group>
      </Input>

      <Input size="md" component="div" mt="xl" multiline>
        <Pill.Group size="md">
          <Pill size="md">First</Pill>
          <Pill size="md">Second</Pill>
          <Pill size="md">Third</Pill>
        </Pill.Group>
      </Input>

      <Input size="lg" component="div" mt="xl" multiline>
        <Pill.Group size="lg">
          <Pill size="lg">First</Pill>
          <Pill size="lg">Second</Pill>
          <Pill size="lg">Third</Pill>
        </Pill.Group>
      </Input>

      <Input size="xl" component="div" mt="xl" multiline>
        <Pill.Group size="xl">
          <Pill size="xl">First</Pill>
          <Pill size="xl">Second</Pill>
          <Pill size="xl">Third</Pill>
        </Pill.Group>
      </Input>
    </div>
  );
}

export function Overflow() {
  return (
    <div style={{ padding: 40, width: 200, background: 'pink' }}>
      <Pill>Test pill with container overflow</Pill>
      <Pill withRemoveButton>Test pill with container overflow</Pill>
      <Pill withRemoveButton>Test</Pill>
      <Input component="div" mt="xl" multiline>
        <Pill.Group>
          <Pill>Test pill with container overflow</Pill>
          <Pill>Test pill with container overflow</Pill>
          <Pill withRemoveButton>Test pill with container overflow</Pill>
        </Pill.Group>
      </Input>
    </div>
  );
}

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <Pill>Disabled without remove</Pill>
      <Pill withRemoveButton>Disabled with remove</Pill>
    </fieldset>
  );
}
