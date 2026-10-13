export interface PostValues {
  title: string;
  body: string;
}

export interface Draft {
  values: PostValues;
  savedAt: string;
}

export const STORAGE_KEY = 'mantine-form-examples-post-draft';
