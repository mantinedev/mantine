import type { SkillExample } from '../types';
import contentModelFormCode from './ContentModelForm/code.json';
import { ContentModelForm } from './ContentModelForm/ContentModelForm';
import type { ContentModelValues, FieldValues } from './ContentModelForm/types';
import jobApplicationFormCode from './JobApplicationForm/code.json';
import { JobApplicationForm } from './JobApplicationForm/JobApplicationForm';
import type { JobApplicationValues } from './JobApplicationForm/types';

function dateInDays(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function modelField(
  values: Partial<FieldValues> & Pick<FieldValues, 'id' | 'type' | 'label' | 'key'>
): FieldValues {
  return {
    description: '',
    required: false,
    textDisplay: 'input',
    maxLength: '',
    textDefault: '',
    booleanDefault: 'false',
    jsonDefault: '',
    options: [],
    defaultOption: null,
    targetModel: null,
    allowMultiple: false,
    ...values,
  };
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
  {
    id: 'content-model-form',
    title: 'Content model editor',
    description: 'Headless CMS model with a sortable fields list and a field modal',
    prompt: `Build a form for creating a content model in a headless CMS. A model has a name, a key and a list of fields; content entries are later created from it.

Model:
- model name (required, 2–60 characters)
- model key (required, lowercase letters, digits and underscores; auto-filled from the name as a slug until the user edits it by hand)
- description (optional, 200 characters max)

Fields list:
- a list of fields, each shown as a row with type icon, label, key and a "required" marker; at least one field
- rows can be reordered with drag and drop (dnd-kit), edited and removed
- "Add field" opens a modal with a field type picker: Text, Rich text, Boolean, JSON, Select, Image, File, Reference — each with a one-line description
- after a type is picked, the same modal shows the field options form; Save adds the field to the list and closes the modal
- editing a field opens the same modal directly on the options form with the field values; Save updates the field

Field options (all types):
- label (required), key (required, slug auto-filled from the label until edited, unique within the model), description (optional), required checkbox

Type-specific options:
- Text: input or textarea, max character count (optional, 1–100000), default value
- Boolean: default value (true/false)
- JSON: default value validated as JSON
- Select: a list of value/label options (at least two, unique values) that can be reordered with drag and drop (dnd-kit), default option
- Reference: target model (select from a hard-coded list: Author, Category, Page, Product), "allow multiple" checkbox
- Rich text, Image, File: no extra options

Behavior:
- submitting with no fields shows the error under the list and focuses "Add field"
- on submit show a notification with the model JSON (name, key, ordered fields with their options) and keep the form as is

Write tests for the component.`,
    component: ContentModelForm,
    code: contentModelFormCode as SkillExample['code'],
    fill: async (filler) => {
      filler.setValues<ContentModelValues>('content-model', {
        name: 'Blog post',
        key: 'blog_post',
        description: 'Articles published on the company blog',
        fields: [
          modelField({
            id: 'title',
            type: 'text',
            label: 'Title',
            key: 'title',
            required: true,
            maxLength: 120,
          }),
          modelField({
            id: 'body',
            type: 'richText',
            label: 'Body',
            key: 'body',
            description: 'Main article content',
            required: true,
          }),
          modelField({
            id: 'status',
            type: 'select',
            label: 'Status',
            key: 'status',
            required: true,
            options: [
              { id: 'draft', value: 'draft', label: 'Draft' },
              { id: 'published', value: 'published', label: 'Published' },
              { id: 'archived', value: 'archived', label: 'Archived' },
            ],
            defaultOption: 'draft',
          }),
          modelField({
            id: 'author',
            type: 'reference',
            label: 'Author',
            key: 'author',
            required: true,
            targetModel: 'author',
          }),
          modelField({
            id: 'featured',
            type: 'boolean',
            label: 'Featured',
            key: 'featured',
            description: 'Shown on the home page',
          }),
        ],
      });
    },
  },
];
