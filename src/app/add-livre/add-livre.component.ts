import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Categorie } from '../model/categorie.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

  newLivre = new Livre();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;


  constructor(private livreService: LivreService,
    private router: Router) { }
  ngOnInit() {
    this.categories = this.livreService.listeCategories();
  }
  addLivre() {
    this.newCategorie =
      this.livreService.consulterCategorie(this.newIdCat);
    this.newLivre.categorie = this.newCategorie;
    this.livreService.ajouterLivre(this.newLivre);
    this.router.navigate(['livres']);
  }

}
