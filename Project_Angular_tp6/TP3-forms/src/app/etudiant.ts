/**
 * Classe Etudiant - Modèle de données
 * TP6 - Formulaires basés sur des modèles (Template-Driven Forms)
 * 
 * Le compilateur TypeScript génère un champ public pour chaque paramètre public
 * du constructor et affecte automatiquement la valeur du paramètre à ce champ
 * lorsque vous créez un Etudiant.
 * 
 * Le Surname est optionnel (notez le point d'interrogation ?)
 * ceci permet au constructor de l'omettre.
 */
export class Etudiant {
  constructor(
    public id: number,
    public name: string,
    public classe: string,
    public Surname?: string
  ) { }
}
