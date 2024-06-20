export interface ExportReference {
  type: 'component' | 'hook' | 'function' | 'constant' | 'type';
  name: string;
  description: string;
  link: string;
  children?: ExportReference[];
}

export interface ExportReferenceGroup {
  package: string;
  exports: ExportReference[];
}
