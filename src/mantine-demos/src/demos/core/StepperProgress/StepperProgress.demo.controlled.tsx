import { StepperProgress } from '@mantine/core';
import React, { useState } from 'react';
import { StepperProgressControl } from './_control';
import { mockSteps } from './_mock';

const code = `
import { Children, useState } from 'react';
import { StepperProgress, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  const [count, setCount] = useState(3);

  const itemsContent = Array(3)
    .fill(0)
    .map((_, index) => <div key={index}>{\`Content \${index + 1}\`}</div>);
  
  const items = Array(count)
    .fill(0)
    .map((_, index) => (
      <StepperProgress.Step allowStepSelect label={\`Step \${index + 1}\`} key={index}>
        {itemsContent}
      </StepperProgress.Step>
    ));

  return (
    <>
      <StepperProgress
        active={active}
        activeContent={activeContent}
        onStepClick={setActive}
        control={
          <Group mt={40}>
            <Button
              disabled={active === 0 && activeContent === 0}
              variant="default"
              onClick={() => {
                const finished = active === items.length;
                const nextDisabled = active === items.length + 1;

                const children = Children.toArray(
                  items[Math.min(items.length, active - 1)]?.props?.children
                );

                if (finished || nextDisabled) {
                  setActive(finished ? items.length - 1 : items.length);
                  setActiveContent(finished ? children.length - 1 : activeContent);
                  return;
                }

                const max = Math.max(-1, activeContent - 1);

                if (max === -1) {
                  setActive(Math.max(0, active - 1));
                  setActiveContent(children.length - 1);
                } else {
                  setActiveContent(max);
                }
              }}
            >
              Previous
            </Button>

            {active === count ? (
              <Button color="teal" onClick={() => setActive(count + 1)}>
                Finish
              </Button>
            ) : (
              <Button
                disabled={active === count + 1}
                onClick={() => {
                  const children = Children.toArray(items[active]?.props?.children);

                  if (active >= count - 1 && activeContent === children.length - 1) {
                    setActive(count);
                    setActiveContent(0);

                    return;
                  }

                  const min = Math.min(children.length, activeContent + 1);

                  if (min === children.length) {
                    setActive(active + 1);
                    setActiveContent(0);
                  } else {
                    setActiveContent(min);
                  }
                }}
              >
                Next
              </Button>
            )}
            <Button
              variant="outline"
              color="red"
              onClick={() =>
                setCount((c) => {
                  const max = Math.max(0, c - 1);

                  if (max === 0) {
                    setActive(0);
                    setActiveContent(0);
                  } else if (active >= max) {
                    setActive(max);
                    setActiveContent(0);
                  }

                  return max;
                })
              }
            >
              Remove step
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setCount((c) => c + 1);

                if (active > count) {
                  setActiveContent(0);
                  setActive(count);
                }
              }}
            >
              Add step
            </Button>
          </Group>
        }
      >
        {items}
        <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
      </StepperProgress>
    </>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  const [count, setCount] = useState(3);
  const items = mockSteps(count);

  return (
    <>
      <StepperProgress
        active={active}
        activeContent={activeContent}
        onStepClick={setActive}
        breakpoint="sm"
        control={
          <StepperProgressControl
            active={active}
            activeContent={activeContent}
            setActive={setActive}
            setActiveContent={setActiveContent}
            dynamic={{
              items,
              count,
              setCount,
            }}
          />
        }
      >
        {items}
        <StepperProgress.Completed>
          Completed, click back button to get to previous step
        </StepperProgress.Completed>
      </StepperProgress>
    </>
  );
}

export const controlled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
