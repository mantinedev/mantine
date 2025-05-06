import { FloatingWindow } from './FloatingWindow';

export default { title: 'FloatingWindow' };

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque quod rem temporibus velit, possimus quam eius laudantium impedit. Ipsam debitis quo molestias commodi totam fugit! Eos voluptas ut in!';

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <FloatingWindow
        bg="red"
        p={40}
        w={400}
        h={200}
        bottom={40}
        right={40}
        radius="md"
        constrainOffset={20}
      >
        This is a floating window
      </FloatingWindow>
      <p>{lorem}</p>
      <p>{lorem}</p>
      <p>{lorem}</p>
      <p>{lorem}</p>
    </div>
  );
}
