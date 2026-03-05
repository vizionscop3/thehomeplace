/**
 * Room data for The Home Place floor plan navigation
 * Maps rooms to pages per PRD §3
 */

export interface Room {
  id: string;
  name: string;
  path: string;
  metaphor: string;
  color: string;
  description: string;
}

export const rooms: Room[] = [
  {
    id: 'room-entryway',
    name: 'Front Porch',
    path: '/',
    metaphor: 'The front of the house where you are greeted and welcomed in',
    color: 'var(--color-purple)',
    description: 'Welcome to The Home Place'
  },
  {
    id: 'room-living',
    name: 'Living Room',
    path: '/about',
    metaphor: 'Where the family gathers to share their story and values',
    color: 'var(--color-green)',
    description: 'Learn about our mission and founders'
  },
  {
    id: 'room-kitchen',
    name: 'Kitchen',
    path: '/services',
    metaphor: 'Where nourishment is prepared and shared for all who enter',
    color: 'var(--color-gold)',
    description: 'Worship services and spiritual programs'
  },
  {
    id: 'room-backyard',
    name: 'Backyard',
    path: '/outreach',
    metaphor: 'Reaching beyond the walls of the home and into the community',
    color: 'var(--color-green)',
    description: 'Community programs and volunteer opportunities'
  },
  {
    id: 'room-study',
    name: 'Study',
    path: '/contact',
    metaphor: 'A quiet space for personal connection and correspondence',
    color: 'var(--color-purple)',
    description: 'Get in touch with us'
  }
];

export const getRoomByPath = (path: string): Room | undefined => {
  return rooms.find(room => room.path === path);
};

export const getRoomById = (id: string): Room | undefined => {
  return rooms.find(room => room.id === id);
};
