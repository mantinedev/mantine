export type AppointmentTypeId = 'consultation' | 'follow-up' | 'procedure' | 'vaccination';

export interface AppointmentType {
  id: AppointmentTypeId;
  label: string;
  minutes: number;
  color: string;
}

/** Times are `HH:mm` */
export interface WorkingDay {
  start: string;
  end: string;
  lunch?: { start: string; end: string };
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  /** Keyed by dayjs weekday, 0 is Sunday. Missing days are days off */
  hours: Partial<Record<number, WorkingDay>>;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  phone: string;
}

// A type alias (not an interface) so it can be used as a schedule event payload
export type Appointment = {
  id: string;
  doctorId: string;
  patientId: string;
  type: AppointmentTypeId;
  /** `YYYY-MM-DD HH:mm:ss` */
  start: string;
  end: string;
  note: string;
};

export interface AppointmentFormValues {
  patientId: string | null;
  type: AppointmentTypeId | null;
  start: string | null;
  note: string;
}
