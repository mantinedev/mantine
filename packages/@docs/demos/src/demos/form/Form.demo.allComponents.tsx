/* eslint-disable no-console */
import {
  AngleSlider,
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  Fieldset,
  FileInput,
  Group,
  Input,
  JsonInput,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  RangeSlider,
  Rating,
  SegmentedControl,
  Select,
  Slider,
  Switch,
  TagsInput,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const codeTextInput = `
import { TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoTextInput() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const textInput: MantineDemo = {
  type: 'code',
  component: DemoTextInput,
  code: codeTextInput,
};

const codeAngleSlider = `
import { AngleSlider, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      angle: 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <AngleSlider
        aria-label="Angle"
        key={form.key('angle')}
        {...form.getInputProps('angle')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoAngleSlider() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      angle: 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <AngleSlider aria-label="Angle" key={form.key('angle')} {...form.getInputProps('angle')} />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const angleSlider: MantineDemo = {
  type: 'code',
  component: DemoAngleSlider,
  code: codeAngleSlider,
};

const codeCheckbox = `
import { Checkbox, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      termsParams: false,
    },

    validate: {
      termsParams: (value) => (value ? null : 'You must agree to sell your soul'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox
        label="I agree to sell my privacy"
        key={form.key('termsParams')}
        {...form.getInputProps('termsParams', { type: 'checkbox' })}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoCheckbox() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      termsParams: false,
    },

    validate: {
      termsParams: (value) => (value ? null : 'You must agree to sell your soul'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox
        label="I agree to sell my privacy"
        key={form.key('termsParams')}
        {...form.getInputProps('termsParams', { type: 'checkbox' })}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const checkbox: MantineDemo = {
  type: 'code',
  component: DemoCheckbox,
  code: codeCheckbox,
};

const codeCheckboxGroup = `
import { Checkbox, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      favFrameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox.Group
        label="Select your favorite frameworks/libraries"
        withAsterisk
        key={form.key('favFrameworks')}
        {...form.getInputProps('favFrameworks')}
      >
        <Group mt="xs">
          <Checkbox value="react" label="React" />
          <Checkbox value="mantine" label="Mantine" />
          <Checkbox value="ng" label="Angular" />
          <Checkbox value="svelte" label="Svelte" />
        </Group>
      </Checkbox.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoCheckboxGroup() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      favFrameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox.Group
        label="Select your favorite frameworks/libraries"
        withAsterisk
        key={form.key('favFrameworks')}
        {...form.getInputProps('favFrameworks')}
      >
        <Group mt="xs">
          <Checkbox value="react" label="React" />
          <Checkbox value="mantine" label="Mantine" />
          <Checkbox value="ng" label="Angular" />
          <Checkbox value="svelte" label="Svelte" />
        </Group>
      </Checkbox.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const checkboxGroup: MantineDemo = {
  type: 'code',
  component: DemoCheckboxGroup,
  code: codeCheckboxGroup,
};

const codeChip = `
import { Chip, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      awesome: false,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Chip
        key={form.key('awesome')}
        {...form.getInputProps('awesome', { type: 'checkbox' })}
      >
        Mantine is awesome
      </Chip>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoChip() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      awesome: false,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Chip key={form.key('awesome')} {...form.getInputProps('awesome', { type: 'checkbox' })}>
        Mantine is awesome
      </Chip>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const chip: MantineDemo = {
  type: 'code',
  component: DemoChip,
  code: codeChip,
};

const codeColorInput = `
import { ColorInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <ColorInput
        label="Your favorite color"
        placeholder="Pick color"
        key={form.key('color')}
        {...form.getInputProps('color')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoColorInput() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <ColorInput
        label="Your favorite color"
        placeholder="Pick color"
        key={form.key('color')}
        {...form.getInputProps('color')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const colorInput: MantineDemo = {
  type: 'code',
  component: DemoColorInput,
  code: codeColorInput,
};

const codeColorPicker = `
import { ColorPicker, Text, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: '#000000',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Pick color</Text>
      <ColorPicker
        format="hex"
        key={form.key('color')}
        {...form.getInputProps('color')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoColorPicker() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      color: '#000000',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>
        Pick color
      </Text>
      <ColorPicker format="hex" key={form.key('color')} {...form.getInputProps('color')} />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const colorPicker: MantineDemo = {
  type: 'code',
  component: DemoColorPicker,
  code: codeColorPicker,
};

const codeFieldset = `
import { Fieldset, TextInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Fieldset legend="Personal information">
        <TextInput
          label="Name"
          placeholder="Your name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          mt="md"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
      </Fieldset>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoFieldset() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Fieldset legend="Personal information">
        <TextInput
          label="Name"
          placeholder="Your name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          mt="md"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
      </Fieldset>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const fieldset: MantineDemo = {
  type: 'code',
  component: DemoFieldset,
  code: codeFieldset,
};

const codeFileInput = `
import { FileInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      avatar: null,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <FileInput
        label="Avatar"
        placeholder="Upload avatar"
        key={form.key('avatar')}
        {...form.getInputProps('avatar')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoFileInput() {
  const form = useForm<{ avatar: File | null }>({
    mode: 'uncontrolled',
    initialValues: {
      avatar: null,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <FileInput
        label="Avatar"
        placeholder="Upload avatar"
        key={form.key('avatar')}
        {...form.getInputProps('avatar')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const fileInput: MantineDemo = {
  type: 'code',
  component: DemoFileInput,
  code: codeFileInput,
};

const codeInput = `
import { Input, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IMaskInput } from 'react-imask';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      phone: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Input.Wrapper label="Phone" withAsterisk>
        <Input
          component={IMaskInput}
          mask="+7 (000) 000-00-00"
          placeholder="Your phone"
          key={form.key('phone')}
          {...form.getInputProps('phone')}
        />
      </Input.Wrapper>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoInput() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      phone: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Input.Wrapper label="Phone" withAsterisk>
        <Input
          component="input"
          placeholder="Your phone"
          key={form.key('phone')}
          {...form.getInputProps('phone')}
        />
      </Input.Wrapper>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const input: MantineDemo = {
  type: 'code',
  component: DemoInput,
  code: codeInput,
};

const codeJsonInput = `
import { JsonInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      packageJson: '{"name": "mantine"}',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <JsonInput
        label="package.json"
        placeholder="package.json"
        formatOnBlur
        autosize
        minRows={4}
        key={form.key('packageJson')}
        {...form.getInputProps('packageJson')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoJsonInput() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      packageJson: '{"name": "mantine"}',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <JsonInput
        label="package.json"
        placeholder="package.json"
        formatOnBlur
        autosize
        minRows={4}
        key={form.key('packageJson')}
        {...form.getInputProps('packageJson')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const jsonInput: MantineDemo = {
  type: 'code',
  component: DemoJsonInput,
  code: codeJsonInput,
};

const codeNativeSelect = `
import { NativeSelect, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framewrok: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <NativeSelect
        label="Select framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framewrok')}
        {...form.getInputProps('framewrok')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoNativeSelect() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framewrok: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <NativeSelect
        label="Select framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framewrok')}
        {...form.getInputProps('framewrok')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const nativeSelect: MantineDemo = {
  type: 'code',
  component: DemoNativeSelect,
  code: codeNativeSelect,
};

const codeNumberInput = `
import { NumberInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      age: 18,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <NumberInput
        label="Your age"
        placeholder="Your age"
        min={0}
        max={120}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoNumberInput() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      age: 18,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <NumberInput
        label="Your age"
        placeholder="Your age"
        min={0}
        max={120}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const numberInput: MantineDemo = {
  type: 'code',
  component: DemoNumberInput,
  code: codeNumberInput,
};

const codePasswordInput = `
import { PasswordInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      password: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <PasswordInput
        label="Password"
        placeholder="Your password"
        key={form.key('password')}
        {...form.getInputProps('password')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoPasswordInput() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      password: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <PasswordInput
        label="Password"
        placeholder="Your password"
        key={form.key('password')}
        {...form.getInputProps('password')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const passwordInput: MantineDemo = {
  type: 'code',
  component: DemoPasswordInput,
  code: codePasswordInput,
};

const codePinInput = `
import { PinInput, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      pin: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Enter PIN</Text>
      <PinInput
        key={form.key('pin')}
        {...form.getInputProps('pin')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoPinInput() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      pin: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>
        Enter PIN
      </Text>
      <PinInput key={form.key('pin')} {...form.getInputProps('pin')} />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const pinInput: MantineDemo = {
  type: 'code',
  component: DemoPinInput,
  code: codePinInput,
};

const codeRadioGroup = `
import { Radio, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Radio.Group
        label="Select your favorite framework/library"
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      >
        <Group mt="xs">
          <Radio value="react" label="React" />
          <Radio value="mantine" label="Mantine" />
          <Radio value="ng" label="Angular" />
          <Radio value="svelte" label="Svelte" />
        </Group>
      </Radio.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoRadioGroup() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Radio.Group
        label="Select your favorite framework/library"
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      >
        <Group mt="xs">
          <Radio value="react" label="React" />
          <Radio value="mantine" label="Mantine" />
          <Radio value="ng" label="Angular" />
          <Radio value="svelte" label="Svelte" />
        </Group>
      </Radio.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const radioGroup: MantineDemo = {
  type: 'code',
  component: DemoRadioGroup,
  code: codeRadioGroup,
};

const codeRangeSlider = `
import { RangeSlider, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      range: [20, 80] as [number, number],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Price range</Text>
      <RangeSlider
        key={form.key('range')}
        {...form.getInputProps('range')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoRangeSlider() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      range: [20, 80] as [number, number],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>
        Price range
      </Text>
      <RangeSlider key={form.key('range')} {...form.getInputProps('range')} />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const rangeSlider: MantineDemo = {
  type: 'code',
  component: DemoRangeSlider,
  code: codeRangeSlider,
};

const codeRating = `
import { Rating, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      rating: 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Rating</Text>
      <Rating
        key={form.key('rating')}
        {...form.getInputProps('rating')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoRating() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      rating: 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>
        Rating
      </Text>
      <Rating key={form.key('rating')} {...form.getInputProps('rating')} />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const rating: MantineDemo = {
  type: 'code',
  component: DemoRating,
  code: codeRating,
};

const codeSegmentedControl = `
import { SegmentedControl, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framewrok: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Select framework</Text>
      <SegmentedControl
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framewrok')}
        {...form.getInputProps('framewrok')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoSegmentedControl() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framewrok: 'react',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>
        Select framework
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framewrok')}
        {...form.getInputProps('framewrok')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const segmentedControl: MantineDemo = {
  type: 'code',
  component: DemoSegmentedControl,
  code: codeSegmentedControl,
};

const codeSlider = `
import { Slider, Button, Group, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      value: 40,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>Volume</Text>
      <Slider
        key={form.key('value')}
        {...form.getInputProps('value')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoSlider() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      value: 40,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Text size="sm" fw={500} mb={3}>
        Volume
      </Text>
      <Slider key={form.key('value')} {...form.getInputProps('value')} />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const slider: MantineDemo = {
  type: 'code',
  component: DemoSlider,
  code: codeSlider,
};

const codeSwitch = `
import { Switch, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      notifications: false,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Switch
        label="Enable notifications"
        key={form.key('notifications')}
        {...form.getInputProps('notifications', { type: 'checkbox' })}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoSwitch() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      notifications: false,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Switch
        label="Enable notifications"
        key={form.key('notifications')}
        {...form.getInputProps('notifications', { type: 'checkbox' })}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const switchDemo: MantineDemo = {
  type: 'code',
  component: DemoSwitch,
  code: codeSwitch,
};

const codeSwitchGroup = `
import { Switch, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      favFrameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Switch.Group
        label="Select your favorite frameworks/libraries"
        key={form.key('favFrameworks')}
        {...form.getInputProps('favFrameworks')}
      >
        <Group mt="xs">
          <Switch value="react" label="React" />
          <Switch value="mantine" label="Mantine" />
          <Switch value="ng" label="Angular" />
          <Switch value="svelte" label="Svelte" />
        </Group>
      </Switch.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoSwitchGroup() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      favFrameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Switch.Group
        label="Select your favorite frameworks/libraries"
        key={form.key('favFrameworks')}
        {...form.getInputProps('favFrameworks')}
      >
        <Group mt="xs">
          <Switch value="react" label="React" />
          <Switch value="mantine" label="Mantine" />
          <Switch value="ng" label="Angular" />
          <Switch value="svelte" label="Svelte" />
        </Group>
      </Switch.Group>

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const switchGroup: MantineDemo = {
  type: 'code',
  component: DemoSwitchGroup,
  code: codeSwitchGroup,
};

const codeTextarea = `
import { Textarea, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      message: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Textarea
        label="Your message"
        placeholder="Your message"
        key={form.key('message')}
        {...form.getInputProps('message')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoTextarea() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      message: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Textarea
        label="Your message"
        placeholder="Your message"
        key={form.key('message')}
        {...form.getInputProps('message')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const textarea: MantineDemo = {
  type: 'code',
  component: DemoTextarea,
  code: codeTextarea,
};

const codeAutocomplete = `
import { Autocomplete, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Autocomplete
        label="Pick framework"
        placeholder="Pick framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoAutocomplete() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Autocomplete
        label="Pick framework"
        placeholder="Pick framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const autocomplete: MantineDemo = {
  type: 'code',
  component: DemoAutocomplete,
  code: codeAutocomplete,
};

const codeMultiSelect = `
import { MultiSelect, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      frameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <MultiSelect
        label="Pick frameworks"
        placeholder="Pick frameworks"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('frameworks')}
        {...form.getInputProps('frameworks')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoMultiSelect() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      frameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <MultiSelect
        label="Pick frameworks"
        placeholder="Pick frameworks"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('frameworks')}
        {...form.getInputProps('frameworks')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const multiSelect: MantineDemo = {
  type: 'code',
  component: DemoMultiSelect,
  code: codeMultiSelect,
};

const codeSelect = `
import { Select, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Select
        label="Pick framework"
        placeholder="Pick framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoSelect() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      framework: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Select
        label="Pick framework"
        placeholder="Pick framework"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        key={form.key('framework')}
        {...form.getInputProps('framework')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const select: MantineDemo = {
  type: 'code',
  component: DemoSelect,
  code: codeSelect,
};

const codeTagsInput = `
import { TagsInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      frameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TagsInput
        label="Press Enter to submit a tag"
        placeholder="Enter tag"
        key={form.key('frameworks')}
        {...form.getInputProps('frameworks')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`;

function DemoTagsInput() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      frameworks: [],
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TagsInput
        label="Press Enter to submit a tag"
        placeholder="Enter tag"
        key={form.key('frameworks')}
        {...form.getInputProps('frameworks')}
      />

      <Group mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export const tagsInput: MantineDemo = {
  type: 'code',
  component: DemoTagsInput,
  code: codeTagsInput,
};
