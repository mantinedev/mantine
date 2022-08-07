import React, { useState } from 'react';
import { Spoiler } from './Spoiler';

export default { title: 'Spoiler' };

export function ContentChanges() {
  const [count, setCount] = useState(1);
  const randomCount = () => setCount(Math.round(Math.random() * 5 + 1));
  const content = Array(count)
    .fill(0)
    .map((_, index) => (
      <p key={index}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis, incidunt libero,
        itaque, quaerat labore quis odio culpa tempore quisquam porro unde omnis tempora nostrum
        nihil eligendi distinctio. Animi, consectetur!
      </p>
    ));

  return (
    <div style={{ padding: 40 }}>
      <button type="button" onClick={randomCount}>
        Random count
      </button>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
        {content}
      </Spoiler>
    </div>
  );
}
