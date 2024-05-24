import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre.model';
import { LivreService } from '../livre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {


  currentLivre = new Livre();
  constructor(private activatedRoute: ActivatedRoute,private router :Router,
    private livreService: LivreService) { }
  ngOnInit() {
     this.currentLivre = this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentLivre);
  }

  updateLivre() {  
    this.livreService.updateLivre(this.currentLivre);
    this.router.navigate(['livres']);
  }
}
