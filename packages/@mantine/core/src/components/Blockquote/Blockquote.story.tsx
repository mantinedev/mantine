import { InfoIcon, QuotesIcon } from '@phosphor-icons/react';
import { Blockquote } from './Blockquote';

export default { title: 'Blockquote' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 820 }}>
      <Blockquote icon={<InfoIcon />} cite="– Fred Brooks, The Mythical Man-Month">
        <p>
          The programmer, like the poet, works only slightly removed from pure thought-stuff. He
          builds his castles in the air, from air, creating by exertion of the imagination.
        </p>

        <p>
          Few media of creation are so flexible, so easy to polish and rework, so readily capable of
          realizing grand conceptual structures.
        </p>
      </Blockquote>
    </div>
  );
}

export function Colors() {
  return (
    <div style={{ padding: 40, maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 32 }}>
      <Blockquote icon={<InfoIcon />} cite="– Forrest Gump">
        Life is like an npm install – you never know what you are going to get.
      </Blockquote>
      <Blockquote color="teal" icon={<QuotesIcon />} cite="– Harold Abelson">
        Programs must be written for people to read, and only incidentally for machines to execute.
      </Blockquote>
      <Blockquote color="red" cite="– Edsger W. Dijkstra">
        Simplicity is prerequisite for reliability.
      </Blockquote>
      <Blockquote color="gray" icon={<QuotesIcon />} cite="– Phil Karlton">
        There are only two hard things in Computer Science: cache invalidation and naming things.
      </Blockquote>
      <Blockquote color="grape.4" icon={<QuotesIcon />} iconSize={32}>
        Any fool can write code that a computer can understand. Good programmers write code that
        humans can understand.
      </Blockquote>
      <Blockquote color="#F0000E" icon={<QuotesIcon />} cite="– Martin Fowler">
        Any fool can write code that a computer can understand. Good programmers write code that
        humans can understand.
      </Blockquote>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 820 }}>
      <Blockquote unstyled icon={<InfoIcon />} color="#F0000E" cite="– Forrest Gump">
        Life is like an npm install – you never know what you are going to get.
      </Blockquote>
    </div>
  );
}
