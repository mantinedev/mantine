import dynamic from 'next/dynamic';
import type { SkillExample } from '../types';

export const SCHEDULE_EXAMPLES: SkillExample[] = [
  {
    id: 'meeting-room-booking',
    title: 'Meeting room booking',
    description:
      'Rooms by floor, office hours, booking rules, own bookings editable, weekly series',
    prompt: `Build the room booking page of an office app: people see which meeting rooms are free and book them.

Data:

- 8 hard-coded rooms on 3 floors (name, floor, capacity, equipment such as a screen or a whiteboard)
- about 25 bookings in the current week, generated relative to today so the page always has data; some are the current user's ("Alex Kim"), the others belong to colleagues
- office hours are 8:00–19:00 on weekdays

Calendar:

- rooms are rows grouped by floor, with a day view and a week view; the day view opens on today and scrolls to the current time
- outside office hours and on weekends the time is shown as unavailable and nothing can be booked there
- each booking shows its title and the organizer; the current user's bookings are visually distinct from the colleagues' ones without adding a lot of color

Booking:

- dragging across free time in a room, or clicking a free slot (30 minutes), opens a booking form: title, room, start and end, attendees (number), repeat weekly until a date
- a booking cannot overlap another booking in the same room, cannot be outside office hours, and the attendees cannot exceed the room capacity; the form shows the reason when one of these fails
- the current user's bookings can be moved and resized in steps of 15 minutes, with the same rules; colleagues' bookings cannot be moved, clicking one shows its details (title, organizer, time, room) read-only
- clicking one of the current user's bookings opens the form to edit or cancel it; cancelling a repeating booking asks whether to cancel this one or the whole series
- after every change show a short notification and display the current user's bookings as JSON under the calendar

The component is shown on a demo page that already has a title: do not add a page title or intro text.

Write tests for the component.`,
    component: dynamic(() =>
      import('./MeetingRoomBooking/MeetingRoomBooking').then((module) => module.MeetingRoomBooking)
    ),
    fullWidth: true,
    loadCode: () => import('./MeetingRoomBooking/code.json'),
  },
  {
    id: 'clinic-appointments',
    title: 'Clinic appointments',
    description:
      'Per-doctor working hours, fixed-length appointment types, patient search, mobile month view',
    prompt: `Build the appointments calendar of a small clinic, used by the front desk to book patients.

Data:

- 4 hard-coded doctors (name, specialty), each with their own working hours per weekday (for example Mon/Wed 9:00–17:00, Fri 12:00–20:00) and lunch breaks
- 4 appointment types with fixed durations: consultation 30 min, follow-up 15 min, procedure 60 min, vaccination 15 min
- 40 hard-coded patients (name, date of birth, phone)
- about 30 appointments in the current and next week, generated relative to today

Calendar:

- one doctor at a time, picked with a doctor selector that sits in the calendar header row, next to the date navigation; the week view shows the doctor's working hours as available time, everything else (and the lunch break) is unavailable
- each appointment shows the patient name and the appointment type
- appointments resize in steps of 15 minutes and can be dragged to another time; they cannot be placed outside the doctor's working hours or overlap another appointment of the same doctor
- on screens narrower than a tablet the calendar switches to a month view with the list of the selected day's appointments under it

Booking:

- clicking an available slot opens a booking form: patient (searchable by name or phone), appointment type, start time, note; the end time follows from the type and is shown, not edited
- the form rejects a slot where the appointment would not fit before the end of working hours or the next appointment, and shows why
- clicking an appointment opens the same form to edit or cancel it
- after every change show a short notification and display the doctor's appointments as JSON under the calendar

The component is shown on a demo page that already has a title: do not add a page title or intro text.

Write tests for the component.`,
    component: dynamic(() =>
      import('./ClinicAppointments/ClinicAppointments').then((module) => module.ClinicAppointments)
    ),
    fullWidth: true,
    loadCode: () => import('./ClinicAppointments/code.json'),
  },
  {
    id: 'shift-rota',
    title: 'Shift rota',
    description:
      'Shift templates dragged onto employees, rest and vacation rules, weekly hours vs contract',
    prompt: `Build the shift rota of a café chain: a manager plans who works when for the coming weeks.

Data:

- 12 hard-coded employees in 3 teams (kitchen, bar, floor), each with a contract of a number of hours per week
- 3 shift templates: morning 6:00–14:00, evening 14:00–22:00, night 22:00–6:00
- vacations: a few employees have hard-coded vacation days in the current and next weeks, generated relative to today
- about 40 shifts already planned in the current week

Rota:

- employees are rows grouped by team, with a week view and a month view; the week view starts on Monday
- the shift templates are listed in a panel next to the rota and are dragged onto an employee's day to create a shift of that template; a shift can also be dragged to another day or another employee
- vacation days are shown on the employee's row and nothing can be dropped on them
- an employee cannot have two shifts that overlap, and needs 11 hours of rest between the end of one shift and the start of the next; a drop that breaks a rule is rejected and the reason is shown in a notification
- each employee row shows the planned hours of the visible week next to the contract hours ("32 / 40 h"), with a warning when the planned hours go over the contract
- clicking a shift opens a small form to change its template, add a note or delete it

Value:

- "Publish rota" shows a short notification and displays the shifts of the visible week grouped by employee as JSON under the rota

The component is shown on a demo page that already has a title: do not add a page title or intro text.

Write tests for the component.`,
    component: dynamic(() => import('./ShiftRota/ShiftRota').then((module) => module.ShiftRota)),
    fullWidth: true,
    loadCode: () => import('./ShiftRota/code.json'),
  },
  {
    id: 'content-calendar',
    title: 'Content calendar',
    description:
      'Posts by channel, repeating newsletter with single-issue edits, drafts dragged in and out',
    prompt: `Build the content calendar of a marketing team: blog posts, newsletters and social posts planned on a calendar.

Data:

- 4 channels: blog, newsletter, LinkedIn, Instagram
- about 30 hard-coded posts over the current and next month, generated relative to today (title, channel, author, status: draft, scheduled, published)
- the newsletter goes out every Tuesday at 10:00 as one repeating series; a few of its issues already have their own title
- 6 unscheduled drafts

Calendar:

- month, week and agenda views with a custom header: previous / today / next, the view switcher, a channel filter (several channels at once) and a "New post" button
- each post shows its title and channel; published posts look finished, drafts look unfinished, without adding a lot of color
- the unscheduled drafts are listed in a panel next to the calendar; dragging one onto the calendar schedules it on that day (or at that time in the week view), dragging a scheduled draft back to the panel unschedules it
- scheduled posts can be dragged to another date; published posts cannot be moved
- clicking a post opens a form to edit the title, channel, date and time and status; editing or moving one newsletter issue asks whether the change applies to this issue only or to the whole series
- "New post" and clicking an empty day open the same form for a new post

Value:

- after every change show a short notification and display the posts of the visible range as JSON under the calendar

The component is shown on a demo page that already has a title: do not add a page title or intro text.

Write tests for the component.`,
    component: dynamic(() =>
      import('./ContentCalendar/ContentCalendar').then((module) => module.ContentCalendar)
    ),
    fullWidth: true,
    loadCode: () => import('./ContentCalendar/code.json'),
  },
  {
    id: 'conference-program',
    title: 'Conference program',
    description:
      'Read-only program by stage, track filter, talk details and a saved personal agenda',
    prompt: `Build the program page of a two-day developer conference.

Data:

- 4 stages (Main hall, Workshop room, Room A, Room B)
- about 40 hard-coded talks over two days, starting tomorrow so the page always has data: title, speakers (name, company, avatar initials), track (frontend, backend, AI, design), level, abstract; plus breaks and lunch that apply to all stages
- talks are 30 or 45 minutes, workshops 2 hours

Program:

- stages are columns or rows of a day view, with a switch between the two days; the program runs 9:00–18:00
- each talk shows the title, the speakers' avatars and the track; tracks are easy to tell apart without the page turning into a rainbow
- the program is read-only: talks cannot be moved, resized or created
- clicking a talk opens its details: abstract, speakers with their companies, time, stage, level, and an "Add to my agenda" / "Remove from my agenda" button
- a track filter dims the talks of the other tracks
- "My agenda" lists the talks the visitor added, grouped by day and sorted by time, and warns when two of them overlap; the agenda survives a page reload

The component is shown on a demo page that already has a title: do not add a page title or intro text.

Write tests for the component.`,
    component: dynamic(() =>
      import('./ConferenceProgram/ConferenceProgram').then((module) => module.ConferenceProgram)
    ),
    fullWidth: true,
    loadCode: () => import('./ConferenceProgram/code.json'),
  },
];
