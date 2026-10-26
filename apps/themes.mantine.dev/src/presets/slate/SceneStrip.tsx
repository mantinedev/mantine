import { IconCheck } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { eighthsLeft, formatPages, type Scene } from './data';
import classes from './SceneStrip.module.css';

interface SceneStripProps {
  scenes: Scene[];
  onWrap: () => void;
}

export function SceneStrip({ scenes, onWrap }: SceneStripProps) {
  const wrapped = scenes.filter((scene) => scene.status === 'done').length;
  const left = eighthsLeft(scenes);
  const now = scenes.find((scene) => scene.status === 'now');

  return (
    <div className={classes.strip} role="group" aria-label="Today’s scenes">
      <div className={classes.label}>
        <b>
          {wrapped} of {scenes.length} wrapped
        </b>
        <span>{left ? `${formatPages(left)} pages to go` : 'That’s a wrap on day 14'}</span>
      </div>
      <div className={classes.scenes}>
        {scenes.map((scene) => (
          <div
            key={scene.number}
            className={classes.scene}
            data-status={scene.status}
            title={scene.set}
          >
            <span className={classes.number}>{scene.number}</span>
            <span className={classes.state}>
              {scene.status === 'done'
                ? 'Wrapped'
                : scene.status === 'now'
                  ? 'Shooting'
                  : scene.call}
            </span>
          </div>
        ))}
      </div>
      <Button
        variant="default"
        leftSection={<IconCheck stroke={1.8} />}
        disabled={!now}
        className={classes.wrap}
        onClick={onWrap}
      >
        {now ? `Wrap ${now.number}` : 'All wrapped'}
      </Button>
    </div>
  );
}
