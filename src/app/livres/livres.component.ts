import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres: Livre[]; // Un tableau de Livre
/*
  constructor(private livreService: LivreService) {
    this.livres = this.livreService.listeLivres();
  }*/
  constructor(private livreService : LivreService,
    public authService: AuthService) {this.livres = this.livreService.listeLivres() }

  ngOnInit(): void {
    // Vous pouvez charger les livres ici si nécessaire
  }

  supprimerLivre(p: Livre) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.livreService.supprimerLivre(p).subscribe(
          () => {
            this.livres = this.livres.filter(livre => livre !== p); // Mise à jour locale de la liste
            Swal.fire(
              'Supprimé !',
              'Le livre a été supprimé.',
              'success'
            );
          },
          (error) => {
            Swal.fire(
              'Erreur !',
              'Il y a eu un problème lors de la suppression du livre.',
              'error'
            );
          }
        );
      }
    });
  }
   



}
