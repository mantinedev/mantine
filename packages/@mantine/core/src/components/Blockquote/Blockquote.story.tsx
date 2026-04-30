import { InfoIcon } from '@phosphor-icons/react';
import { rem } from '../../core';
import { Blockquote } from './Blockquote';

export default { title: 'Blockquote' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 820 }}>
      <Blockquote icon={<InfoIcon style={{ width: rem(32), height: rem(32) }} />}>
        <b>Hello there</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat rerum officiis,
          excepturi, illum, aut temporibus id dolor beatae quasi eligendi. Quos qui harum veritatis
          saepe unde maiores, recusandae consectetur.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat rerum officiis,
          excepturi, illum, aut temporibus id dolor beatae quasi eligendi. Quos qui harum veritatis
          saepe unde maiores, recusandae consectetur.
        </p>
      </Blockquote>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 820 }}>
      <Blockquote
        unstyled
        icon={<InfoIcon style={{ width: rem(32), height: rem(32) }} />}
        color="#F0000E"
      >
        <b>Hello there</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat rerum officiis,
          excepturi, illum, aut temporibus id dolor beatae quasi eligendi. Quos qui harum veritatis
          saepe unde maiores, recusandae consectetur.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat rerum officiis,
          excepturi, illum, aut temporibus id dolor beatae quasi eligendi. Quos qui harum veritatis
          saepe unde maiores, recusandae consectetur.
        </p>
      </Blockquote>
    </div>
  );
}
