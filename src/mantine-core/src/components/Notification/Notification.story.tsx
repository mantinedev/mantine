import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  CheckIcon,
  Cross2Icon,
  FaceIcon,
  ExclamationTriangleIcon,
  BookmarkIcon,
} from '@modulz/radix-icons';
import { Notification } from './Notification';

const demo = (
  <div style={{ padding: 60 }}>
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
        mt="xl"
        title="NotificationTitleSoLargeThatItWillUseOverflowEllipsisOption"
      >
        NotificationDescriptionSoLargeThatItShouldUseOverflowEllipsis
      </Notification>

      <Notification
        onClose={() => {}}
        mt="xl"
        title="Too large title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, facilis eveniet. Voluptas quo voluptate laudantium in nesciunt modi accusamus ipsam, iusto pariatur excepturi et porro minima expedita vitae mollitia quae!"
      >
        Title seems to be too large, you better put this content in description
      </Notification>

      <Notification
        color="gray"
        onClose={() => {}}
        mt="xl"
        title="Muted notification with icon"
        icon={<FaceIcon />}
      >
        Something generic happened but with icon
      </Notification>

      <Notification
        color="teal"
        onClose={() => {}}
        mt="xl"
        title="Success notification with icon"
        icon={<CheckIcon />}
      >
        Your action was a complete success!
      </Notification>

      <Notification
        color="red"
        onClose={() => {}}
        mt="xl"
        title="Danger notification with icon"
        icon={<Cross2Icon />}
      >
        You have done something wrong, too bad
      </Notification>

      <Notification
        color="yellow"
        onClose={() => {}}
        mt="xl"
        title="Warning notification with icon"
        icon={<ExclamationTriangleIcon />}
      >
        This action will not work very soon
      </Notification>

      <Notification
        color="blue"
        onClose={() => {}}
        mt="xl"
        title="Primary notification with icon"
        icon={<BookmarkIcon />}
      >
        You have achieved something important
      </Notification>

      <Notification color="gray" onClose={() => {}} title="Muted notification without icon" mt="xl">
        Something generic happened
      </Notification>

      <Notification
        color="green"
        onClose={() => {}}
        mt="xl"
        title="Success notification without icon"
      >
        Your action was a complete success!
      </Notification>

      <Notification
        color="orange"
        onClose={() => {}}
        mt="xl"
        title="Danger notification without icon"
      >
        You have done something wrong, too bad
      </Notification>

      <Notification
        color="grape"
        onClose={() => {}}
        mt="xl"
        title="Grape notification without icon"
      >
        This action will not work very soon
      </Notification>

      <Notification color="cyan" onClose={() => {}} mt="xl" title="Primary notification">
        You have achieved something important
      </Notification>

      <Notification
        color="gray"
        onClose={() => {}}
        mt="xl"
        title="Notification with a lot of content"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea aliquid
        quo illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut asperiores ut maxime
        doloremque. Cumque.
      </Notification>

      <Notification
        color="indigo"
        onClose={() => {}}
        mt="xl"
        title="Icon notification with a lot of content"
        icon={<FaceIcon />}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea aliquid
        quo illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut asperiores ut maxime
        doloremque. Cumque.
      </Notification>

      <Notification
        color="orange"
        onClose={() => {}}
        mt="xl"
        icon={<FaceIcon />}
        title="NotificationWithIconAndTitleSoLargeThatItWillUseOverflowEllipsisOption"
      >
        NotificationWithIconAndDescriptionSoLargeThatItShouldUseOverflowEllipsis
      </Notification>

      <Notification
        color="pink"
        onClose={() => {}}
        disallowClose
        mt="xl"
        icon={<FaceIcon />}
        title="NotificationWithIconDisallowCloseAndTitleSoLargeThatItWillUseOverflowEllipsisOption"
      >
        NotificationWithIconDisallowCloseAndDescriptionSoLargeThatItShouldUseOverflowEllipsis
      </Notification>

      <Notification color="grape" onClose={() => {}} mt="xl">
        Notification without title
      </Notification>

      <Notification color="grape" onClose={() => {}} mt="xl">
        NotificationWithoutTitleAndTheDescriptionSoLargeThatItShouldUseOverflowEllipsis
      </Notification>

      <Notification color="pink" onClose={() => {}} mt="xl" icon={<CheckIcon />}>
        Notification without title but with icon
      </Notification>
    </div>
  </div>
);

storiesOf('Notification', module).add('All variants', () => demo);
