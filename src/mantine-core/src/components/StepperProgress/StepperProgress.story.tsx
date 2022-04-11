import { MANTINE_SIZES } from '@mantine/styles';
import { storiesOf } from '@storybook/react';
import React, { Children, useState } from 'react';
import { Button } from '../Button';
import { Group } from '../Group';
import { StepperProgress, StepperProgressProps } from './StepperProgress';

function Wrapper(props: Partial<StepperProgressProps>) {
  const [active, setActive] = useState(0);

  return (
    <>
      <StepperProgress {...props} active={active} onStepClick={setActive}>
        <StepperProgress.Step label="First" description="First description">
          {[0, 1, 2].map((i) => (
            <div>STEP 1 - CONTENT {i + 1}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Step label="Second" description="Second description">
          {[0, 1, 2].map((i) => (
            <div>STEP 2 - CONTENT {i + 1}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Step label="Last" description="Last description">
          {[0, 1, 2].map((i) => (
            <div>STEP 3 - CONTENT {i + 1}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Completed>Completed content here</StepperProgress.Completed>
      </StepperProgress>
    </>
  );
}

function DynamicChildren() {
  const [active, setActive] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  const [count, setCount] = useState(3);

  const itemsContent = Array(3)
    .fill(0)
    .map((_, index) => <div key={index}>{`Content ${index + 1}`}</div>);

  const items = Array(count)
    .fill(0)
    .map((_, index) => (
      <StepperProgress.Step allowStepSelect label={`Step ${index + 1}`} key={index}>
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

        {/* <StepperProgress.Completed>COMPLETED</StepperProgress.Completed> */}
      </StepperProgress>
    </>
  );
}

const sizes = MANTINE_SIZES.map((size, index) => (
  <Wrapper key={size} size={size} mt={index !== 0 ? 60 : 0} />
));

const verticalSizes = MANTINE_SIZES.map((size, index) => (
  <Wrapper key={size} size={size} mt={index !== 0 ? 60 : 0} orientation="vertical" />
));

storiesOf('StepperProgress', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <Wrapper color="teal" />
    </div>
  ))
  .add('Vertical orientation', () => (
    <div style={{ padding: 40 }}>
      <Wrapper orientation="vertical" />
      <Wrapper orientation="vertical" iconPosition="right" mt="xl" />
    </div>
  ))
  .add('Icon position right', () => (
    <div style={{ padding: 40 }}>
      <Wrapper iconPosition="right" />
    </div>
  ))
  .add('Loading state', () => (
    <div style={{ padding: 40 }}>
      <StepperProgress
        active={0}
        groupButtonProps={{
          prev: {
            disabled: true,
          },
          next: {
            disabled: true,
          },
        }}
      >
        <StepperProgress.Step label="First">
          {[0, 1, 2].map((i) => (
            <div>STEP 1 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Step label="Second" loading>
          {[0, 1, 2].map((i) => (
            <div>STEP 2 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Step label="Third">
          {[0, 1, 2].map((i) => (
            <div>STEP 3 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
      </StepperProgress>
    </div>
  ))
  .add('Icons only', () => (
    <div style={{ padding: 40 }}>
      <StepperProgress
        active={1}
        groupButtonProps={{
          group: { hidden: true },
        }}
      >
        <StepperProgress.Step>
          {[0, 1, 2].map((i) => (
            <div>STEP 1 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Step>
          {[0, 1, 2].map((i) => (
            <div>STEP 2 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Step>
          {[0, 1, 2].map((i) => (
            <div>STEP 3 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
      </StepperProgress>

      <StepperProgress
        active={1}
        mt={60}
        orientation="vertical"
        groupButtonProps={{
          group: { hidden: true },
        }}
      >
        <StepperProgress.Step>
          {[0, 1, 2].map((i) => (
            <div>STEP 1 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Step>
          {[0, 1, 2].map((i) => (
            <div>STEP 2 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
        <StepperProgress.Step>
          {[0, 1, 2].map((i) => (
            <div>STEP 3 - CONTENT {i}</div>
          ))}
        </StepperProgress.Step>
      </StepperProgress>
    </div>
  ))
  .add('Responsive', () => (
    <div style={{ padding: 40 }}>
      <Wrapper breakpoint="sm" />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Vertical sizes', () => (
    <div style={{ padding: 40 }}>
      {verticalSizes}
      <Wrapper mt={60} orientation="vertical" iconSize={80} />
    </div>
  ))
  .add('Dynamic children', () => (
    <div style={{ padding: 40 }}>
      <DynamicChildren />
    </div>
  ));
