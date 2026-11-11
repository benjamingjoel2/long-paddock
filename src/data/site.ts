export const SITE = {
  name: 'Long Paddock',
  url: 'https://longpaddock.tourground.com',
  tagline: 'Travel stories for planning a trip to Australia',
  description:
    'Story-led, practical travel writing for people planning a trip to Australia: the outback, the reef, road trips, wildlife and cities. Published by Tourground.',
  email: 'longpaddock@tourground.com',
  locale: 'en_AU',
  lang: 'en-AU',
  launched: '2026-11-11',
  publisher: {
    name: 'Tourground',
    url: 'https://tourground.com',
    directoryUrl: 'https://tourground.com/#/p-directory',
  },
} as const;

export type CategoryId = 'destinations' | 'road-trips' | 'wildlife' | 'outback' | 'itineraries' | 'travel-tips';

export const CATEGORIES: { id: CategoryId; name: string; href: string; blurb: string }[] = [
  {
    id: 'destinations',
    name: 'Destinations',
    href: '/destinations/',
    blurb: 'Cities, parks and regions, from Sydney Harbour to the Top End.',
  },
  {
    id: 'road-trips',
    name: 'Road trips',
    href: '/category/road-trips/',
    blurb: 'Coast roads, outback highways and how to drive them safely.',
  },
  {
    id: 'wildlife',
    name: 'Wildlife',
    href: '/category/wildlife/',
    blurb: 'Where to see Australian animals in the wild, and how to behave when you do.',
  },
  {
    id: 'outback',
    name: 'Outback',
    href: '/category/outback/',
    blurb: 'The Red Centre, the Top End and the long country in between.',
  },
  {
    id: 'itineraries',
    name: 'Itineraries',
    href: '/category/itineraries/',
    blurb: 'Routes that fit the distances: a week, three weeks, one region done well.',
  },
  {
    id: 'travel-tips',
    name: 'Travel tips',
    href: '/category/travel-tips/',
    blurb: 'Visas, seasons, safety and the practical things first-timers ask.',
  },
];

export type DestinationId =
  | 'sydney'
  | 'melbourne'
  | 'red-centre'
  | 'great-barrier-reef'
  | 'top-end'
  | 'tasmania'
  | 'western-australia'
  | 'south-australia';

export const DESTINATIONS: { id: DestinationId; name: string; state: string; photo: string; blurb: string }[] = [
  { id: 'sydney', name: 'Sydney', state: 'New South Wales', photo: 'sydney-harbour', blurb: 'The harbour city, the beaches and the Blue Mountains on the doorstep.' },
  { id: 'melbourne', name: 'Melbourne', state: 'Victoria', photo: 'melbourne', blurb: 'Laneways and tables, then the Great Ocean Road heading west.' },
  { id: 'red-centre', name: 'The Red Centre', state: 'Northern Territory', photo: 'uluru', blurb: 'Uluṟu, Kata Tjuṯa, Alice Springs and the ranges.' },
  { id: 'great-barrier-reef', name: 'The Great Barrier Reef', state: 'Queensland', photo: 'great-barrier-reef', blurb: 'Where to base yourself on the reef, and which months suit it.' },
  { id: 'top-end', name: 'The Top End', state: 'Northern Territory', photo: 'kakadu', blurb: 'Kakadu, Litchfield, Nitmiluk and Darwin, best in the dry.' },
  { id: 'tasmania', name: 'Tasmania', state: 'Tasmania', photo: 'wineglass-bay', blurb: 'Wild parks, convict history and a coast made for a slow loop.' },
  { id: 'western-australia', name: 'Western Australia', state: 'Western Australia', photo: 'coral-coast', blurb: 'The long coast north from Perth to Ningaloo.' },
  { id: 'south-australia', name: 'South Australia', state: 'South Australia', photo: 'kangaroo-island', blurb: 'Kangaroo Island, sea lions and wine country.' },
];

export const AUTHORS: Record<string, { name: string; role: string; bio: string }> = {
  'long-paddock-editors': {
    name: 'Long Paddock editors',
    role: 'Editorial desk, Tourground',
    bio: 'The Long Paddock desk writes and fact-checks every story on this site. We check visa, park and safety details against the official source, link it, and show the date we last checked.',
  },
};

export const catName = (id: string) => CATEGORIES.find((c) => c.id === id)?.name ?? id;
export const catHref = (id: string) => CATEGORIES.find((c) => c.id === id)?.href ?? '/';
export const destName = (id: string) => DESTINATIONS.find((d) => d.id === id)?.name ?? id;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
