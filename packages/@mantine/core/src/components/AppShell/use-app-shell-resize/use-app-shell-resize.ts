import { useCallback, useMemo, useRef, useState } from 'react';
import { useCallbackRef } from '@mantine/hooks';
import type {
  AppShellResizeController,
  AppShellResizeSection,
  AppShellResizeSectionController,
  AppShellResizeSizes,
  UseAppShellResizeInput,
} from '../AppShell.types';
import { RESIZE_SECTION_NAMES } from './resize-section-config';

type SectionFlags = Partial<Record<AppShellResizeSection, boolean>>;

export function useAppShellResize(input: UseAppShellResizeInput = {}): AppShellResizeController {
  const { navbar, aside, header, footer, initialSizes, onResize, onResizeEnd, onCollapseChange } =
    input;

  const [sizes, setSizes] = useState<AppShellResizeSizes>({});
  const [touched, setTouched] = useState<SectionFlags>({});
  const [activeSection, setActiveSection] = useState<AppShellResizeSection | null>(null);
  const collapsedRef = useRef<SectionFlags>({});
  const handleResize = useCallbackRef(onResize);
  const handleResizeEnd = useCallbackRef(onResizeEnd);
  const handleCollapseChange = useCallbackRef(onCollapseChange);

  const options = useMemo(
    () => ({ navbar, aside, header, footer }),
    [navbar, aside, header, footer]
  );

  const resolvedSizes = useMemo(() => {
    const result: AppShellResizeSizes = {};

    RESIZE_SECTION_NAMES.forEach((section) => {
      if (sizes[section] !== undefined) {
        result[section] = sizes[section];
        return;
      }

      if (!touched[section] && initialSizes?.[section] !== undefined) {
        result[section] = initialSizes[section];
      }
    });

    return result;
  }, [sizes, touched, initialSizes]);

  const resolvedSizesRef = useRef(resolvedSizes);
  resolvedSizesRef.current = resolvedSizes;

  const commitSize = useCallback((section: AppShellResizeSection, size: number) => {
    setTouched((current) => ({ ...current, [section]: true }));
    setSizes((current) => ({ ...current, [section]: size }));
  }, []);

  const clearSize = useCallback((section: AppShellResizeSection) => {
    setTouched((current) => ({ ...current, [section]: true }));
    setSizes((current) => {
      const next = { ...current };
      delete next[section];
      return next;
    });
  }, []);

  const startResize = useCallback((section: AppShellResizeSection) => {
    setActiveSection(section);
  }, []);

  const previewResize = useCallback(
    (section: AppShellResizeSection, size: number) => {
      handleResize({ ...resolvedSizesRef.current, [section]: size });
    },
    [handleResize]
  );

  const endResize = useCallback(
    (section: AppShellResizeSection, size: number | null) => {
      setActiveSection(null);
      delete collapsedRef.current[section];

      if (size === null) {
        return;
      }

      commitSize(section, size);
      handleResizeEnd({ ...resolvedSizesRef.current, [section]: size });
    },
    [commitSize, handleResizeEnd]
  );

  const initCollapse = useCallback((section: AppShellResizeSection, collapsed: boolean) => {
    collapsedRef.current[section] = collapsed;
  }, []);

  const reportCollapse = useCallback(
    (section: AppShellResizeSection, collapsed: boolean) => {
      if (collapsedRef.current[section] === collapsed) {
        return;
      }

      collapsedRef.current[section] = collapsed;
      handleCollapseChange(section, collapsed);
    },
    [handleCollapseChange]
  );

  const resetAll = useCallback(() => {
    setTouched(() => {
      const next: SectionFlags = {};
      RESIZE_SECTION_NAMES.forEach((section) => {
        next[section] = true;
      });
      return next;
    });
    setSizes({});
  }, []);

  const getSectionController = (
    section: AppShellResizeSection
  ): AppShellResizeSectionController => ({
    enabled: options[section] !== undefined,
    size: resolvedSizes[section],
    active: activeSection === section,
    setSize: (size: number) => commitSize(section, size),
    reset: () => clearSize(section),
  });

  return {
    navbar: getSectionController('navbar'),
    aside: getSectionController('aside'),
    header: getSectionController('header'),
    footer: getSectionController('footer'),
    sizes: resolvedSizes,
    resetAll,
    options,
    activeSection,
    startResize,
    previewResize,
    endResize,
    initCollapse,
    reportCollapse,
  };
}
