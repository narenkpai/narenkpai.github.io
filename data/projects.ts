export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'PathSense',
    description:
      'Improving Quadruped navigation for SAR (Search and Rescue) missions via a TOF Cameras, reducing reliance on IMU and other data sources.',
    logo: '/logos/pathsense.png',
    link: 'https://youtu.be/1k9JwCRWLCQ',
    slug: 'PathSense',
  },
  {
    title: 'FireScout',
    description:
      'A Software-based solution to UAV navigation in deployment to prevent forest fires. recieved 2nd Place in SmathHacks Hackathon Hardware Track',
    logo: '/logos/firescout.png',
    link: 'https://devpost.com/software/firescout',
    slug: 'firescout',
  },
  {
    title: 'Prescription Protectors',
    description:
      'A IOT device and phone app that reminds users to take their medication at the right time, and in the right dosages.',
    logo: '/logos/prescriptionprotectors.png',
    link: 'https://devpost.com/software/prescription-protectors',
    slug: 'prescriptionprotectors',
  },
  {
    title: 'Pedestrian Protectors',
    description:
      'An IOT based system that alerts both pedestrians and drivers of a crosswalk crossing occuring. Recieved 1st place in the Thomas Edision Pitch Competition',
    logo: '/logos/pedestrianProtector.png',
    link: 'https://youtu.be/qMTO9zMJwYk',
    slug: 'PedestrianProtectorDevice',
  },
];
