export interface GalleryCategory {
  slug: string;
  name: string;
  images: { dark: string; light: string };
}

export interface GalleryCategoriesGroup {
  name: string;
  categories: GalleryCategory[];
}

export interface CanvasAttributes {
  responsive?: boolean;
  withColor?: boolean;
  dimmed?: boolean;
  author: string;
  canvas: { center: boolean; maxWidth?: number };
  category: string;
  dependencies: string[];
  title: string;
  props?: Record<string, any>;
}

export interface GalleryComponent {
  component: string;
  slug: string;
  code: string;
  attributes: CanvasAttributes;
}
