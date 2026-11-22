const PORTFOLIO = 'https://mdrakibtrofder.github.io';

export interface Partner {
  name: string;
  short: string;
  location: string;
  /** Path under /public. Missing file falls back to a monogram badge. */
  logo: string;
  /** Official website. */
  website: string;
  /** Internal link into mdrakibtrofder.github.io where collaboration details live. */
  details: { label: string; href: string };
  note: string;
}

export const partners: Partner[] = [
  {
    name: 'University of Dhaka',
    short: 'DU',
    location: 'Dhaka, Bangladesh',
    logo: '/partners/university-of-dhaka.png',
    website: 'https://www.du.ac.bd/',
    details: { label: 'Education & supervision', href: `${PORTFOLIO}/education` },
    note: 'IIT — undergraduate research, internship supervision and student mentorship.',
  },
  {
    name: 'Rajshahi University of Engineering & Technology',
    short: 'RUET',
    location: 'Rajshahi, Bangladesh',
    logo: '/partners/ruet.png',
    website: 'https://www.ruet.ac.bd/',
    details: { label: 'Education & supervision', href: `${PORTFOLIO}/supervision` },
    note: 'CSE — M.Sc. thesis research under faculty supervision.',
  },
  {
    name: 'William & Mary',
    short: 'W&M',
    location: 'Virginia, USA',
    logo: '/partners/william-and-mary.png',
    website: 'https://www.wm.edu/',
    details: { label: 'Research experience', href: `${PORTFOLIO}/experience` },
    note: 'SEMERU Lab — software reconstruction and LLM limitation studies.',
  },
  {
    name: 'Bangladesh Army University of Science and Technology, Saidpur',
    short: 'BAUST',
    location: 'Saidpur, Bangladesh',
    logo: '/partners/baust.png',
    website: 'https://baust.edu.bd/',
    details: { label: 'Teaching & experience', href: `${PORTFOLIO}/experience` },
    note: 'CSE — teaching, thesis supervision and student research mentoring.',
  },
  {
    name: 'Bangladesh University of Engineering & Technology',
    short: 'BUET',
    location: 'Dhaka, Bangladesh',
    logo: '/partners/buet.png',
    website: 'https://www.buet.ac.bd/',
    details: { label: 'Student mentorship', href: `${PORTFOLIO}/mentorship` },
    note: 'CSE — industry mentoring on satellite imagery and geospatial projects.',
  },
];
