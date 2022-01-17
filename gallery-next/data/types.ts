export interface GalleryCategory {
  slug: string;
  name: string;
  images: { dark: string; light: string };
}

export interface GalleryCategoriesGroup {
  name: string;
  categories: GalleryCategory[];
}
