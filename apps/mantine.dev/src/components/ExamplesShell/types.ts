export interface ExampleItem {
  /** Example id, used as the page url segment (`<basePath>/<id>`) */
  id: string;

  /** Name displayed in the navbar and used in search */
  name: string;

  /** Short description displayed in the navbar and used in search */
  description: string;

  /** Full description displayed on the page */
  fullDescription?: string;

  /** Group type, defines navbar grouping, used in search */
  type: string;

  /** Extra keywords matched by search, for example APIs used in the example */
  features?: string[];
}

export interface ExamplesGroup {
  /** Matches `ExampleItem.type` */
  type: string;

  /** Group title displayed in the navbar */
  label: string;
}
