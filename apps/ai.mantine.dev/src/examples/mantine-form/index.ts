import type { SkillExample } from '../types';
import jobApplicationFormCode from './JobApplicationForm/code.json';
import { JobApplicationForm } from './JobApplicationForm/JobApplicationForm';

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
      if (filler.has('First name')) {
        await filler.type('First name', 'Ada');
        await filler.type('Last name', 'Lovelace');
        await filler.type('Email', 'ada@example.com');
        await filler.type('Phone', '2025550123');
        await filler.type('LinkedIn URL', 'https://linkedin.com/in/ada');
        return;
      }

      if (filler.has('Current title')) {
        await filler.type('Current title', 'Staff engineer');
        await filler.type('Years of experience', '12');
        await filler.type('Company', 'Analytical Engines');
        await filler.type('Title', 'Programmer');
        await filler.pickYearRange('Years', 2021, 2024);
        return;
      }

      if (filler.has('Earliest start date')) {
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        await filler.pickDate('Earliest start date', nextWeek);
        await filler.type('Expected salary', '120000');
        await filler.click('Hybrid');
        await filler.type('Notes', 'Available for a call any weekday after 2pm.');
      }
    },
  },
];
