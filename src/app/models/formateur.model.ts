export class Formateur {
  id: number = 0;
  nom: string = '';
  prenom: string = '';
  cin: string = '';
  civilite: 'monsieur' | 'madame' | 'mademoiselle' = 'monsieur';
  dateNaissance: string = '';
  situationFamiliale: 'celibataire' | 'marie' | 'divorce' | 'veuf' = 'celibataire';
  nombreEnfants: number = 0;
  dateAffectation: string = '';
  photo!: File ;
  dateDebut: string = '';
  matricule: string = '';
  pole: 'tourisme' | 'hotellerie' | 'services' | 'agro-industrie' | 'arts' | 'gestion-commerce' | 'industrie-agriculture' | 'digital-ai' | 'artisanat' = 'tourisme';
  emailPro: string = '';
  emailPerso: string = '';
  tel1: string = '';
  tel2: string = '';
  adresse: string = '';
  ville: string = '';
}

