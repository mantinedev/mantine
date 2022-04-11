import { Button, Group } from '@mantine/core';
import React, { Children } from 'react';

type StepperProgressControlProps = {
  active: number;
  activeContent: number;
  setActive: (value: number) => void;
  setActiveContent: (value: number) => void;
  dynamic?: {
    items: React.ReactElement[];
    count: number;
    setCount: (value: number) => void;
  };
};

export const StepperProgressControl = ({
  active,
  activeContent,
  setActive,
  setActiveContent,
  dynamic,
}: StepperProgressControlProps) => (
  <Group mt={40}>
    <Button
      disabled={active === 0 && activeContent === 0}
      variant="default"
      onClick={() => {
        const finished = active === (dynamic?.items.length || 3);
        const nextDisabled = active === (dynamic?.items.length || 3) + 1;

        const children = Children.toArray(
          dynamic?.items[Math.min(dynamic?.items.length || 3, active - 1)]?.props?.children
        );

        if (finished || nextDisabled) {
          setActive(finished ? (dynamic?.items.length || 3) - 1 : dynamic?.items.length || 3);
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

    {active === (dynamic?.count || 3) ? (
      <Button color="teal" onClick={() => setActive((dynamic?.count || 3) + 1)}>
        Finish
      </Button>
    ) : (
      <Button
        disabled={active === (dynamic?.count || 3) + 1}
        onClick={() => {
          const children = Children.toArray(dynamic?.items[active]?.props?.children);

          if (active >= (dynamic?.count || 3) - 1 && activeContent === (children.length || 3) - 1) {
            setActive(dynamic?.count || 3);
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
    {!!dynamic && (
      <>
        <Button
          variant="outline"
          color="red"
          onClick={() => {
            const max = Math.max(0, dynamic.count - 1);

            if (max === 0) {
              setActive(0);
              setActiveContent(0);
            } else if (active >= max) {
              setActive(max);
              setActiveContent(0);
            }

            dynamic?.setCount(max);
          }}
        >
          Remove step
        </Button>

        <Button
          variant="outline"
          onClick={() => {
            dynamic.setCount(dynamic.count + 1);

            if (active > dynamic.count) {
              setActiveContent(0);
              setActive(dynamic.count);
            }
          }}
        >
          Add step
        </Button>
      </>
    )}
  </Group>
);
