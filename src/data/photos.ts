import type { ImageMetadata } from 'astro';
import sydneyHarbour from '../assets/photos/sydney-harbour.jpg';
import blueMountains from '../assets/photos/blue-mountains.jpg';
import uluru from '../assets/photos/uluru.jpg';
import kakadu from '../assets/photos/kakadu.jpg';
import kakaduSunset from '../assets/photos/kakadu-sunset.jpg';
import greatBarrierReef from '../assets/photos/great-barrier-reef.jpg';
import twelveApostles from '../assets/photos/twelve-apostles.jpg';
import tasmaniaCradle from '../assets/photos/tasmania-cradle.jpg';
import wineglassBay from '../assets/photos/wineglass-bay.jpg';
import ningaloo from '../assets/photos/ningaloo.jpg';
import kangarooIsland from '../assets/photos/kangaroo-island.jpg';
import melbourne from '../assets/photos/melbourne.jpg';
import coralCoast from '../assets/photos/coral-coast.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  place: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`;
const L = {
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'Public domain': 'https://creativecommons.org/publicdomain/mark/1.0/',
} as const;
type Lic = keyof typeof L;
const p = (src: ImageMetadata, alt: string, place: string, author: string, license: Lic, file: string): Photo => ({
  src, alt, place, author, license, licenseUrl: L[license], sourceUrl: commons(file),
});

export const PHOTOS: Record<string, Photo> = {
  'sydney-harbour': p(sydneyHarbour, 'The Sydney Opera House and Harbour Bridge seen from the water under a heavy grey sky', 'Sydney Opera House and Harbour Bridge, Sydney', 'Robertsky', 'CC BY-SA 4.0', 'ESEAP 2022 dinner cruise - Sydney Harbour Bridge and Sydney Opera House - view from the waters.jpg'),
  'blue-mountains': p(blueMountains, 'The Three Sisters sandstone pillars above the forested Jamison Valley in the Blue Mountains', 'The Three Sisters, Blue Mountains National Park, New South Wales', 'Dietmar Rabich', 'CC BY-SA 4.0', 'Blue Mountains National Park (AU), Three Sisters -- 2019 -- 1983.jpg'),
  uluru: p(uluru, 'Uluṟu glowing red in low sun beyond golden spinifex grassland', 'Uluṟu, Uluṟu-Kata Tjuṯa National Park, Northern Territory', 'Dietmar Rabich', 'CC BY-SA 4.0', 'Petermann Ranges (AU), Uluru-Kata Tjuta National Park, Uluru -- 2019 -- 3688.jpg'),
  kakadu: p(kakadu, 'Paperbark trees reflected in still water at Yellow Water in morning light', 'Yellow Water (Ngurrungurrudjba), Kakadu National Park, Northern Territory', 'Dietmar Rabich', 'CC BY-SA 4.0', 'Kakadu (AU), Kakadu National Park, Yellow Water -- 2019 -- 3795.jpg'),
  'kakadu-sunset': p(kakaduSunset, 'A lone tree silhouetted against the setting sun above the Kakadu floodplain', 'Sunset from Nadab Lookout, Kakadu National Park, Northern Territory', 'Dietmar Rabich', 'CC BY-SA 4.0', 'Kakadu (AU), Kakadu National Park, Nadap Lookout -- 2019 -- 4191.jpg'),
  'great-barrier-reef': p(greatBarrierReef, 'Branching and plate corals in clear shallow water on an outer reef', 'Agincourt Reef, Great Barrier Reef, Queensland', 'Robert Linsdell', 'CC BY 2.0', 'Agincourt Reef, Great Barrier Reef, Queensland (483733) (9443486998).jpg'),
  'twelve-apostles': p(twelveApostles, 'Limestone stacks standing off the cliffs of the Great Ocean Road coast, farmland behind', 'The Twelve Apostles, Port Campbell National Park, Victoria', 'Ank Kumar', 'CC BY-SA 4.0', '12 Apostles, Victoria, Australia (Ank Kumar) 05.jpg'),
  'tasmania-cradle': p(tasmaniaCradle, 'Dove Lake surrounded by low alpine scrub, with Cradle Mountain under cloud', 'Dove Lake and Cradle Mountain, Tasmania', 'Anagoria', 'CC BY 3.0', '2018-02-13 092342 Dove Lake, Cradle Mountain anagoria.jpg'),
  'wineglass-bay': p(wineglassBay, 'The white curve of Wineglass Bay below the granite peaks of the Hazards', 'Wineglass Bay and the Hazards from Mount Amos, Freycinet National Park, Tasmania', 'Mikeybear', 'CC BY-SA 3.0', '20100209 Wineglass Bay and The Hazards from Mt Amos peak.JPG'),
  ningaloo: p(ningaloo, 'A sandy track through dune scrub to the turquoise lagoon and reef break at Ningaloo', 'Ningaloo Reef coast, Western Australia', 'W. Bulach', 'CC BY-SA 4.0', '00 0865 Ningaloo Reef, Western Australia.jpg'),
  'kangaroo-island': p(kangarooIsland, 'Australian sea lions resting on the sand among gulls at Seal Bay', 'Seal Bay, Kangaroo Island, South Australia', 'Inas (Wikivoyage)', 'Public domain', 'Australia kangaroo island seal bay.jpg'),
  melbourne: p(melbourne, 'Melbourne city centre lit up at night and reflected in the Yarra River', 'The Yarra River and Melbourne city centre at night, Victoria', 'Dietmar Rabich', 'CC BY-SA 4.0', 'Melbourne (AU), Melbourne City Centre -- 2019 -- 1493-7.jpg'),
  'coral-coast': p(coralCoast, 'Coastal scrub running down to a turquoise lagoon and the line of the reef at Ningaloo', 'Ningaloo coast, Western Australia', 'W. Bulach', 'CC BY-SA 4.0', '00 1870 Ningaloo Reef - Westaustralien.jpg'),
};
