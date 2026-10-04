import { HoverCardDemos } from '@docs/demos';
import { Layout } from '@/layout';
import { MDX_DATA } from '@/mdx';

export default Layout(MDX_DATA.HoverCard);

## Usage

<Demo data={HoverCardDemos.usage} />

## Delays

Set open and close delays in ms with the `openDelay` and `closeDelay` props:

<Demo data={HoverCardDemos.delay} />

## HoverCard delay group

Use the `HoverCard.Group` component to sync open and close delays of multiple `HoverCard` components:

<Demo data={HoverCardDemos.group} />

## Activation events

The `events` prop determines which interactions open the dropdown. Fields that are not specified
keep their default values, for example `events={{ focus: false }}` disables focus activation
and leaves hover activation enabled:

<DataTable
  head={['Field', 'Default', 'Description']}
  data={[
    [<code>hover</code>, <code>true</code>, 'Dropdown is opened when the target is hovered with a mouse'],
    [<code>focus</code>, <code>true</code>, 'Dropdown is opened when the target is focused with the keyboard'],
    [
      <code>touch</code>,
      <code>false</code>,
      <>
        Dropdown is opened when the target is tapped on a touch device, requires <code>hover</code>{' '}
        to be enabled
      </>,
    ],
  ]}
/>

Focus activation uses [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
semantics: the dropdown is opened when the target is focused with the keyboard, but not when it
is focused by a mouse click.

`touch` is disabled by default because there is no hover on touch devices – the first tap would
open the dropdown instead of activating the target. Enable it only if the target does not have its
own tap action. `touch` extends hover activation, it has no effect if `hover` is disabled.

<Demo data={HoverCardDemos.events} />

## Keyboard interactions

<DataTable
  head={['Key', 'Description']}
  data={[
    ['Tab', <>Moves focus to the target, opens the dropdown if <code>events.focus</code> is enabled</>],
    ['Escape', <>Closes the dropdown, can be disabled with <code>{'closeOnEscape={false}'}</code></>],
  ]}
/>

The dropdown is also closed when the user presses outside of the target and the dropdown
(`pointerdown` event), set `closeOnClickOutside={false}` to disable this behavior. Note that the
`clickOutsideEvents` prop is not supported by `HoverCard`: outside press is always detected with
the `pointerdown` event.

<Demo data={HoverCardDemos.keyboard} />

## Interactive dropdown

By default, the dropdown is closed as soon as the pointer leaves the target: if there is a gap
between the target and the dropdown, or if the pointer travels diagonally over unrelated elements,
the dropdown closes before the pointer reaches it.

Set the `interactive` prop to keep the dropdown open while the pointer travels toward it. It is
required by [WCAG 1.4.13](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
if the dropdown contains interactive content. Note that an interactive dropdown intercepts pointer
events of the content it overlaps:

<Demo data={HoverCardDemos.interactive} />

## With interactive elements

`HoverCard` is displayed only when the mouse is over the target element or dropdown.
You can use anchors and buttons within dropdowns, using inputs is not recommended:

<Demo data={HoverCardDemos.profile} />

## Dropdown role

The `role` prop controls the accessible relation between the target and the dropdown:

<DataTable
  head={['Value', 'Target attributes', 'Dropdown attributes']}
  data={[
    [
      <>
        <code>dialog</code> (default)
      </>,
      <>
        <code>aria-haspopup="dialog"</code>, <code>aria-expanded</code>, <code>aria-controls</code>
      </>,
      <>
        <code>role="dialog"</code>, <code>aria-labelledby</code>
      </>,
    ],
    [<code>tooltip</code>, <code>aria-describedby</code>, <code>role="tooltip"</code>],
  ]}
/>

Use `role="tooltip"` if the dropdown contains only descriptive content – its content is then
announced by screen readers as the description of the target.

Keep the default `role="dialog"` if the dropdown contains headings, links, buttons or any other
content that is not a plain description of the target.

<Demo data={HoverCardDemos.role} />

<TargetComponent component="HoverCard" />

## Accessibility

`HoverCard` can be opened with a mouse and with the keyboard, and is announced by screen readers:

- The target is focusable if it is an interactive element (a button or a link). If the target is
  not interactive, add `tabIndex={0}` to it to make it reachable with the keyboard.
- Focusing the target with the keyboard opens the dropdown, `Escape` and a press outside of the
  target and the dropdown close it.
- `onDismiss` is called when the dropdown is closed with `Escape` key or with a press outside of
  the target and the dropdown.
- `aria-haspopup`, `aria-expanded`, `aria-controls` and `aria-describedby` attributes are managed
  by the component, see the [Dropdown role](#dropdown-role) section.
- The `returnFocus` prop is ignored while focus activation is enabled (`events.focus`, the
  default): focus is already on the target when the dropdown is opened with the keyboard, and
  returning it after the target was blurred would trap keyboard users on the target. `Escape`
  pressed inside the dropdown always returns focus to the target.

### Limitations

The dropdown is rendered in a portal at the end of `document.body`, it is not a part of the tab
order of the page. Keyboard users can open, read and dismiss the dropdown, but **cannot move focus
into it** – links and buttons inside the dropdown are not reachable with the keyboard.

If the dropdown contains interactive content, that content must also be available elsewhere on the
page. Do not use the `trapFocus` prop to work around this limitation: focus cannot be moved into
the dropdown in the first place, and trapping focus in a hover-triggered element strands keyboard
users.

With `withinPortal={false}` the dropdown is rendered next to the target and focus can be moved into
it with `Tab`, but moving focus out of the dropdown with `Tab` does not close it – the dropdown is
closed with `Escape`, with a press outside or when the pointer leaves the target.

Hover and focus activations do not coordinate: if the pointer leaves the target while the target is
focused with the keyboard, the dropdown is closed after `closeDelay` and is not reopened until the
target is blurred and focused again.
