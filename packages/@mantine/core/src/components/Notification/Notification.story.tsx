import React from 'react';
import {
  IconBookmark,
  IconCheck,
  IconExclamationMark,
  IconMoodSmile,
  IconX,
} from '@tabler/icons-react';
import { Notification, NotificationProps } from './Notification';

export default { title: 'Notification' };

export function SingleNotification() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Notification onClose={() => {}} title="Notification title">
        Notification body
      </Notification>
    </div>
  );
}

function NotificationVariants(props: NotificationProps) {
  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'space-between' }}>
      <Notification variant="outline" {...props}></Notification>
      <Notification variant="filled" {...props}></Notification>
      <Notification variant="light" {...props}></Notification>
    </div>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 60 }}>
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        <NotificationVariants
          loading
          withCloseButton={false}
          color="indigo"
          onClose={() => {}}
          title="You will not close this notification"
        >
          It is loading you have to wait
        </NotificationVariants>

        <NotificationVariants
          onClose={() => {}}
          mt="xl"
          title="NotificationTitleSoLargeThatItWillUseOverflowEllipsisOption"
        >
          NotificationDescriptionSoLargeThatItShouldUseOverflowEllipsis
        </NotificationVariants>

        <NotificationVariants
          onClose={() => {}}
          mt="xl"
          title="Too large title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, facilis eveniet. Voluptas quo voluptate laudantium in nesciunt modi accusamus ipsam, iusto pariatur excepturi et porro minima expedita vitae mollitia quae!"
        >
          Title seems to be too large, you better put this content in description
        </NotificationVariants>

        <NotificationVariants
          color="gray"
          onClose={() => {}}
          mt="xl"
          title="Muted notification with icon"
          icon={<IconMoodSmile size={18} />}
        >
          Something generic happened but with icon
        </NotificationVariants>

        <NotificationVariants
          color="teal"
          onClose={() => {}}
          mt="xl"
          title="Success notification with icon"
          icon={<IconCheck size={18} />}
        >
          Your action was a complete success!
        </NotificationVariants>

        <NotificationVariants
          color="red"
          onClose={() => {}}
          mt="xl"
          title="Danger notification with icon"
          icon={<IconX size={18} />}
        >
          You have done something wrong, too bad
        </NotificationVariants>

        <NotificationVariants
          color="yellow"
          onClose={() => {}}
          mt="xl"
          title="Warning notification with icon"
          icon={<IconExclamationMark size={18} />}
        >
          This action will not work very soon
        </NotificationVariants>

        <NotificationVariants
          color="blue"
          onClose={() => {}}
          mt="xl"
          title="Primary notification with icon"
          icon={<IconBookmark size={18} />}
        >
          You have achieved something important
        </NotificationVariants>

        <NotificationVariants
          color="gray"
          onClose={() => {}}
          title="Muted notification without icon"
          mt="xl"
        >
          Something generic happened
        </NotificationVariants>

        <NotificationVariants
          color="green"
          onClose={() => {}}
          mt="xl"
          title="Success notification without icon"
        >
          Your action was a complete success!
        </NotificationVariants>

        <NotificationVariants
          color="orange"
          onClose={() => {}}
          mt="xl"
          title="Danger notification without icon"
        >
          You have done something wrong, too bad
        </NotificationVariants>

        <NotificationVariants
          color="grape"
          onClose={() => {}}
          mt="xl"
          title="Grape notification without icon"
        >
          This action will not work very soon
        </NotificationVariants>

        <NotificationVariants color="cyan" onClose={() => {}} mt="xl" title="Primary notification">
          You have achieved something important
        </NotificationVariants>

        <NotificationVariants
          color="gray"
          onClose={() => {}}
          mt="xl"
          title="Notification with a lot of content"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea aliquid
          quo illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut asperiores ut
          maxime doloremque. Cumque.
        </NotificationVariants>

        <NotificationVariants
          color="indigo"
          onClose={() => {}}
          mt="xl"
          title="Icon notification with a lot of content"
          icon={<IconMoodSmile size={18} />}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea aliquid
          quo illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut asperiores ut
          maxime doloremque. Cumque.
        </NotificationVariants>

        <NotificationVariants
          color="orange"
          onClose={() => {}}
          mt="xl"
          icon={<IconMoodSmile size={18} />}
          title="NotificationWithIconAndTitleSoLargeThatItWillUseOverflowEllipsisOption"
        >
          NotificationWithIconAndDescriptionSoLargeThatItShouldUseOverflowEllipsis
        </NotificationVariants>

        <NotificationVariants
          color="pink"
          onClose={() => {}}
          withCloseButton={false}
          mt="xl"
          icon={<IconMoodSmile size={18} />}
          title="NotificationWithIconDisallowCloseAndTitleSoLargeThatItWillUseOverflowEllipsisOption"
        >
          NotificationWithIconDisallowCloseAndDescriptionSoLargeThatItShouldUseOverflowEllipsis
        </NotificationVariants>

        <NotificationVariants color="grape" onClose={() => {}} mt="xl">
          Notification without title
        </NotificationVariants>

        <NotificationVariants color="grape" onClose={() => {}} mt="xl">
          NotificationWithoutTitleAndTheDescriptionSoLargeThatItShouldUseOverflowEllipsis
        </NotificationVariants>

        <NotificationVariants
          color="pink"
          onClose={() => {}}
          mt="xl"
          icon={<IconCheck size={18} />}
        >
          Notification without title but with icon
        </NotificationVariants>

        <NotificationVariants withBorder color="gray" onClose={() => {}} mt="xl">
          Notification with border
        </NotificationVariants>
      </div>
    </div>
  );
}

function NotificationWithStates(props: NotificationProps) {
  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'space-between' }}>
      <Notification {...props}></Notification>
      <Notification icon={<IconMoodSmile size={18} />} {...props}></Notification>
      <Notification loading {...props}></Notification>
    </div>
  );
}

export function AutoContrast() {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <NotificationWithStates
        key={index}
        color={`blue.${index}`}
        variant="filled"
        autoContrast
        title="This is a notification!"
      >
        This is notification information
      </NotificationWithStates>
    ));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        padding: 40,
      }}
    >
      {buttons}
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Notification withBorder color="gray" onClose={() => {}} mt="xl" unstyled>
        Notification with border
      </Notification>
    </div>
  );
}
