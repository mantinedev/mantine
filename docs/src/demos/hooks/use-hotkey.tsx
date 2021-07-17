import React from 'react';
import { useHotkey } from '@mantine/hooks';
import { useMantineTheme, Textarea, Group, Kbd, Text } from '@mantine/core';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';
import { useState } from 'react';

const getCode = (hotkey: string) => `import React, { useState } from 'react';
import { useHotkey } from '@mantine/hooks';
import { Textarea } from '@mantine/core';

export function Demo() {
    const [notes, setNotes] = useState('');
    useHotkey('${hotkey}', () => {
        alert('Saved notes ' + notes);
    });

    return (
        <Textarea
            placeholder="Additional notes"
            label={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                }}
              >
                <label>Notes</label>
                <div>
                  <span style={{ marginRight: '0.5rem' }}>Save notes:</span>
                  <Kbd>⌘</Kbd> + <Kbd>S</Kbd> / <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
                </div>
              </div>
            }
            value={notes}
            onChange={e => setNotes(e.target.value)}
        />
    );
}`;

export function UseHotkeyDemo({ hotkey }: { hotkey: string }) {
  const theme = useMantineTheme();
  const [notes, setNotes] = useState('');
  useHotkey(hotkey, () => {
    alert(`Saved notes "${notes}"`);
  });

  return (
    <CodeDemo
      code={getCode(hotkey)}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]}
    >
      <Textarea
        placeholder="Additional notes"
        label={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <label>Notes</label>
            <div>
              <span style={{ marginRight: '0.5rem' }}>Save notes:</span>
              <Kbd>⌘</Kbd> + <Kbd>S</Kbd> / <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd>
            </div>
          </div>
        }
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </CodeDemo>
  );
}
