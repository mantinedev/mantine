import { useEffect, useRef, useState } from 'react';

function getHeadingsData(
  headings: HTMLElement[],
  getDepth: (element: HTMLElement) => number,
  getValue: (element: HTMLElement) => string
): UseScrollSpyHeadingData[] {
  const result: UseScrollSpyHeadingData[] = [];

  for (let i = 0; i < headings.length; i += 1) {
    const heading = headings[i];
    if (heading.id) {
      result.push({
        depth: getDepth(heading),
        value: getValue(heading),
        id: heading.id,
        getNode: () => document.getElementById(heading.id)!,
      });
    }
  }

  return result;
}

function getActiveElement(rects: DOMRect[]) {
  if (rects.length === 0) {
    return -1;
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc;
      }

      return {
        index,
        position: item.y,
      };
    },
    { index: 0, position: rects[0].y }
  );

  return closest.index;
}

function getDefaultDepth(element: HTMLElement) {
  return Number(element.tagName[1]);
}

function getDefaultValue(element: HTMLElement) {
  return element.textContent || '';
}

export interface UseScrollSpyHeadingData {
  /** Heading depth, 1-6 */
  depth: number;

  /** Heading text content value */
  value: string;

  /** Heading id */
  id: string;

  /** Function to get heading node */
  getNode: () => HTMLElement;
}

export interface UseScrollSpyOptions {
  /** Selector to get headings, `'h1, h2, h3, h4, h5, h6'` by default */
  selector?: string;

  /** A function to retrieve depth of heading, by default depth is calculated based on tag name */
  getDepth?: (element: HTMLElement) => number;

  /** A function to retrieve heading value, by default `element.textContent` is used */
  getValue?: (element: HTMLElement) => string;
}

export function useScrollSpy({
  selector = 'h1, h2, h3, h4, h5, h6',
  getDepth = getDefaultDepth,
  getValue = getDefaultValue,
}: UseScrollSpyOptions = {}) {
  const [active, setActive] = useState(-1);
  const [initialized, setInitialized] = useState(false);
  const [data, setData] = useState<UseScrollSpyHeadingData[]>([]);
  const headingsRef = useRef<UseScrollSpyHeadingData[]>([]);

  const handleScroll = () => {
    setActive(
      getActiveElement(headingsRef.current.map((d) => d.getNode().getBoundingClientRect()))
    );
  };

  useEffect(() => {
    const headings = getHeadingsData(
      Array.from(document.querySelectorAll(selector)),
      getDepth,
      getValue
    );
    headingsRef.current = headings;
    setInitialized(true);
    setData(headings);
    setActive(getActiveElement(headings.map((d) => d.getNode().getBoundingClientRect())));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    active,
    initialized,
    data,
  };
}
