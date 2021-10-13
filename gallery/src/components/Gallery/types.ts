export interface GalleryPageCategory {
  slug: string;
  name: string;
}

export interface GalleryCanvasAttributes {
  responsive?: boolean;
  withColor?: boolean;
  author: string;
  canvas: { center: boolean; maxWidth?: number };
  category: string;
  dependencies: string[];
  title: string;
  props: Record<string, any>;
}

export interface GalleryComponent {
  _component: string;
  url: string;
  code: string;
  category: GalleryPageCategory;
  attributes: GalleryCanvasAttributes;
}
