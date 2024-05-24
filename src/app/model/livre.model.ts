import { Categorie } from '../model/categorie.model';
export class Livre {
    idLivre?: number;
    titreLivre?: string;
    prixLivre?: number;
    datePublication?: Date;
    categorie!: Categorie;
}