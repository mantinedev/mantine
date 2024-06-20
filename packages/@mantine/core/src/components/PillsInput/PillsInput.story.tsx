import { Group } from '../Group';
import { Pill } from '../Pill';
import { TextInput } from '../TextInput';
import { PillsInput } from './PillsInput';

export default { title: 'PillsInput' };

const getPills = (props: any) => (
  <>
    <Pill withRemoveButton {...props}>
      First
    </Pill>
    <Pill withRemoveButton {...props}>
      Second
    </Pill>
    <Pill withRemoveButton {...props}>
      Third
    </Pill>
    <Pill withRemoveButton {...props}>
      Fourth
    </Pill>
    <Pill withRemoveButton {...props}>
      Fifth
    </Pill>
    <Pill withRemoveButton {...props}>
      Sixth
    </Pill>
    <Pill withRemoveButton {...props}>
      Seventh
    </Pill>
    <Pill withRemoveButton {...props}>
      Eighth
    </Pill>
  </>
);

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <PillsInput>
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <PillsInput unstyled>
        <Pill.Group unstyled>
          {getPills({ unstyled: true })}
          <PillsInput.Field placeholder="Pills input" unstyled />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function Sizes() {
  const items = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <PillsInput size={size} key={size} mt="xl">
      <Pill.Group size={size}>
        {getPills({})}
        <PillsInput.Field placeholder="Pills input" />
      </Pill.Group>
    </PillsInput>
  ));

  return <div style={{ padding: 40, maxWidth: 600 }}>{items}</div>;
}

export function AutoType() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <PillsInput>
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" type="auto" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 460 }}>
      <PillsInput disabled>
        <Pill.Group disabled>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function WithinDisabledFieldset() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <fieldset disabled>
        <PillsInput>
          <Pill.Group>
            {getPills({})}
            <PillsInput.Field placeholder="Pills input" />
          </Pill.Group>
        </PillsInput>
      </fieldset>
    </div>
  );
}

export function WithLabel() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <PillsInput label="Pills input label" description="Pills input description">
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function WithError() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <PillsInput label="Pills input label" error="test-error">
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function Alignment() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <Group align="flex-start" key={size} mt="xl">
      <PillsInput size={size}>
        <Pill.Group size={size}>
          <Pill withRemoveButton>First</Pill>
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>

      <PillsInput size={size}>
        <Pill.Group>
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>

      <TextInput size={size} placeholder="Regular input" />
    </Group>
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
