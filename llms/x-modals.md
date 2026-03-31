# Modals manager
Package: @mantine/modals
Import: import { Modals manager } from '@mantine/modals';
Description: Centralized modals manager with option to handle state of multi-step modals

## Installation

```bash
yarn add @mantine/modals
```

```bash
npm install @mantine/modals
```

## Setup ModalsProvider

Wrap your app with `ModalsProvider` component:

```tsx
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

function Demo() {
  return (
    <MantineProvider>
      <ModalsProvider>{/* Your app here */}</ModalsProvider>
    </MantineProvider>
  );
}
```

## Confirm modal

The @mantine/modals package includes a special modal that can be used for confirmations.
The component includes confirm and cancel buttons and supports children to display additional
information about the action. Use the `openConfirmModal` function to open a confirm modal:

```tsx
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
```


`openConfirmModal` function accepts one argument with the following properties:

* `modalId` – modal id, defaults to a random id, can be used to close the modal programmatically
* `children` – additional modal content displayed before actions
* `onCancel` – called when the cancel button is clicked
* `onConfirm` – called when the confirm button is clicked
* `closeOnConfirm` – should the modal be closed when the confirm button is clicked, defaults to `true`
* `closeOnCancel` – should the modal be closed when the cancel button is clicked, defaults to `true`
* `cancelProps` – cancel button props
* `confirmProps` – confirm button props
* `groupProps` – buttons [Group](https://mantine.dev/llms/core-group.md) props
* `labels` – cancel and confirm button labels, can be defined on ModalsProvider

Using these properties, you can customize the confirm modal to match current context requirements:

```tsx
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <Button onClick={openDeleteModal} color="red">Delete account</Button>;
}
```


To set up shared labels for confirm modals, set `labels` on `ModalsProvider`:

```tsx
import { ModalsProvider } from '@mantine/modals';

function Demo() {
  return (
    <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>
      {/* Your app here */}
    </ModalsProvider>
  );
}
```

## Context modals

You can define any number of modals in the ModalsProvider context:

```tsx
import { Button, Text } from '@mantine/core';
import { ContextModalProps, ModalsProvider } from '@mantine/modals';

const TestModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

function Demo() {
  return (
    <ModalsProvider
      modals={{ demonstration: TestModal /* ...other modals */ }}
    >
      {/* Your app here */}
    </ModalsProvider>
  );
}
```

And then open one of these modals with the `modals.openContextModal` function.
The `modals.openContextModal` function accepts 2 arguments: modal key (should match one defined on ModalsProvider) and modal props:

```tsx
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openContextModal({
          modal: 'demonstration',
          title: 'Test modal from context',
          innerProps: {
            modalBody:
              'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
          },
        })
      }
    >
      Open demonstration context modal
    </Button>
  );
}
```


## Typesafe context modals

By default, `innerProps` and `modal` are not typesafe. You can add type safety with a TypeScript module declaration.

```tsx
const TestModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);
const modals = {
  demonstration: TestModal,
  /* ...other modals */
};
declare module '@mantine/modals' {
  export interface MantineModalsOverride {
    modals: typeof modals;
  }
}
function Demo() {
  return (
    <ModalsProvider modals={modals}>
      {/* Your app here */}
    </ModalsProvider>
  );
}
```

Type-safe context modals will force you to use the correct types for `openContextModal`:

```tsx
import { closeModal, openContextModal } from '@mantine/modals';

openContextModal({
  modal: 'demonstration',
  title: 'Test modal from context',
  innerProps: {
    modalBody:
      'This modal was defined in ModalsProvider, you can open it anywhere in your app with useModals hook',
  },
});
closeModal('demonstration');
```

## Content modals

With the `modals.open` function, you can open a modal with any content:

```tsx
import { TextInput, Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}
```


## Multiple opened modals

You can open multiple layers of modals. Every opened modal is added as the first element in the modals queue.
To close all opened modals, call the `modals.closeAll()` function:

```tsx
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openConfirmModal({
          title: 'Please confirm your action',
          closeOnConfirm: false,
          labels: { confirm: 'Next modal', cancel: 'Close modal' },
          children: (
            <Text size="sm">
              This action is so important that you are required to confirm it with a modal. Please
              click one of these buttons to proceed.
            </Text>
          ),
          onConfirm: () =>
            modals.openConfirmModal({
              title: 'This is modal at second layer',
              labels: { confirm: 'Close modal', cancel: 'Back' },
              closeOnConfirm: false,
              children: (
                <Text size="sm">
                  When this modal is closed modals state will revert to first modal
                </Text>
              ),
              onConfirm: modals.closeAll,
            }),
        })
      }
    >
      Open multiple steps modal
    </Button>
  );
}
```


## Modal props

You can pass props down to the [Modal](https://mantine.dev/llms/core-modal.md) component by adding them to the
argument of every `modals.x` function. Example of setting the `radius`, `size`, and `withCloseButton`
props:

```tsx
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    size: 'sm',
    withCloseButton: false,
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
```


## Dynamic content and the modals manager

The modals manager allows you to dynamically update the content and properties of both standard and context modals after they are opened.

To update regular modals, use the `modals.updateModal` function:

```tsx
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        const modalId = modals.open({
          title: 'Initial Modal Title',
          children: <Text>This text will update in 2 seconds.</Text>,
        });

        setTimeout(() => {
          modals.updateModal({
            modalId,
            title: 'Updated Modal Title',
            children: (
              <Text size="sm" c="dimmed">
                This is the updated content of the modal.
              </Text>
            ),
          });
        }, 2000);
      }}
    >
      Open updating modal
    </Button>
  );
}
```


Context modals can also be updated dynamically using `modals.updateContextModal`:

```tsx
import { Button, Text, Stack, Center, Loader } from '@mantine/core';
import { modals, ContextModalProps, ModalsProvider } from '@mantine/modals';
import { CheckIcon } from '@phosphor-icons/react';

const TestModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string, loading: boolean }>) => (
  <>
    <Stack>
      <Text size="sm">{innerProps.modalBody}</Text>
      <Center>
        {innerProps.loading ? (
          <Loader size={32}/>
        ): (
          <CheckIcon size={23} color="var(--mantine-color-teal-6)" />
        )}
      </Center>
    </Stack>
    <Button fullWidth mt="md" disabled={innerProps.loading} onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

function Demo() {
  return (
    <ModalsProvider
      modals={{ demonstration: TestModal /* ...other modals */ }}
    >
      <Button
        onClick={() => {
          const modalId = modals.openContextModal({
            modal: 'asyncDemonstration',
            title: 'Processing...',
            closeOnEscape: false,
            closeOnClickOutside: false,
            closeButtonProps:{ disabled:true },
            innerProps: {
              modalBody:
                'You cannot close this modal until 2 seconds have passed.',
              loading: true,
            },
          });

          setTimeout(() => {
            modals.updateContextModal({
              modalId,
              title: "Processing Complete!",
              closeOnEscape: true,
              closeOnClickOutside: true,
              closeButtonProps:{ disabled: false },
              innerProps: {
                modalBody:
                  'You can now close the modal.',
                loading: false,
              },
            })
          }, 2000);
        }}
      >
        Open updating context modal
      </Button>
    </ModalsProvider>
  );
}
```



#### Props

**Modals.Provider props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Your app |
| labels | ConfirmLabels | - | Confirm modal labels |
| modalProps | ModalSettings | - | Shared Modal component props, applied for every modal |
| modals | Record<string, FC<ContextModalProps<any>>> | - | Predefined modals |