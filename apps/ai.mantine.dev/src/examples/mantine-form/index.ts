import type { SkillExample } from '../types';
import jobApplicationFormCode from './JobApplicationForm/code.json';
import { JobApplicationForm } from './JobApplicationForm/JobApplicationForm';
import type { JobApplicationValues } from './JobApplicationForm/types';

function dateInDays(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

export const FORM_EXAMPLES: SkillExample[] = [
  {
    id: 'job-application-form',
    title: 'Job application form',
    description: 'Four-step wizard with per-step validation and a review step',
    prompt: `Build a job application form with four steps and a stepper at the top: Personal, Experience, Availability, Review.

Personal:
- first name, last name (both required)
- email (required, valid email)
- phone (optional)
- LinkedIn URL (optional, must be a valid URL when filled)

Experience:
- current title (required)
- years of experience (number, 0–50)
- a list of previous positions with company, title, start year and end year — at least one position, end year not before start year. Add/remove positions.

Availability:
- earliest start date (date picker, today or later)
- expected salary (number, optional)
- remote/hybrid/on-site radio (required)
- a textarea for notes with a 500 character limit and a counter

Review:
- read-only summary of all values grouped by step with an "Edit" link per group that jumps to that step
- submit button only on this step

Behavior:
- Next validates only the current step and focuses the first invalid field
- Back never loses data
- steps already completed are clickable in the stepper
- on submit show a success notification and reset the form

Write tests for the component.`,
    component: JobApplicationForm,
    code: jobApplicationFormCode as SkillExample['code'],
    fill: async (filler) => {
      filler.setValues<JobApplicationValues>('job-application', {
        firstName: 'Ada',
        lastName: 'Lovelace',
        email: 'ada@example.com',
        phone: '+12025550123',
        phoneDisplay: '+1 (202) 555-0123',
        linkedin: 'https://linkedin.com/in/ada',
        currentTitle: 'Staff engineer',
        yearsOfExperience: 12,
        positions: [
          {
            id: 'analytical-engines',
            company: 'Analytical Engines',
            title: 'Programmer',
            years: ['2021-01-01', '2024-01-01'],
          },
        ],
        startDate: dateInDays(7),
        salary: 120000,
        workArrangement: 'hybrid',
        notes: 'Available for a call any weekday after 2pm.',
      });
    },
  },
];
