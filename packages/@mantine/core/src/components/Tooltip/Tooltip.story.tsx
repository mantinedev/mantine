import { useState } from 'react';
import { Tooltip } from './Tooltip';

export default { title: 'Tooltip' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip
        position="right"
        label="Tooltip label"
        withArrow
        transitionProps={{ duration: 0 }}
        opened
        color="cyan"
        radius="md"
      >
        <button type="button">target</button>
      </Tooltip>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip
        position="right"
        label="Tooltip label"
        withArrow
        transitionProps={{ duration: 0 }}
        color="cyan"
        radius="md"
        unstyled
      >
        <button type="button">target</button>
      </Tooltip>
    </div>
  );
}

export function Multiline() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip
        position="right"
        label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, quaerat vero. Tempora reiciendis deserunt tenetur blanditiis velit. Illo, ipsam. Dignissimos fugit tempora iure accusamus, ipsum minima tenetur ex sequi eveniet."
        w={300}
        withArrow
        transitionProps={{ duration: 0 }}
        radius="md"
        multiline
      >
        <button type="button">target</button>
      </Tooltip>
    </div>
  );
}

export function MultilineWithJsx() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip.Floating
        position="right"
        label={
          <>
            We will attempt to spend the budget according to your allocation for each ad group.{' '}
            <b>Flexible</b> allocation might cause deviation from your specification, but secure
            delivery of the overall budget for the campaign.
            <br />
            <br />
            Allocation is disabled if
            <b> Budget Pacing</b> is turned off for the campaign.
          </>
        }
        w={300}
        // WithArrow
        // TransitionProps={{ duration: 0 }}
        radius="md"
        multiline
      >
        <button type="button">target</button>
      </Tooltip.Floating>
    </div>
  );
}

export const TooltipGroup = () => (
  <Tooltip.Group openDelay={500}>
    <Tooltip label="Tooltip 1">
      <button type="button">Button 1</button>
    </Tooltip>
    <Tooltip label="Tooltip 2">
      <button type="button">Button 2</button>
    </Tooltip>
    <Tooltip label="Tooltip 3">
      <button type="button">Button 3</button>
    </Tooltip>
  </Tooltip.Group>
);

export const Controlled = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Tooltip label="Tooltip 1" opened={opened}>
        <button
          type="button"
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
        >
          Hover to open both tooltips
        </button>
      </Tooltip>
      <Tooltip label="Tooltip 2" opened={opened}>
        <button type="button">Button 2</button>
      </Tooltip>
    </div>
  );
};

export const Floating = () => (
  <div style={{ padding: 0 }}>
    <Tooltip.Floating label="Tooltip">
      <button type="button" style={{ width: 200, height: 200 }}>
        target
      </button>
    </Tooltip.Floating>
  </div>
);

export const Unmount = () => {
  const [mounted, setMounted] = useState(true);
  return (
    <div>
      <button type="button" onClick={() => setMounted((c) => !c)}>
        Toggle
      </button>
      <Tooltip opened label="Tooltip">
        <button
          type="button"
          style={{ width: 200, height: 200, display: mounted ? 'block' : 'none' }}
        >
          target
        </button>
      </Tooltip>
    </div>
  );
};

export const HexColor = () => (
  <Tooltip label="Tooltip 2" color="#F0F">
    <button type="button">Button 2</button>
  </Tooltip>
);

export const WithArrow = () => (
  <Tooltip
    withArrow
    label="Tooltip button with arrow Tooltip button with arrow Tooltip button with arrow"
  >
    <button type="button">Tooltip button with arrow</button>
  </Tooltip>
);

export const TooltipAndArrowWithBorder = () => (
  <div style={{ padding: 40 }}>
    <Tooltip
      opened
      position="right"
      label="Tooltip and arrow with border"
      withArrow
      transitionProps={{ duration: 0 }}
      arrowSize={10}
      styles={{
        tooltip: { border: '4px solid green' },
        arrow: { border: '4px solid green' },
      }}
    >
      <button type="button">target</button>
    </Tooltip>
  </div>
);

export const WithArrowRadius = () => (
  <Tooltip
    withArrow
    label="Tooltip button with arrow Tooltip button with arrow Tooltip button with arrow"
    arrowRadius={4}
  >
    <button type="button">Tooltip button with arrow radius</button>
  </Tooltip>
);

export function Inline() {
  return (
    <>
      <div style={{ padding: 40, maxWidth: 400 }}>
        <b>Via inline prop:</b>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam in quos aperiam
          magni quas neque{' '}
          <Tooltip label="Inline tooltip" inline>
            <span style={{ background: 'pink' }}>aliquid laboriosam dolorum</span>
          </Tooltip>
          , eum voluptate, perferendis placeat repudiandae nesciunt explicabo quibusdam deserunt,
          animi dicta.
        </div>
      </div>
      <div style={{ padding: 40, maxWidth: 400 }}>
        <b>Via middlewares prop:</b>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam in quos aperiam
          magni quas neque{' '}
          <Tooltip label="Inline tooltip" middlewares={{ inline: true }}>
            <span style={{ background: 'pink' }}>aliquid laboriosam dolorum</span>
          </Tooltip>
          , eum voluptate, perferendis placeat repudiandae nesciunt explicabo quibusdam deserunt,
          animi dicta.
        </div>
      </div>
    </>
  );
}

export function DefaultOpened() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip
        position="right"
        label="Tooltip visible by default"
        withArrow
        transitionProps={{ duration: 0 }}
        color="cyan"
        radius="md"
        defaultOpened
      >
        <button type="button">target</button>
      </Tooltip>
    </div>
  );
}

export function Fixed() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip
        position="right"
        label="Tooltip has fixed position"
        withArrow
        transitionProps={{ duration: 0 }}
        opened
        floatingStrategy="fixed"
      >
        <button type="button">target</button>
      </Tooltip>
    </div>
  );
}
