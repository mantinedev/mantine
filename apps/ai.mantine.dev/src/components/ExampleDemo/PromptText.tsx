import { Text } from '@mantine/core';
import classes from './ExampleDemo.module.css';

interface PromptTextProps {
  text: string;
}

export function PromptText({ text }: PromptTextProps) {
  const blocks = text.trim().split(/\n\s*\n/);

  return (
    <div className={classes.promptText}>
      {blocks.map((block, index) => {
        const lines = block.split('\n');
        const heading = lines[0].startsWith('- ') ? null : lines[0];
        const items = lines.filter((line) => line.startsWith('- '));

        return (
          <div key={index} className={classes.promptBlock}>
            {heading && <Text className={classes.promptParagraph}>{heading}</Text>}
            {items.length > 0 && (
              <ul className={classes.promptList}>
                {items.map((item) => (
                  <li key={item}>{item.slice(2)}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
