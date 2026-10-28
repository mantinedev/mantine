import dynamic from 'next/dynamic';
import type { SkillExample } from '../types';

export const COMBOBOX_EXAMPLES: SkillExample[] = [
  {
    id: 'issue-search-bar',
    title: 'Issue search bar',
    description: 'Free text with filter tokens, value suggestions per key and recent searches',
    prompt: `Build a search bar for an issue tracker that combines free text with filter tokens, like GitHub issue search.

Filters:

- \`status:\` open, in progress, closed
- \`author:\` and \`assignee:\` one of 12 hard-coded team members (name, username, initials for the avatar); members match by name or username; \`assignee:\` also accepts \`none\`
- \`label:\` one of 10 hard-coded labels, each with a color
- \`priority:\` urgent, high, medium, low
- \`due:\` today, this week, next week, overdue, none

Suggestions:

- focusing the empty input lists the filter keys with a short description of each, plus up to 3 recent searches
- typing a word that is the start of a key suggests the matching keys; picking a key inserts \`key:\` and suggests its values
- after \`key:\` the dropdown suggests the values of that key, filtered by the text after the colon; picking a value turns \`key:value\` into a token shown inside the input
- typing a complete \`key:value\` followed by a space also creates a token when the value is valid; an unknown key or value stays as plain text
- \`status\`, \`priority\`, \`due\` and \`author\` allow one token each: a new token replaces the old one; \`label\` and \`assignee\` can repeat, and values already used are not suggested again
- words that are not filters are free text searched in the issue title

Editing:

- Backspace at the start of the text removes the last token
- each token can be removed with its own remove button, and a clear button removes the whole query
- Enter runs the search when no suggestion is active; Escape closes the dropdown and keeps the text
- every search that runs is saved to recent searches (5 at most, newest first, no duplicates); picking a recent search restores its tokens and text

Results:

- under the bar show the issues that match the query from a hard-coded list of 30 issues (number, title, status, author, assignees, labels, priority, due date) with the count of matches; list at most 10 of them; the list updates as the query changes, a \`key:value\` that is still being typed is ignored
- tokens with the same key are OR (\`label:bug label:ui\`), different keys are AND; \`due:\` filters are relative to today

Write tests for the component.`,
    component: dynamic(() =>
      import('./IssueSearchBar/IssueSearchBar').then((module) => module.IssueSearchBar)
    ),
    loadCode: () => import('./IssueSearchBar/code.json'),
  },
  {
    id: 'icon-picker',
    title: 'Icon picker',
    description: 'Virtualized grid of thousands of icons with two-dimensional keyboard navigation',
    prompt: `Build an icon picker for the project settings page of a project management app. Every project has an icon that users choose from the full @tabler/icons-react set.

Trigger:

- a button-like input with the label "Project icon" that shows the selected icon and its name ("Rocket"); "Pick an icon" when nothing is selected
- the selected icon can be cleared

Dropdown:

- a search field at the top; search matches the icon name split into words ("arrow left" finds \`IconArrowLeft\` and \`IconArrowBigLeft\`), case-insensitive, names that start with the query first
- a switch between outline and filled icons; the filled set only contains icons that have a filled version
- icons are shown as a grid of square cells; hovering or highlighting a cell shows the icon name
- the grid shows thousands of icons, so it must render only the visible rows and stay smooth while scrolling and typing
- when the search is empty a "Recent" row with the last 8 picked icons is shown above the full grid
- "Nothing found" with the query when there are no matches

Keyboard:

- the search field keeps focus while the arrow keys move the highlighted cell in two directions: left and right move by one cell, up and down move by one row and keep the column, and the grid scrolls to keep the highlighted cell visible
- Home and End jump to the first and last cell, Page Up and Page Down move by one visible page
- Enter picks the highlighted icon and closes the dropdown; Escape closes it without changes
- opening the dropdown highlights the selected icon and scrolls to it

Value:

- the value is the icon name with its style (\`{ name: 'Rocket', style: 'outline' }\`) or null; show the value as JSON under the picker

Write tests for the component.`,
    component: dynamic(() =>
      import('./IconPicker/ProjectIconSettings').then((module) => module.ProjectIconSettings)
    ),
    loadCode: () => import('./IconPicker/code.json'),
  },
  {
    id: 'natural-date-input',
    title: 'Natural date input',
    description: 'Due dates typed in plain English with resolved-date suggestions',
    prompt: `Build a due date input for a task app where users type dates in plain English.

Phrases the input understands (case-insensitive, without a parsing library):

- today, tomorrow, yesterday
- weekday names, full or short ("fri", "friday" = the next such day, "next friday" = that day of the next week)
- "in N days / weeks / months", "N days from now"
- "next week" (Monday of the next week), "next month" (the 1st of the next month), "end of week" (Sunday), "end of month"
- dates such as "mar 5", "5 march", "march 5 2027", "2027-03-05" and "3/5" (month/day); a date without a year is the next such date
- an optional time after any of the above: "at 3pm", "3:30pm", "15:30", "noon", "midnight"; without a time the task is due at the end of the day (no time shown)
- weeks start on Monday

Suggestions:

- while typing, up to 5 suggestions complete the text: "ne" suggests "next week", "next month", "next monday"…; "3" suggests "in 3 days", "in 3 weeks", "3pm today"…; "fri 5" suggests "friday at 5pm" and "friday at 5am"
- every suggestion shows the phrase, the date it resolves to ("Fri, Oct 30, 3:00 PM") and how far away it is ("in 4 days")
- focusing the empty input shows presets: Today, Tomorrow, Next week, End of month
- text that does not parse shows "Could not understand “…”" instead of suggestions

Value:

- picking a suggestion, or pressing Enter when the text parses, sets the value; the input then shows the formatted date
- focusing an input that has a value selects its text so the user can type over it
- blur with text that does not parse shows an error and keeps the previous value; blur with empty text clears the value
- a date in the past is allowed but shows a warning under the input ("This date is in the past")
- clear button
- the component takes \`value\`, \`onChange\` (\`Date | null\`) and \`label\`; render it with the label "Due date" and show the selected value as an ISO string under it

Write tests for the component and for the parser.`,
    component: dynamic(() =>
      import('./NaturalDateInput/NaturalDateInputDemo').then(
        (module) => module.NaturalDateInputDemo
      )
    ),
    loadCode: () => import('./NaturalDateInput/code.json'),
  },
  {
    id: 'flight-route-picker',
    title: 'Flight route picker',
    description: 'Two linked airport pickers with city groups, recent picks and swap',
    prompt: `Build the route part of a flight search: where the trip starts and where it goes.

Data:

- about 40 hard-coded airports (IATA code, airport name, city, country) including cities with several airports: London (LHR, LGW, STN, LTN, LCY), New York (JFK, LGA, EWR), Paris (CDG, ORY), Tokyo (HND, NRT), Milan (MXP, LIN, BGY) and São Paulo (GRU, CGH)
- a short list of popular destinations

Fields:

- "From" and "To", side by side, with a swap button between them; swap is disabled when both are empty
- search matches the IATA code, city, airport name and country, ignoring case and accents ("sao" finds São Paulo); an exact code match comes first
- a city with several airports appears as a city option ("London, United Kingdom · All airports") followed by its airports; picking the city selects all of its airports
- the selected value shows the code and the name ("LHR · London Heathrow", "London · All airports")
- focusing an empty field shows the recent picks (last 5, from both fields) and the popular destinations
- after picking "From", focus moves to "To"

Rules:

- the same place cannot be on both sides: an airport or city selected on the other side is shown disabled with the reason ("Selected as departure"), and so are a city and its airports
- swapping keeps both values
- "Search flights" requires both fields; on submit show a short notification with the route and display the search as JSON (from and to as arrays of codes) under the fields

Write tests for the component.`,
    component: dynamic(() =>
      import('./FlightRoutePicker/FlightRoutePicker').then((module) => module.FlightRoutePicker)
    ),
    loadCode: () => import('./FlightRoutePicker/code.json'),
  },
  {
    id: 'folder-path-input',
    title: 'Folder path input',
    description: 'Shell-like path completion one folder at a time with folder creation',
    prompt: `Build a "Save to" input for a document editor: the user types the folder path where the document is saved, like \`projects/web/forms\`, with completion one folder at a time, like in a shell.

Data:

- a hard-coded workspace tree of about 40 folders, up to 4 levels deep, each with the number of documents it holds

Completion:

- the dropdown lists the subfolders of the folder the path points to, filtered by the segment being typed: names that start with it first, then names that contain it
- a header in the dropdown shows the folder being listed ("projects / web")
- Tab or Enter on a highlighted folder completes the segment and appends \`/\`, then lists that folder's subfolders; ArrowRight does the same when the caret is at the end of the text
- typing \`/\` after the exact name of a folder also moves into it
- Backspace right after a \`/\` removes the whole last segment and goes up one level
- each option shows a folder icon, the name and its document count; a folder without subfolders has no "go inside" hint
- when the typed segment matches no folder, the only option is "Create folder “name” in projects / web"; created folders are added to the tree, marked as new, and can be entered like the others
- folder names may contain letters, numbers, spaces, \`-\` and \`_\`; anything else shows an error

Value:

- the path is valid when every segment is an existing folder; the field shows an error on blur when the path does not exist
- "Save" is disabled until the path is valid; saving shows a short notification ("Saved to projects / web / forms") and displays the saved path and the folders created in this session as JSON under the input
- the input starts with the path of the last saved location (\`documents/drafts\`)

Write tests for the component.`,
    component: dynamic(() =>
      import('./FolderPathInput/FolderPathInput').then((module) => module.FolderPathInput)
    ),
    loadCode: () => import('./FolderPathInput/code.json'),
  },
];
