import dayjs from 'dayjs';
import type { ScheduleResourceData, ScheduleResourceGroup } from '@mantine/schedule';
import type { Booking, Room } from './types';

export const CURRENT_USER = 'Alex Kim';

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const OFFICE_HOURS: [string, string] = ['08:00', '19:00'];

export const ROOMS: Room[] = [
  {
    id: 'atrium',
    name: 'Atrium',
    floor: 1,
    capacity: 12,
    equipment: ['Screen', 'Video', 'Whiteboard'],
  },
  { id: 'harbor', name: 'Harbor', floor: 1, capacity: 6, equipment: ['Screen'] },
  { id: 'nook', name: 'Nook', floor: 1, capacity: 2, equipment: [] },
  { id: 'maple', name: 'Maple', floor: 2, capacity: 8, equipment: ['Screen', 'Whiteboard'] },
  { id: 'cedar', name: 'Cedar', floor: 2, capacity: 4, equipment: ['Whiteboard'] },
  { id: 'birch', name: 'Birch', floor: 2, capacity: 4, equipment: ['Screen'] },
  {
    id: 'summit',
    name: 'Summit',
    floor: 3,
    capacity: 20,
    equipment: ['Screen', 'Video', 'Whiteboard'],
  },
  { id: 'lookout', name: 'Lookout', floor: 3, capacity: 6, equipment: ['Whiteboard'] },
];

export const RESOURCES: ScheduleResourceData[] = ROOMS.map((room) => ({
  id: room.id,
  label: room.name,
  payload: room,
}));

const FLOORS = [...new Set(ROOMS.map((room) => room.floor))];

export const FLOOR_GROUPS: ScheduleResourceGroup[] = FLOORS.map((floor) => ({
  label: `Floor ${floor}`,
  resourceIds: ROOMS.filter((room) => room.floor === floor).map((room) => room.id),
}));

export const ROOM_OPTIONS = FLOORS.map((floor) => ({
  group: `Floor ${floor}`,
  items: ROOMS.filter((room) => room.floor === floor).map((room) => ({
    value: room.id,
    label: `${room.name} · ${room.capacity} seats`,
  })),
}));

export function getRoom(roomId: string | number | null | undefined) {
  return ROOMS.find((room) => room.id === roomId);
}

type Seed = [
  day: number,
  roomId: string,
  start: string,
  end: string,
  title: string,
  organizer: string,
  attendees: number,
];

const SEED: Seed[] = [
  [0, 'atrium', '09:00', '10:00', 'Weekly planning', 'Maria Lopez', 10],
  [0, 'cedar', '11:00', '11:30', '1:1 with Sara', CURRENT_USER, 2],
  [0, 'maple', '13:00', '14:30', 'Design review', 'Jonas Weber', 6],
  [0, 'summit', '15:00', '16:30', 'All-hands rehearsal', 'Priya Shah', 15],
  [1, 'nook', '09:30', '10:00', 'Phone screen', 'Tom Becker', 2],
  [1, 'birch', '10:00', '11:30', 'Sprint retro', CURRENT_USER, 4],
  [1, 'atrium', '13:00', '14:00', 'Customer call', 'Sara Nilsson', 8],
  [1, 'lookout', '14:00', '15:00', 'Hiring sync', 'Daniel Ortiz', 4],
  [1, 'maple', '16:00', '17:00', 'Roadmap draft', 'Maria Lopez', 5],
  [2, 'summit', '09:00', '10:30', 'Quarterly review', 'Jonas Weber', 18],
  [2, 'harbor', '11:00', '12:00', 'Vendor demo', CURRENT_USER, 6],
  [2, 'cedar', '13:30', '14:30', 'Pairing session', 'Tom Becker', 2],
  [2, 'birch', '15:00', '16:00', 'Budget check', 'Priya Shah', 3],
  [2, 'atrium', '16:30', '17:30', 'Onboarding', 'Daniel Ortiz', 9],
  [3, 'maple', '09:00', '10:00', 'Architecture sync', CURRENT_USER, 7],
  [3, 'lookout', '10:30', '11:30', 'UX interviews', 'Sara Nilsson', 3],
  [3, 'harbor', '12:00', '13:00', 'Lunch & learn', 'Maria Lopez', 6],
  [3, 'summit', '14:00', '15:00', 'Board prep', 'Priya Shah', 12],
  [3, 'nook', '15:30', '16:00', 'Focus call', CURRENT_USER, 1],
  [3, 'cedar', '16:00', '17:30', 'Workshop prep', 'Jonas Weber', 4],
  [4, 'summit', '09:00', '10:00', 'Town hall setup', 'Jonas Weber', 8],
  [4, 'atrium', '10:00', '11:00', 'Demo day', 'Tom Becker', 11],
  [4, 'birch', '11:00', '12:00', 'Weekly wrap-up', CURRENT_USER, 4],
  [4, 'maple', '14:00', '15:00', 'Interview loop', 'Daniel Ortiz', 3],
  [4, 'lookout', '15:00', '16:00', 'Team retro', 'Sara Nilsson', 5],
];

/** Monday of the week that contains `date` */
export function getWeekStart(date: dayjs.ConfigType) {
  const day = dayjs(date).startOf('day');
  return day.subtract((day.day() + 6) % 7, 'day');
}

export function createInitialBookings(today: dayjs.ConfigType = dayjs()): Booking[] {
  const monday = getWeekStart(today);
  const at = (day: number, time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return monday.add(day, 'day').hour(hours).minute(minutes).format(DATE_TIME_FORMAT);
  };

  const bookings: Booking[] = SEED.map(
    ([day, roomId, start, end, title, organizer, attendees], index) => ({
      id: `booking-${index + 1}`,
      title,
      roomId,
      start: at(day, start),
      end: at(day, end),
      organizer,
      attendees,
    })
  );

  bookings.push({
    id: 'team-sync',
    title: 'Team sync',
    roomId: 'harbor',
    start: at(0, '10:00'),
    end: at(0, '10:30'),
    organizer: CURRENT_USER,
    attendees: 5,
    repeatUntil: monday.add(7, 'week').format('YYYY-MM-DD'),
  });

  return bookings;
}
