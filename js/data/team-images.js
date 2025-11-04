// js/data/team-images.js
// Enthält die Bilddaten für die Team-Sektion

/**
 * An array of team member images.
 * Each object contains:
 * - `name` (string): Display name
 * - `role` (string): Role description
 * - `serious` (object): { basename, alt }
 * - `smiling` (object): { basename, alt }
 * - `email` (string): Contact email
 * - `phone` (string): Contact phone
 */
export const teamImages = [
  {
    name: 'Ronny',
    role: 'Der Chef',
    serious: { basename: 'ronny-serious', alt: 'Ronny Lietha' },
    smiling: { basename: 'ronny-smiling', alt: 'Ronny Lietha lachend' },
    email: 'rl@l-b-m.ch',
    phone: '+41 79 501 75 72',
    fullName: 'Ronny Lietha',
    job: 'Geschäftsführer, Bauleiter'
  },
  {
    name: 'Manuela',
    role: 'Die Organisatorin',
    serious: { basename: 'manuela-serious', alt: 'Manuela Lietha' },
    smiling: { basename: 'manuela-smiling', alt: 'Manuela Lietha lachend' },
    email: 'ml@l-b-m.ch',
    phone: '+41 78 847 59 65',
    fullName: 'Manuela Lietha',
    job: 'Administration, HR'
  },
  {
    name: 'Thomas',
    role: 'Der Entwickler',
    serious: { basename: 'thomas-serious', alt: 'Thomas Clavadetscher' },
    smiling: { basename: 'thomas-smiling', alt: 'Thomas Clavadetscher lachend' },
    email: 'tc@l-b-m.ch',
    phone: '+41 79 567 42 70',
    fullName: 'Thomas Clavadetscher',
    job: 'Projektentwickler'
  },
  {
    name: 'Roman',
    role: 'Der Praktiker',
    serious: { basename: 'roman-serious', alt: 'Roman Wolf' },
    smiling: { basename: 'roman-smiling', alt: 'Roman Wolf lachend' },
    email: 'rw@l-b-m.ch',
    phone: '+41 79 600 93 83',
    fullName: 'Roman Wolf',
    job: 'Junior Bauleiter'
  },
  {
    name: 'Mike',
    role: 'Der Anpacker',
    serious: { basename: 'mike-serious', alt: 'Mike Jäger' },
    smiling: { basename: 'mike-smiling', alt: 'Mike Jäger lachend' },
    email: 'mj@l-b-m.ch',
    phone: '+41 79 900 75 72',
    fullName: 'Mike Jäger',
    job: 'Bauleiter'
  }
];
