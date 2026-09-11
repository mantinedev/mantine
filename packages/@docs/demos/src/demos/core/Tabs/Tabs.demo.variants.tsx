import { ChatCircleIcon, GearSixIcon, ImageIcon } from '@phosphor-icons/react';
import { Stack, Tabs, TabsVariant } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack, Tabs, TabsVariant } from '@mantine/core';
import { ImageIcon, ChatCircleIcon, GearSixIcon } from '@phosphor-icons/react';

const variants: TabsVariant[] = ['inset', 'pill-compact', 'contained', 'enclosed'];

function Demo() {
  return (
    <Stack gap="xl">
      {variants.map((variant) => {
        const pt = variant === 'enclosed' ? undefined : 'xs';

        return (
          <Tabs key={variant} variant={variant} defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" leftSection={<ImageIcon size={12} />}>
                Gallery
              </Tabs.Tab>
              <Tabs.Tab value="messages" leftSection={<ChatCircleIcon size={12} />}>
                Messages
              </Tabs.Tab>
              <Tabs.Tab value="settings" leftSection={<GearSixIcon size={12} />}>
                Settings
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt={pt}>
              Gallery tab content
            </Tabs.Panel>
            <Tabs.Panel value="messages" pt={pt}>
              Messages tab content
            </Tabs.Panel>
            <Tabs.Panel value="settings" pt={pt}>
              Settings tab content
            </Tabs.Panel>
          </Tabs>
        );
      })}
    </Stack>
  );
}
`;

const variantsList: TabsVariant[] = ['inset', 'pill-compact', 'contained', 'enclosed'];

function Demo() {
  return (
    <Stack gap="xl">
      {variantsList.map((variant) => {
        const pt = variant === 'enclosed' ? undefined : 'xs';

        return (
          <Tabs key={variant} variant={variant} defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" leftSection={<ImageIcon size={12} />}>
                Gallery
              </Tabs.Tab>
              <Tabs.Tab value="messages" leftSection={<ChatCircleIcon size={12} />}>
                Messages
              </Tabs.Tab>
              <Tabs.Tab value="settings" leftSection={<GearSixIcon size={12} />}>
                Settings
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt={pt}>
              Gallery tab content
            </Tabs.Panel>
            <Tabs.Panel value="messages" pt={pt}>
              Messages tab content
            </Tabs.Panel>
            <Tabs.Panel value="settings" pt={pt}>
              Settings tab content
            </Tabs.Panel>
          </Tabs>
        );
      })}
    </Stack>
  );
}

export const variants: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
