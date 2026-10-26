export interface Matter {
  client: string;
  matter: string;
  updated: string;
}

export const matters: Matter[] = [
  { client: 'Crumb & Co', matter: 'Lease of Unit 2, Leith', updated: 'Today, 10:42' },
  { client: 'Harbour Physio', matter: 'Share purchase', updated: 'Yesterday' },
  { client: 'Estate of R. Ogilvie', matter: 'Executry', updated: 'Mon' },
  { client: 'Northpoint Café', matter: 'Premises licence variation', updated: '21 Oct' },
  { client: 'Tide Kayaks', matter: 'Employment contracts', updated: '18 Oct' },
];

export interface Sentence {
  label: string;
  ref: string;
  text: string;
}

export interface Clause {
  number: string;
  heading: string;
  sentences: Sentence[];
  page?: number;
}

export const lease: Clause[] = [
  {
    number: '1',
    heading: 'Premises',
    sentences: [
      {
        label: '1.1',
        ref: 's1-1',
        text: 'The Landlord lets to the Tenant the ground floor retail unit known as Unit 2, 14 Constitution Street, Leith, Edinburgh EH6 7BS, shown edged red on Plan 1.',
      },
    ],
  },
  {
    number: '2',
    heading: 'Term',
    sentences: [
      {
        label: '2.1',
        ref: 's2-1',
        text: 'The Lease shall commence on 1 March 2027 and shall continue for a term of ten years.',
      },
    ],
  },
  {
    number: '3',
    heading: 'Rent',
    page: 4,
    sentences: [
      {
        label: '3.1',
        ref: 's3-1',
        text: 'The Tenant shall pay a yearly rent of twenty-eight thousand five hundred pounds (£28,500), exclusive of VAT, by equal quarterly payments in advance on the usual quarter days.',
      },
    ],
  },
  {
    number: '4',
    heading: 'Rent review',
    sentences: [
      {
        label: '4.1',
        ref: 's4-1',
        text: 'The rent shall be reviewed on each fifth anniversary of the date of entry and shall be the greater of the rent then payable and the open market rent.',
      },
      {
        label: '4.2',
        ref: 's4-2',
        text: 'Failing agreement within three months of the review date, the open market rent shall be determined by an independent surveyor appointed by the Landlord.',
      },
    ],
  },
  {
    number: '5',
    heading: 'Break option',
    page: 11,
    sentences: [
      {
        label: '5.1',
        ref: 's5-1',
        text: 'The Tenant may terminate this Lease on the fifth anniversary of the date of entry by giving not less than twelve months’ prior written notice to the Landlord.',
      },
      {
        label: '5.2',
        ref: 's5-2',
        text: 'Any notice under clause 5.1 shall be of no effect unless, on the termination date, the Tenant has paid all sums due under this Lease and has complied in all respects with its obligations.',
      },
    ],
  },
  {
    number: '6',
    heading: 'Repair',
    sentences: [
      {
        label: '6.1',
        ref: 's6-1',
        text: 'The Tenant shall keep the Premises in good and substantial repair and condition throughout the term.',
      },
      {
        label: '6.2',
        ref: 's6-2',
        text: 'The Tenant’s obligation under clause 6.1 extends to the roof, foundations, main walls and structure of the Premises, and applies irrespective of their condition at the date of entry.',
      },
    ],
  },
  {
    number: '7',
    heading: 'Use',
    page: 19,
    sentences: [
      {
        label: '7.1',
        ref: 's7-1',
        text: 'The Tenant shall use the Premises only within Class 1A of the Town and Country Planning (Use Classes) (Scotland) Order 1997 as a bakery shop with ancillary café seating.',
      },
      {
        label: '7.2',
        ref: 's7-2',
        text: 'The Tenant shall not install any oven, flue or extraction equipment without the Landlord’s prior written consent, which the Landlord may withhold at its absolute discretion.',
      },
    ],
  },
  {
    number: '8',
    heading: 'Assignation and subletting',
    sentences: [
      {
        label: '8.1',
        ref: 's8-1',
        text: 'The Tenant shall not assign the whole of the Premises without the Landlord’s prior written consent, such consent not to be unreasonably withheld.',
      },
      {
        label: '8.2',
        ref: 's8-2',
        text: 'It shall be a condition of any assignation that the outgoing Tenant enters into an authorised guarantee agreement in the Landlord’s standard form.',
      },
    ],
  },
  {
    number: '9',
    heading: 'Schedules',
    page: 31,
    sentences: [
      {
        label: '9.1',
        ref: 's9-1',
        text: 'Schedule 1 (Plan 1); Schedule 2 (Service charge); Schedule 3 (Schedule of condition): not attached.',
      },
    ],
  },
];

export const sentences: Sentence[] = lease.flatMap((clause) => clause.sentences);

export const refLabels: Record<string, string> = Object.fromEntries(
  sentences.map((sentence) => [sentence.ref, sentence.label])
);

export type Severity = 'high' | 'medium' | 'low';

export interface Risk {
  severity: Severity;
  title: string;
  body: string;
  fix: string;
  ref: string;
}

