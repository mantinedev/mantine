import { useState } from 'react';
import { Splitter } from '../Splitter';
import { Textarea } from './Textarea';

export default { title: 'Textarea' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" />
    </div>
  );
}

export function Resize() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" resize="vertical" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Default" placeholder="Default textarea" unstyled />
    </div>
  );
}

export function Autosize() {
  return (
    <div style={{ padding: 40 }}>
      <Textarea label="Autosize" placeholder="Autosize" autosize minRows={4} />
    </div>
  );
}

export function AutosizeInSplitter() {
  const value =
    'Drag the splitter handle to resize this pane. As the textarea width changes the autosize height should recalculate so that all of this text stays visible without scrolling. Resizing the pane narrower should make the textarea taller and wider should make it shorter.';

  return (
    <Splitter h={400}>
      <Splitter.Pane defaultSize={50} min={20}>
        <div style={{ padding: 20 }}>
          <Textarea label="Autosize in Splitter" autosize minRows={2} defaultValue={value} />
        </div>
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        <div style={{ padding: 20, color: 'white' }}>Drag the handle to resize the left pane</div>
      </Splitter.Pane>
    </Splitter>
  );
}

export function BottomSectionCharCounter() {
  const maxLength = 1000;
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: 40 }}>
      <Textarea
        label="With character counter"
        placeholder="Type something..."
        rows={4}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        bottomSection={
          <span>
            {value.length}/{maxLength}
          </span>
        }
      />
    </div>
  );
}
