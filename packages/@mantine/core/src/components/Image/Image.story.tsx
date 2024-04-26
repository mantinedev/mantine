import { Group } from '../Group';
import { Image } from './Image';

export default { title: 'Image' };

const url =
  'https://img.freepik.com/free-photo/shallow-focus-shot-orange-butterfly-yellow-flower_181624-40605.jpg?w=740&t=st=1680534125~exp=1680534725~hmac=a4585a5c52338662fc0439ec1aac90076232ad5c319c886863c30fa4f5894ac6';

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Image src={url} h={600} />
    </div>
  );
}

export function WithinGroup() {
  return (
    <Group style={{ padding: 40 }}>
      <Image src={url} h={200} radius="md" />
    </Group>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Image src={url} h={600} radius="md" unstyled />
    </div>
  );
}

export function Fallback() {
  return (
    <div style={{ padding: 40 }}>
      <Image src={url} h={600} radius="md" fallbackSrc="https://placehold.co/600x400" />
    </div>
  );
}