export const risks: Risk[] = [
  {
    severity: 'high',
    title: 'Ovens need the landlord’s consent, which can be refused for any reason',
    body: 'A bakery cannot trade without ovens and extraction, but clause 7.2 lets the landlord refuse at its absolute discretion [[s7-2]], while 7.1 permits use as a bakery [[s7-1]].',
    fix: 'consent “not to be unreasonably withheld or delayed”, with the oven and flue in the heads of terms pre-approved.',
    ref: 's7-2',
  },
  {
    severity: 'high',
    title: 'Full repair of the structure, with no schedule of condition',
    body: 'The tenant repairs the roof and main walls whatever their state at entry [[s6-2]], and Schedule 3 is not attached [[s9-1]]. On a 1890s tenement this could mean paying for repairs that pre-date the lease.',
    fix: 'limit the obligation to the condition shown in an agreed photographic schedule of condition.',
    ref: 's6-2',
  },
  {
    severity: 'medium',
    title: 'Break option can fail on a minor breach',
    body: 'The break only works if the tenant has complied “in all respects” on the break date [[s5-2]]. A missed redecoration could defeat it.',
    fix: 'make the break conditional only on payment of the basic rent [[s3-1]].',
    ref: 's5-2',
  },
  {
    severity: 'low',
    title: 'Landlord picks the rent review surveyor',
    body: 'Disputed reviews go to a surveyor appointed by the landlord alone [[s4-2]].',
    fix: 'appointment by agreement, or failing that by the Chair of RICS in Scotland.',
    ref: 's4-2',
  },
];

export interface Change {
  id: string;
  ref: string;
  clause: string;
  del: string;
  ins: string;
}

export const changes: Change[] = [
  {
    id: 'c1',
    ref: 's7-2',
    clause: '7.2',
    del: 'which the Landlord may withhold at its absolute discretion',
    ins: 'such consent not to be unreasonably withheld or delayed',
  },
  {
    id: 'c2',
    ref: 's6-2',
    clause: '6.2',
    del: 'and applies irrespective of their condition at the date of entry',
    ins: 'but shall not require the Tenant to put them in any better condition than that shown in the Schedule of Condition',
  },
  {
    id: 'c3',
    ref: 's5-2',
    clause: '5.2',
    del: 'has paid all sums due under this Lease and has complied in all respects with its obligations',
    ins: 'has paid the basic rent due up to the termination date',
  },
  {
    id: 'c4',
    ref: 's4-2',
    clause: '4.2',
    del: 'appointed by the Landlord',
    ins: 'appointed by agreement or, failing agreement, by the Chair of RICS in Scotland',
  },
];

export const thinkingSteps = [
  'Read the lease, 34 pages, and Schedules 1 and 2',
  'Checked the break clause against the rent payment dates in Schedule 2',
  'Compared the repair clause with the schedule of condition (not attached)',
  'Checked the use class against the oven and flue in the heads of terms',
];

export const firstQuestion =
  'Summarise the main risks for Crumb & Co in Draft 3 before Thursday’s call. They plan two deck ovens and a flue to the back court.';

export interface Suggestion {
  question: string;
  answer: string;
}

export const suggestions: Suggestion[] = [
  {
    question: 'Draft a letter to the landlord’s solicitors',
    answer:
      'Here is an opening for the letter to Hollis Property’s solicitors.\n\nDear Ms Baird, we act for Crumb & Co Ltd in connection with Draft 3 of the lease of Unit 2. Our client is content with the rent of £28,500 [[s3-1]] but needs four changes before it can sign. First, consent to the installation of ovens and a flue should not be unreasonably withheld [[s7-2]], since the permitted use is a bakery [[s7-1]]. Second, the repair obligation should be limited by a schedule of condition [[s6-2]], which is not yet attached [[s9-1]]. Third, the break should be conditional only on payment of basic rent [[s5-2]]. Fourth, any review surveyor should be appointed by agreement [[s4-2]].',
  },
  {
    question: 'What does the guarantee in 8.2 mean for the directors?',
    answer:
      'Clause 8.2 makes Crumb & Co, as the outgoing tenant, guarantee whoever takes over the lease [[s8-2]]. It binds the company, not the directors personally, unless they also sign a separate personal guarantee, which this draft does not ask for. Consent to assign cannot be unreasonably withheld [[s8-1]], so the guarantee is the main cost of selling the business with the lease.',
  },
  {
    question: 'When is the earliest Crumb & Co could leave?',
    answer:
      'The earliest exit is the fifth anniversary, 1 March 2032, if notice is served by 1 March 2031 [[s5-1]]. As drafted, the break fails if anything is outstanding on that date [[s5-2]], so I would not rely on it until the condition is narrowed. The lease otherwise runs ten years from 1 March 2027 [[s2-1]].',
  },
];

export const fallbackAnswer =
  'I checked the lease for that. The closest provisions are the break option [[s5-1]] and its conditions [[s5-2]]. If you mean something else, name the clause or schedule and I will look again.';

export interface LeaseFile {
  id: string;
  name: string;
  pages: number;
  kind: 'PDF' | 'DOC';
  added: string;
}

export const initialFiles: LeaseFile[] = [
  {
    id: 'lease',
    name: 'Lease, Unit 2, 14 Constitution St.pdf',
    pages: 34,
    kind: 'PDF',
    added: 'Draft 3, from Hollis Property',
  },
  {
    id: 'schedule',
    name: 'Schedule 2, service charge.pdf',
    pages: 3,
    kind: 'PDF',
    added: 'From Hollis Property',
  },
  {
    id: 'heads',
    name: 'Heads of terms, signed.docx',
    pages: 4,
    kind: 'DOC',
    added: 'From the client, 2 Oct',
  },
];

export const addedFile: Omit<LeaseFile, 'id'> = {
  name: 'Landlord’s replies to enquiries.pdf',
  pages: 6,
  kind: 'PDF',
  added: 'Added just now',
};

export type Mode = 'Quick answer' | 'Careful review';

export const modes: { value: Mode; description: string }[] = [
  { value: 'Quick answer', description: 'A few seconds. Cites the main clause only.' },
  {
    value: 'Careful review',
    description: 'Reads every file and checks schedules and definitions.',
  },
];
