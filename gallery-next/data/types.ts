export interface GalleryCategory {
  slug: string;
  name: string;
}

export interface GalleryCategoriesGroup {
  name: string;
  categories: GalleryCategory[];
}
