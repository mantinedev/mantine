import React from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import { Blockquote } from './Blockquote';
import { rem } from '../../core';

export default { title: 'Blockquote' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 820 }}>
      <Blockquote
        icon={<IconInfoCircle style={{ width: rem(32), height: rem(32) }} stroke={1.5} />}
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

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 820 }}>
      <Blockquote
        unstyled
        icon={<IconInfoCircle style={{ width: rem(32), height: rem(32) }} stroke={1.5} />}
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
