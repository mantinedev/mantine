import React from 'react';
import { storiesOf } from '@storybook/react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FileSubmoduleIcon, ChevronDownIcon } from '@primer/octicons-react';
import { ThemeIcon } from '../../ThemeIcon';
import { Navbar } from './Navbar';

const lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perspiciatis possimus, sapiente dolorem magnam quibusdam sint temporibus explicabo perferendis delectus!';

storiesOf('@mantine/core/AppShell/Navbar', module)
  .add('General usage', () => (
    <Navbar>
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section>Second section</Navbar.Section>
      <Navbar.Section grow style={{ backgroundColor: 'silver' }}>
        Grow section
      </Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
    </Navbar>
  ))
  .add('Grow section with scrollbars', () => (
    <Navbar>
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section grow style={{ backgroundColor: 'silver' }}>
        <Scrollbars>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <p key={i}>{lorem}</p>
            ))}
        </Scrollbars>
      </Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
      <Navbar.Section>Last section 2</Navbar.Section>
    </Navbar>
  ))
  .add('Fixed position', () => (
    <Navbar fixed position={{ top: 60, left: 0 }} height="calc(100vh - 60px)">
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section>Second section</Navbar.Section>
      <Navbar.Section grow style={{ backgroundColor: 'silver' }}>
        Grow section
      </Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
    </Navbar>
  ))
  .add('With links', () => (
    <Navbar>
      <Navbar.Link<'a'>
        href="#"
        onClick={(e) => e.preventDefault()}
        icon={
          <ThemeIcon color="violet" size="md">
            <FileSubmoduleIcon size={12} />
          </ThemeIcon>
        }
      >
        With icon
      </Navbar.Link>
      <Navbar.Link<'a'> href="#" onClick={(e) => e.preventDefault()}>
        Anchor link
      </Navbar.Link>
      <Navbar.Link component="button">Button link</Navbar.Link>
      <Navbar.Link component="div">Div link</Navbar.Link>
      <Navbar.Link component="div" rightSection={<ChevronDownIcon size={12} />}>
        With right section
      </Navbar.Link>
      <Navbar.Link component="div" active>
        Active link
      </Navbar.Link>
      <Navbar.Link component="div">
        Link that is so large that it does not fit on a single line
      </Navbar.Link>
      <Navbar.Link
        component="div"
        icon={
          <ThemeIcon color="violet" size="md">
            <FileSubmoduleIcon size={12} />
          </ThemeIcon>
        }
      >
        Link that is so large that it does not fit on a single line with icon
      </Navbar.Link>
      <Navbar.Link
        component="div"
        icon={
          <ThemeIcon color="violet" size="md">
            <FileSubmoduleIcon size={12} />
          </ThemeIcon>
        }
      >
        SuperLargeWordThatCanOverflowAndBreakSuchAGreatLayout
      </Navbar.Link>
    </Navbar>
  ))
  .add('Links group', () => (
    <Navbar>
      <Navbar.LinksGroup
        label="Links group"
        icon={
          <ThemeIcon color="violet" variant="light" size="md">
            <FileSubmoduleIcon size={14} />
          </ThemeIcon>
        }
      >
        <Navbar.Link>First link</Navbar.Link>
        <Navbar.Link>Second link</Navbar.Link>
        <Navbar.Link active>Third link</Navbar.Link>
        <Navbar.Link>Fourth link</Navbar.Link>
        <Navbar.Link>Fifth link</Navbar.Link>
        <Navbar.LinksGroup
          transitionDuration={0}
          label="Links group nested"
          icon={
            <ThemeIcon color="violet" variant="light" size="md">
              <FileSubmoduleIcon size={14} />
            </ThemeIcon>
          }
        >
          <Navbar.Link>First link</Navbar.Link>
          <Navbar.Link>Second link</Navbar.Link>
          <Navbar.Link active>Third link</Navbar.Link>
          <Navbar.Link>Fourth link</Navbar.Link>
          <Navbar.Link>Fifth link</Navbar.Link>
        </Navbar.LinksGroup>
      </Navbar.LinksGroup>
      <p>other content</p>
    </Navbar>
  ));
