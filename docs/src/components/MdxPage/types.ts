export interface MdxPageProps {
  headings: {
    depth: number;
    value: string;
  }[];

  body: string;

  data: {
    title: string;
    description?: string;
    props: string[];
    import: string;
    docs: string;
    source: string;
    package: string;
    bundleSize: string;
    installation: string;
    pageTitle: string;
  };
}
