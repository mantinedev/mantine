export interface Folder {
  name: string;
  documents: number;
  children: Folder[];
  isNew?: boolean;
}

const folder = (name: string, documents: number, children: Folder[] = []): Folder => ({
  name,
  documents,
  children,
});

export const WORKSPACE: Folder[] = [
  folder('archive', 4, [
    folder('2024', 31, [folder('q1', 8), folder('q2', 11)]),
    folder('2025', 26),
  ]),
  folder('documents', 12, [
    folder('drafts', 7),
    folder('contracts', 9, [folder('signed', 14), folder('pending', 3)]),
    folder('letters', 5),
  ]),
  folder('personal', 2, [folder('travel', 6), folder('health', 3)]),
  folder('projects', 3, [
    folder('web', 10, [
      folder('forms', 6, [folder('validation', 4), folder('layouts', 2)]),
      folder('components', 15),
      folder('design-system', 8),
      folder('website_copy', 5),
    ]),
    folder('mobile', 7, [folder('ios', 4), folder('android', 5)]),
    folder('api', 9, [folder('specs', 12), folder('changelogs', 3)]),
  ]),
  folder('shared', 1, [
    folder('marketing', 11, [folder('campaigns', 9), folder('brand assets', 6)]),
    folder('sales', 8, [folder('proposals', 10)]),
    folder('hr', 4, [folder('onboarding', 7), folder('policies', 5)]),
  ]),
  folder('templates', 0, [folder('reports', 6), folder('meeting notes', 4)]),
];
