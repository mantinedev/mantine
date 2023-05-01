import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Chip, Group } from '@mantine/core';

const code = `
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group position="center">
          <Chip value="default" variant="outline">
            Outline default
          </Chip>
          <Chip value="checked" variant="outline">
            Outline checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="outline">
            Outline checked disabled
          </Chip>

          <Chip value="default" variant="light">
            Light default
          </Chip>
          <Chip value="checked" variant="light">
            Light checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="light">
            Light checked disabled
          </Chip>

          <Chip value="default" variant="filled">
            Filled default
          </Chip>
          <Chip value="checked" variant="filled">
            Filled checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="filled">
            Filled checked disabled
          </Chip>
        </Group>
      </Chip.Group>

      <fieldset disabled>
        <Chip.Group multiple>
          <Group position="center">
            <Chip checked variant="outline">
                Outline checked disabled by fieldset
            </Chip>
            <Chip checked variant="light">
                Light checked disabled by fieldset
            </Chip>
            <Chip checked variant="filled">
              Filled checked disabled by fieldset
            </Chip>
          </Group>
        </Chip.Group>
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group position="center">
          <Chip value="default" variant="outline">
            Outline default
          </Chip>
          <Chip value="checked" variant="outline">
            Outline checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="outline">
            Outline checked disabled
          </Chip>
        </Group>
        <fieldset disabled>
            <Chip type="checkbox" value="checked-disabled" variant="outline">
              Disabled with fieldset
            </Chip>
        </fieldset>
      </Chip.Group>

      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group position="center" mt="md">
          <Chip value="default" variant="light">
            Light default
          </Chip>
          <Chip value="checked" variant="light">
            Light checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="light">
            Light checked disabled
          </Chip>
          <fieldset disabled>
            <Chip value="checked-disabled" variant="light">
              Disabled with fieldset
            </Chip>
          </fieldset>
        </Group>
      </Chip.Group>

      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group position="center" mt="md">
          <Chip value="default" variant="filled">
            Filled default
          </Chip>
          <Chip value="checked" variant="filled">
            Filled checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="filled">
            Filled checked disabled
          </Chip>
          <fieldset disabled>
            <Chip value="checked-disabled" variant="filled">
              Disabled with fieldset
            </Chip>
          </fieldset>
        </Group>
      </Chip.Group>

      <br />

      <fieldset disabled>
        <Chip.Group multiple>
          <Group position="center">
            <Chip checked variant="outline">
              Outline checked disabled by fieldset
            </Chip>
            <Chip checked variant="light">
              Light checked disabled by fieldset
            </Chip>
            <Chip checked variant="filled">
              Filled checked disabled by fieldset
            </Chip>
          </Group>
        </Chip.Group>
      </fieldset>
    </>
  );
}

export const states: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
