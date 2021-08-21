export interface GalleryPageCategory {
  slug: string;
  name: string;
}

export interface GalleryCanvasAttributes {
  canvas: { center: boolean; maxWidth: number };
  category: string;
  dependencies: string[];
  title: string;
}

export interface GalleryComponent {
  _component: string;
  url: string;
  code: string;
  category: GalleryPageCategory;
  attributes: GalleryCanvasAttributes;
}
