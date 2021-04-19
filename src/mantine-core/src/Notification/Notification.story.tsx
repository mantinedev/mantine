import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  CheckIcon,
  Cross2Icon,
  FaceIcon,
  ExclamationTriangleIcon,
  BookmarkIcon,
} from '@modulz/radix-icons';
import { MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import { Notification } from './Notification';

storiesOf('@mantine/core/Notification', module)
  .add('General Usage', () => (
    <MantineProvider>
      <div style={{ padding: 60, backgroundColor: DEFAULT_THEME.colors.gray[0] }}>
        <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
          <Notification
            loading
            disallowClose
            color="indigo"
            onClose={() => {}}
            title="You will not close this notification"
          >
            It is loading you have to wait
          </Notification>

          <Notification
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="NotificationTitleSoLargeThatItWillUseOverflowEllipsisOption"
          >
            NotificationDescriptionSoLargeThatItShouldUseOverflowEllipsis
          </Notification>

          <Notification
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Too large title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, facilis eveniet. Voluptas quo voluptate laudantium in nesciunt modi accusamus ipsam, iusto pariatur excepturi et porro minima expedita vitae mollitia quae!"
          >
            Title seems to be too large, you better put this content in description
          </Notification>

          <Notification
            color="gray"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Muted notification with icon"
            icon={<FaceIcon />}
          >
            Something generic happened but with icon
          </Notification>

          <Notification
            color="teal"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Success notification with icon"
            icon={<CheckIcon />}
          >
            Your action was a complete success!
          </Notification>

          <Notification
            color="red"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Danger notification with icon"
            icon={<Cross2Icon />}
          >
            You have done something wrong, too bad
          </Notification>

          <Notification
            color="yellow"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Warning notification with icon"
            icon={<ExclamationTriangleIcon />}
          >
            This action will not work very soon
          </Notification>

          <Notification
            color="blue"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Primary notification with icon"
            icon={<BookmarkIcon />}
          >
            You have achieved something important
          </Notification>

          <Notification
            color="gray"
            onClose={() => {}}
            title="Muted notification without icon"
            style={{ marginTop: 20 }}
          >
            Something generic happened
          </Notification>

          <Notification
            color="green"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Success notification without icon"
          >
            Your action was a complete success!
          </Notification>

          <Notification
            color="orange"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Danger notification without icon"
          >
            You have done something wrong, too bad
          </Notification>

          <Notification
            color="grape"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Grape notification without icon"
          >
            This action will not work very soon
          </Notification>

          <Notification
            color="cyan"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Primary notification"
          >
            You have achieved something important
          </Notification>

          <Notification
            color="gray"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Notification with a lot of content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea
            aliquid quo illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut
            asperiores ut maxime doloremque. Cumque.
          </Notification>

          <Notification
            color="indigo"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Icon notification with a lot of content"
            icon={<FaceIcon />}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea
            aliquid quo illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut
            asperiores ut maxime doloremque. Cumque.
          </Notification>

          <Notification color="grape" onClose={() => {}} style={{ marginTop: 20 }}>
            Notification without title
          </Notification>

          <Notification
            color="pink"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            icon={<CheckIcon />}
          >
            Notification without title but with icon
          </Notification>
        </div>
      </div>
    </MantineProvider>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div style={{ padding: 60, backgroundColor: DEFAULT_THEME.colors.dark[7] }}>
        <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
          <Notification
            loading
            disallowClose
            color="indigo"
            onClose={() => {}}
            title="You will not close this notification"
          >
            It is loading you have to wait
          </Notification>

          <Notification
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="NotificationTitleSoLargeThatItWillUseOverflowEllipsisOption"
          >
            NotificationDescriptionSoLargeThatItShouldUseOverflowEllipsis
          </Notification>

          <Notification
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Too large title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, facilis eveniet. Voluptas quo voluptate laudantium in nesciunt modi accusamus ipsam, iusto pariatur excepturi et porro minima expedita vitae mollitia quae!"
          >
            Title seems to be too large, you better put this content in description
          </Notification>

          <Notification
            color="gray"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Muted notification with icon"
            icon={<FaceIcon />}
          >
            Something generic happened but with icon
          </Notification>

          <Notification
            color="teal"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Success notification with icon"
            icon={<CheckIcon />}
          >
            Your action was a complete success!
          </Notification>

          <Notification
            color="red"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Danger notification with icon"
            icon={<Cross2Icon />}
          >
            You have done something wrong, too bad
          </Notification>

          <Notification
            color="yellow"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Warning notification with icon"
            icon={<ExclamationTriangleIcon />}
          >
            This action will not work very soon
          </Notification>

          <Notification
            color="blue"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Primary notification with icon"
            icon={<BookmarkIcon />}
          >
            You have achieved something important
          </Notification>

          <Notification
            color="gray"
            onClose={() => {}}
            title="Muted notification without icon"
            style={{ marginTop: 20 }}
          >
            Something generic happened
          </Notification>

          <Notification
            color="green"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Success notification without icon"
          >
            Your action was a complete success!
          </Notification>

          <Notification
            color="orange"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Danger notification without icon"
          >
            You have done something wrong, too bad
          </Notification>

          <Notification
            color="grape"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Grape notification without icon"
          >
            This action will not work very soon
          </Notification>

          <Notification
            color="cyan"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Primary notification"
          >
            You have achieved something important
          </Notification>

          <Notification
            color="gray"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Notification with a lot of content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea
            aliquid quo illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut
            asperiores ut maxime doloremque. Cumque.
          </Notification>

          <Notification
            color="indigo"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            title="Icon notification with a lot of content"
            icon={<FaceIcon />}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea
            aliquid quo illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut
            asperiores ut maxime doloremque. Cumque.
          </Notification>

          <Notification color="grape" onClose={() => {}} style={{ marginTop: 20 }}>
            Notification without title
          </Notification>

          <Notification
            color="pink"
            onClose={() => {}}
            style={{ marginTop: 20 }}
            icon={<CheckIcon />}
          >
            Notification without title but with icon
          </Notification>
        </div>
      </div>
    </MantineProvider>
  ));
