/**
 * Interface pour définir la structure d'un étudiant
 */
export interface Student {
  id: number;
  name: string;
  classe?: string;
}

/**
 * Tableau statique contenant la liste des étudiants
 * Cette liste peut être utilisée dans n'importe quel composant
 */
export const Students: Student[] = [
  { id: 1, name: 'Asma', classe: 'TI-2A' },
  { id: 2, name: 'Oumaima', classe: 'TI-2A' },
  { id: 3, name: 'Raouf', classe: 'TI-2B' },
  { id: 4, name: 'Ibrahim', classe: 'TI-2A' },
  { id: 5, name: 'Nour', classe: 'TI-2B' },
  { id: 6, name: 'Rihem', classe: 'TI-2A' },
  { id: 7, name: 'Dyama', classe: 'TI-2B' },
  { id: 8, name: 'Dr IQ', classe: 'TI-2A' },
  { id: 9, name: 'Howa', classe: 'TI-2B' },
  { id: 10, name: 'Hiya', classe: 'TI-2A' }
];
