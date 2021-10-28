import React, { useState } from 'react';
import { Group, Button, Text } from '../../../index';
import { Skeleton } from '../Skeleton';

const code = `
<Skeleton height={50} circle mb="xl" />
<Skeleton height={8} radius="xl" />
<Skeleton height={8} mt={6} radius="xl" />
<Skeleton height={8} mt={6} width="70%" radius="xl" />
`;

function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Skeleton visible={loading}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore
          magnam optio, numquam nostrum inventore tempora assumenda saepe, aut repellat. Temporibus
          aspernatur aperiam magnam debitis facere odio?
        </Text>
        <Text>
          Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis
          dolores vero cumque magni cum, deserunt, ad tempore consectetur libero molestias similique
          nemo eum! Dolore maxime voluptate inventore atque.
        </Text>
      </Skeleton>

      <Group position="center" mt="xs">
        <Button onClick={() => setLoading((l) => !l)}>Toggle Skeleton</Button>
      </Group>
    </div>
  );
}

export const content: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
