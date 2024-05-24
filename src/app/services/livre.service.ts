import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Observable, of } from 'rxjs';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livre!: Livre;
  livres: Livre[];
  categories: Categorie[];

  constructor() {
    this.categories = [
      { idCat: 1, nomCat: "Fiction" },
      { idCat: 2, nomCat: "Non-fiction" },
      { idCat: 3, nomCat: "Science" },
      { idCat: 4, nomCat: "Fantasy" },
      { idCat: 5, nomCat: "Mystère" },
      { idCat: 6, nomCat: "Biographie" },
      { idCat: 7, nomCat: "Philosophie" },
      { idCat: 8, nomCat: "Poésie" },
      { idCat: 9, nomCat: "Histoire" },
      { idCat: 10, nomCat: "Art" }
    ];

    this.livres = [
      { idLivre: 1, titreLivre: "War and Peace", prixLivre: 30.6, datePublication: new Date("01/14/2011"), categorie: { idCat: 1, nomCat: "Fiction" } },
      { idLivre: 2, titreLivre: "Dune", prixLivre: 45.0, datePublication: new Date("12/17/2010"), categorie: { idCat: 4, nomCat: "Fantasy" } },
      { idLivre: 3, titreLivre: "The Great Gatsby", prixLivre: 90.8, datePublication: new Date("02/20/2020"), categorie: { idCat: 1, nomCat: "Fiction" } },
      { idLivre: 10, titreLivre: "The Road", prixLivre: 22.0, datePublication: new Date("09/26/2006"), categorie: { idCat: 5, nomCat: "Mystère" } },
      { idLivre: 11, titreLivre: "The Kite Runner", prixLivre: 30.0, datePublication: new Date("05/29/2003"), categorie: { idCat: 1, nomCat: "Fiction" } },
      { idLivre: 12, titreLivre: "Life of Pi", prixLivre: 35.0, datePublication: new Date("09/11/2001"), categorie: { idCat: 4, nomCat: "Fantasy" } },
      { idLivre: 13, titreLivre: "Sapiens: A Brief History of Humankind", prixLivre: 40.0, datePublication: new Date("09/04/2014"), categorie: { idCat: 2, nomCat: "Non-fiction" } }
    ];
  }

  listeLivres(): Livre[] {
    return this.livres;
  }

  ajouterLivre(livrs: Livre) {
    this.livres.push(livrs);
  }

  consulterLivre(id: number): Livre {
    this.livre = this.livres.find(p => p.idLivre == id)!;
    return this.livre;
  }

  supprimerLivre(livre: Livre): Observable<void> {
    const index = this.livres.indexOf(livre, 0);
    if (index > -1) {
      this.livres.splice(index, 1);
    }
    return of();
  }

  trierLivres() {
    this.livres.sort((n1, n2) => n1.idLivre! - n2.idLivre!);
  }

  updateLivre(p: Livre) {
    const index = this.livres.findIndex(livre => livre.idLivre === p.idLivre);
    if (index !== -1) {
      this.livres[index] = p;
      this.trierLivres();
    }
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  }

  
}
