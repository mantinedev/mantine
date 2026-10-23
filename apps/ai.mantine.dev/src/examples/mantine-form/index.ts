import type { SkillExample } from '../types';
import contentEntryFormCode from './ContentEntryForm/code.json';
import { ContentEntryPage } from './ContentEntryForm/ContentEntryPage';
import type { EntryValues } from './ContentEntryForm/types';
import contentModelFormCode from './ContentModelForm/code.json';
import { ContentModelForm } from './ContentModelForm/ContentModelForm';
import type { ContentField, ContentModelValues } from './ContentModelForm/types';
import jobApplicationFormCode from './JobApplicationForm/code.json';
import { JobApplicationForm } from './JobApplicationForm/JobApplicationForm';
import type { JobApplicationValues } from './JobApplicationForm/types';
import recurringEventFormCode from './RecurringEventForm/code.json';
import { RecurringEventForm } from './RecurringEventForm/RecurringEventForm';
import type { RecurringEventValues } from './RecurringEventForm/types';

function dateInDays(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function modelField(
  values: Partial<ContentField> & Pick<ContentField, 'id' | 'type' | 'label' | 'key'>
): ContentField {
  return {
    description: '',
    required: false,
    textDisplay: 'input',
    maxLength: '',
    textDefault: '',
    booleanDefault: 'false',
    jsonDefault: '',
    selectOptions: [],
    selectDefault: null,
    referenceModel: null,
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
            selectOptions: [
              { id: 'draft', value: 'draft', label: 'Draft' },
              { id: 'published', value: 'published', label: 'Published' },
              { id: 'archived', value: 'archived', label: 'Archived' },
            ],
            selectDefault: 'draft',
          }),
          modelField({
            id: 'author',
            type: 'reference',
            label: 'Author',
            key: 'author',
            required: true,
            referenceModel: 'Author',
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
  {
    id: 'content-entry-form',
    title: 'Content entry form',
    description: 'Form built from a model schema with a validator per field type',
    prompt: `Build a form for creating a content entry from a content model in a headless CMS. The component receives the model (name, key, ordered fields with their options, as produced by the content model editor) and builds the whole form from it: inputs, initial values and validation all come from the schema, nothing is hard-coded per model.

Entry:

- content key (required, typed by the user, lowercase letters, digits and dashes)
- language (required, select from en-US, de-DE, fr-FR, es-ES; default en-US)
- tags (tags input with 5 suggested tags to pick from and free-form input, up to 10, no duplicates)

Fields, in model order, with label and description from the field and required when the field is required:

- Text: single-line input or textarea depending on the field's display setting, max length from the field with a counter, default value pre-filled
- Rich text: rich text editor (@mantine/tiptap) with bold, italic, headings, lists and links; required means non-empty content
- Boolean: checkbox with the field's default
- JSON: textarea validated as JSON, pretty-printed on blur, default pre-filled
- Select: select with the field's options and default
- Image: dropzone (@mantine/dropzone) accepting images only, one file, with a preview of the chosen image and a way to remove it
- File: dropzone accepting any file, one file, showing the file name and size and a way to remove it
- Reference: an input that opens a modal to pick entries from a hard-coded list of entries (key, title, model); the input looks like a multi select: selected entries as removable pills inside it, a placeholder when empty; the modal has a search input and, when the field's target model is not fixed, a filter by model; single or multiple selection according to the field; entries are identified by key: the key is the primary text of every entry in the picker and in the pills, title and model are secondary

Validation:

- built from the schema: each field type has its own validator (required, max length, valid JSON, image mime type, at least one reference when required, …), composed per field from its options
- the entry key and language are validated like any other field

Behavior:

- two hard-coded example models (Blog post, Landing page hero) with a model switcher above the form; switching the model rebuilds the form with that model's fields and defaults
- submit validates everything and focuses the first invalid field
- on submit show a short notification (entry key and model name), display the entry JSON (key, language, tags, model key, values keyed by field key) under the form and keep the form as is

Write tests for the component.`,
    component: ContentEntryPage,
    code: contentEntryFormCode as SkillExample['code'],
    fill: async (filler) => {
      filler.setValues<EntryValues>('content-entry', {
        key: 'launching-mantine-10',
        language: 'en-US',
        tags: ['release', 'news'],
        fields: {
          title: 'Launching Mantine 10',
          excerpt: 'Everything that changed in the new major release and how to migrate.',
          body: '<h2>What is new</h2><p>A new colors system, a faster form engine and a dozen new components.</p>',
          category: 'news',
          author: ['ada-lovelace'],
          related: ['pricing', 'starter-plan'],
          featured: true,
          seo: '{\n  "title": "Mantine 10 is out",\n  "description": "What changed and how to migrate"\n}',
        },
      });
    },
  },
  {
    id: 'recurring-event-form',
    title: 'Recurring event form',
    description: 'Calendar event with a recurrence rule builder and an occurrence preview',
    prompt: `Build a form for creating a recurring event in a team calendar app.

Event:

- title (required) and description (textarea, optional)
- start and end as date and time; end must be after start; the end defaults to one hour after the start when the start changes and the end was not edited
- "All day" switch: when on, start and end are dates only and the time parts are hidden
- timezone (select from a hard-coded list of 12 IANA timezones with city labels; default to the browser timezone when it is in the list, otherwise UTC)
- location (optional)

Recurrence:

- repeat: does not repeat, daily, weekly, monthly, yearly
- interval: every N days / weeks / months / years (1 to 99), shown for every repeat except "does not repeat"
- weekly: weekdays to repeat on (at least one; defaults to the weekday of the start date)
- monthly: on the same day of the month, or on the same weekday of the month (for example "second Tuesday"), both derived from the start date
- ends: never, after N occurrences (1 to 500), or on a date (after the start date)
- exceptions: dates to skip, added with a date picker and shown as a removable list; an exception must be within the series and unique
- a read-only preview of the next 5 occurrences computed from the rule and the exceptions, updated as the fields change; shows "No occurrences" when the rule produces none

Validation:

- title, start, end and timezone are required
- end after start (same-day events compare the time)
- interval, occurrences count, ends-on date and exceptions follow the limits above
- weekly repeat needs at least one weekday

Behavior:

- the recurrence fields appear and disappear with the selected repeat option; values of hidden fields are not submitted
- submit validates everything and focuses the first invalid field
- on submit show a short notification (event title and first occurrence) and display the event JSON (title, description, start, end as ISO strings, allDay, timezone, location, recurrence with only the fields that apply, exceptions) under the form; keep the form as is

Write tests for the component.`,
    component: RecurringEventForm,
    code: recurringEventFormCode as SkillExample['code'],
    fill: async (filler) => {
      filler.setValues<RecurringEventValues>('recurring-event', {
        title: 'Design review',
        description: "Walk through the week's design proposals and decide what ships.",
        start: `${dateInDays(1)} 14:00:00`,
        end: `${dateInDays(1)} 15:00:00`,
        allDay: false,
        timezone: 'Europe/Berlin',
        location: 'Room 4 / Meet link in the invite',
        repeats: true,
        frequency: 'weekly',
        interval: 2,
        weekdays: ['TU', 'TH'],
        monthlyMode: 'day',
        ends: 'after',
        count: 12,
        until: null,
        exceptions: [],
      });
    },
  },
];
