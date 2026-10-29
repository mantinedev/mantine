export type TaskStatus = 'Done' | 'In progress' | 'In review' | 'Blocked';

export interface Task {
  id: string;
  title: string;
  project: string;
  assignee: string;
  status: TaskStatus;
  progress: number;
  due: string;
}

export const STATUS_COLORS: Record<TaskStatus, string> = {
  Done: 'green',
  'In progress': 'blue',
  'In review': 'violet',
  Blocked: 'red',
};

export const tasks: Task[] = [
  {
    id: 'PRJ-142',
    title: 'Migrate billing page to the new API',
    project: 'Billing',
    assignee: 'Maya Chen',
    status: 'In progress',
    progress: 64,
    due: 'Nov 4',
  },
  {
    id: 'PRJ-139',
    title: 'Add SSO login with Okta',
    project: 'Auth',
    assignee: 'Leo Martins',
    status: 'In review',
    progress: 90,
    due: 'Nov 1',
  },
  {
    id: 'PRJ-137',
    title: 'Fix rounding in invoice totals',
    project: 'Billing',
    assignee: 'Priya Nair',
    status: 'Done',
    progress: 100,
    due: 'Oct 28',
  },
  {
    id: 'PRJ-133',
    title: 'Usage export fails for large workspaces',
    project: 'Reports',
    assignee: 'Sam Okafor',
    status: 'Blocked',
    progress: 20,
    due: 'Nov 8',
  },
  {
    id: 'PRJ-128',
    title: 'Onboarding checklist for new teams',
    project: 'Growth',
    assignee: 'Ines Duarte',
    status: 'In progress',
    progress: 41,
    due: 'Nov 12',
  },
];

export const members = [
  { name: 'Maya Chen', role: 'Frontend engineer', presence: 'available' },
  { name: 'Leo Martins', role: 'Backend engineer', presence: 'busy' },
  { name: 'Priya Nair', role: 'Product designer', presence: 'away' },
  { name: 'Sam Okafor', role: 'Data engineer', presence: 'offline' },
] as const;

export const activity = [
  {
    title: 'Leo Martins opened a pull request',
    description: 'PRJ-139 Add SSO login with Okta',
    time: '12 min ago',
  },
  {
    title: 'Priya Nair closed PRJ-137',
    description: 'Fix rounding in invoice totals',
    time: '1 hour ago',
  },
  {
    title: 'Sam Okafor marked PRJ-133 as blocked',
    description: 'Waiting for the storage quota increase',
    time: '3 hours ago',
  },
  {
    title: 'Maya Chen joined the Billing project',
    description: 'Invited by Ines Duarte',
    time: 'Yesterday',
  },
];

export const throughput = [
  { week: 'Sep 15', opened: 18, closed: 12 },
  { week: 'Sep 22', opened: 22, closed: 19 },
  { week: 'Sep 29', opened: 16, closed: 21 },
  { week: 'Oct 6', opened: 25, closed: 20 },
  { week: 'Oct 13', opened: 19, closed: 24 },
  { week: 'Oct 20', opened: 21, closed: 26 },
  { week: 'Oct 27', opened: 14, closed: 17 },
];
