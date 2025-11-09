import { HeatmapStylesNames } from './Heatmap';

export interface HeatmapRectData {
  date: string;
  value: number | null;
}

export interface HeatmapWeeksSharedProps {
  /** Heatmap data, key is date in `YYYY-MM-DD` format */
  data: Record<string, number>;
  /** Dates range array */
  datesRange: (string | null)[][];
  /** Size of day rect in px */
  rectSize: number;
  /** Gap between rects in px */
  gap: number;
  /** Rect radius in px */
  rectRadius?: number;
  /** Min and max values for color calculation */
  min: number;
  max: number;
  /** Colors array for heat calculation */
  colors: string[];
  /** If set, tooltip is displayed on rect hover */
  withTooltip?: boolean;
  /** Function to set hovered rect state */
  setHoveredRect: (rect: HeatmapRectData | null) => void;
  /** Props passed down to each rect depending on its date and associated value */
  getRectProps?: (input: HeatmapRectData) => React.ComponentPropsWithoutRef<'rect'>;
  /** Styles API getter - function that returns styles for a given selector */
  getStyles: (selector: HeatmapStylesNames) => Record<string, any>;
}
