import type { SkillExample } from '../types';
import { AccountSettings } from './AccountSettings/AccountSettings';
import accountSettingsCode from './AccountSettings/code.json';
import type { OrganizationValues, ProfileValues } from './AccountSettings/types';
import { AutomationRuleForm } from './AutomationRuleForm/AutomationRuleForm';
import automationRuleFormCode from './AutomationRuleForm/code.json';
import type { RuleValues } from './AutomationRuleForm/types';
import contentEntryFormCode from './ContentEntryForm/code.json';
import { ContentEntryDemo } from './ContentEntryForm/ContentEntryDemo';
import type { EntryValues } from './ContentEntryForm/types';
import contentModelFormCode from './ContentModelForm/code.json';
import { ContentModelForm } from './ContentModelForm/ContentModelForm';
import type { ContentModelValues, ModelField } from './ContentModelForm/types';
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
  values: Partial<ModelField> & Pick<ModelField, 'id' | 'type' | 'label' | 'key'>
): ModelField {
  return {
    description: '',
    required: false,
    text: { display: 'input', maxLength: '', defaultValue: '' },
    boolean: { defaultValue: 'false' },
    json: { defaultValue: '' },
    select: { options: [], defaultValue: null },
    reference: { targetModel: null, multiple: false },
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
        workMode: 'hybrid',
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
            text: { display: 'input', maxLength: 120, defaultValue: '' },
          }),
          modelField({
            id: 'body',
            type: 'rich_text',
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
            select: {
              options: [
                { id: 'draft', value: 'draft', label: 'Draft' },
                { id: 'published', value: 'published', label: 'Published' },
                { id: 'archived', value: 'archived', label: 'Archived' },
              ],
              defaultValue: 'draft',
            },
          }),
          modelField({
            id: 'author',
            type: 'reference',
            label: 'Author',
            key: 'author',
            required: true,
            reference: { targetModel: 'author', multiple: false },
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
    component: ContentEntryDemo,
    code: contentEntryFormCode as SkillExample['code'],
    fill: async (filler) => {
      filler.setValues<EntryValues>('content-entry', {
        key: 'launching-mantine-10',
        language: 'en-US',
        tags: ['release', 'news'],
        values: {
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
        repeat: 'weekly',
        interval: 2,
        weekdays: ['TU', 'TH'],
        monthlyBy: 'dayOfMonth',
        ends: 'after',
        count: 12,
        until: null,
        exceptions: [],
      });
    },
  },
  {
    id: 'account-settings',
    title: 'Account settings',
    description:
      'Settings page with independent section forms, one unsaved-changes bar and a reusable address block',
    prompt: `Build the account settings page of a SaaS app. The page has several independent sections; each section is its own form with its own save.

Sections:

- Profile: full name (required), display name, email (required, valid email), job title, bio (textarea, up to 200 characters with a counter), language (select: English, German, French, Spanish), timezone (select from a hard-coded list of 12 IANA timezones with city labels)
- Organization: organization name (required), legal name, website (optional, valid URL), tax ID, address: street, city, postal code, country (select), state or region (optional)
- Billing: billing email (required, valid email), "Same as organization address" checkbox, billing address with the same fields as the organization address, invoice notes (textarea, optional)
- Notifications: a matrix of events (comments, mentions, weekly digest, security alerts, product updates) by channels (email, push, SMS); security alerts cannot be turned off for email; a digest day select (Monday to Sunday) is shown only while the weekly digest has at least one channel on
- Danger zone: transfer ownership (select a member from a hard-coded list of 5, with a confirmation modal), delete organization (confirmation modal that requires typing the organization name)

Behavior:

- the page loads the current settings asynchronously (hard-coded data behind a simulated delay); every section shows a loading state until the data is there
- each section shows a save bar with Save and Cancel only while the section is dirty; Cancel resets the section to the last saved values; Save simulates a request with a delay, shows a short notification and makes the saved values the new baseline
- the address fields are one reusable component used by the organization and billing sections
- "Same as organization address" copies the current organization address into the billing address and keeps those fields disabled while it is on; turning it off keeps the copied values and makes them editable again
- saving the profile with the email taken@example.com fails with a server error that is shown on the email field
- closing or reloading the browser tab with unsaved changes in any section asks for confirmation (beforeunload)

Write tests for the component.`,
    component: AccountSettings,
    code: accountSettingsCode as SkillExample['code'],
    fill: async (filler) => {
      filler.setValues<ProfileValues>('profile', {
        displayName: 'Ada L.',
        jobTitle: 'VP of Engineering',
        bio: 'Leads the analytical engine team and writes about compilers.',
      });
      filler.setValues<OrganizationValues>('organization', {
        website: 'https://acme.dev',
        taxId: 'GB987654321',
      });
    },
  },
  {
    id: 'automation-rule-form',
    title: 'Automation rule builder',
    description: 'Trigger, nested condition groups with type-dependent inputs and sortable actions',
    prompt: `Build a form for creating an automation rule in a project management app. A rule has a trigger ("when"), conditions ("if") and actions ("then").

Rule:

- name (required), description (optional), enabled switch (on by default)

Trigger:

- event (select: issue created, issue updated, comment added, due date approaching, status changed); "status changed" reveals optional "from status" and "to status" selects

Conditions:

- a root group of conditions combined with AND or OR (toggle on the group); a group can contain nested groups up to two levels deep; each group has "add condition", "add group" and, for nested groups, "remove group"
- a condition row is field + operator + value: field (select: title, description, status, priority, assignee, labels, story points, due date, created at, is blocked); the operator list depends on the field type (text: contains, does not contain, equals, is empty; number: equals, not equals, greater than, less than, between; date: before, after, within the next N days, is empty; option: is any of, is none of; boolean: is true, is false); the value input depends on field type and operator (text input, number input or two inputs for between, date picker or number of days, multi-select of the field's options, nothing for is empty / is true / is false)
- changing the field resets the operator and the value; changing the operator resets the value when its shape changes
- validation: the root group has at least one condition; every condition has an operator and a value when the operator needs one; between needs min lower than max; within the next N days needs 1 to 365; a nested group without conditions is an error

Actions:

- an ordered list of 1 to 5 actions, reorderable by drag and drop and by keyboard; action type (select: assign to member, set priority, add labels, move to status, post comment, send Slack message, set due date); each type has its own parameters (member select; priority select; labels multi-select; status select; comment textarea that supports {{issue.title}} and {{issue.assignee}} placeholders; Slack channel select and message; number of days from now)
- an action type can appear only once, except add labels and post comment

Behavior:

- a plain-language summary of the rule, updated live ("When an issue is created, if priority is High and labels include bug, then assign to Ada Lovelace and post a comment")
- "Test rule" opens a modal with a hard-coded sample issue shown as read-only values; it evaluates the conditions against the sample and lists each condition with matched / not matched and the actions that would run
- submit validates everything and focuses the first invalid field; on submit show a short notification (rule name and trigger) and display the rule JSON under the form; keep the form as is

Write tests for the component.`,
    component: AutomationRuleForm,
    code: automationRuleFormCode as SkillExample['code'],
    fill: async (filler) => {
      const condition = {
        text: '',
        number: '',
        min: '',
        max: '',
        date: null,
        days: '',
        options: [] as string[],
      };
      const action = {
        memberId: null,
        priority: null,
        labels: [] as string[],
        status: null,
        comment: '',
        slackChannel: null,
        slackMessage: '',
        dueInDays: '',
      };
      filler.setValues<RuleValues>('automation-rule', {
        name: 'Escalate urgent bugs',
        description: 'Routes high-priority bugs to the on-call engineer.',
        enabled: true,
        trigger: { event: 'issue_created', fromStatus: null, toStatus: null },
        root: {
          id: 'root',
          combinator: 'and',
          conditions: [
            {
              ...condition,
              id: 'c1',
              field: 'priority',
              operator: 'is_any_of',
              options: ['high', 'urgent'],
            },
            { ...condition, id: 'c2', field: 'labels', operator: 'is_any_of', options: ['bug'] },
          ],
          groups: [
            {
              id: 'g1',
              combinator: 'or',
              conditions: [
                {
                  ...condition,
                  id: 'c3',
                  field: 'storyPoints',
                  operator: 'greater_than',
                  number: 5,
                },
                { ...condition, id: 'c4', field: 'isBlocked', operator: 'is_true' },
              ],
              groups: [],
            },
          ],
        },
        actions: [
          { ...action, id: 'a1', type: 'assign_member', memberId: 'ada' },
          {
            ...action,
            id: 'a2',
            type: 'post_comment',
            comment: 'Escalated: {{issue.title}} is assigned to {{issue.assignee}}.',
          },
          {
            ...action,
            id: 'a3',
            type: 'send_slack_message',
            slackChannel: 'alerts',
            slackMessage: 'Urgent bug reported',
          },
        ],
      });
    },
  },
];
