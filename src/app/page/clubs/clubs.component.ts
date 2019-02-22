import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/modele/club';
import { ClubService } from 'src/app/service/club/club.service';
import { InscriptionClub } from 'src/app/modele/inscriptionClub';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
})

export class ClubsComponent implements OnInit {
  clubs: Club[];
  retour: Boolean;
  constructor(private clubService: ClubService,private router: Router) {
  }

  ngOnInit() {
    console.log('Le composant a fini son initialisation');
    this.getRejoindreClub();
  }

  getRejoindreClub() {
    this.clubs=[];
    this.clubService.getListeClubNonAdherer(3).subscribe(data => { this.clubs = data; });
  }

  getMesClub() {
    this.clubs=[];
    this.clubService.getListeClubAdherer(3).subscribe(data => { this.clubs = data; });
  }

  inscriptionClub(idc: Number,idu :Number){
    const inscriptionClub: InscriptionClub=new InscriptionClub();
    inscriptionClub.idClub=idc;
    inscriptionClub.idUtilisateur=idu;
    this.clubService.rejoindreClub(inscriptionClub).subscribe(data => { this.retour = data; });
    this.getRejoindreClub();
  }

  gestionnaireOnglet(event) {
    switch (event.index) {
      case 0:
        this.getRejoindreClub();
        break;
      case 1:
        this.getMesClub();
        break;
      case 2:
        break;
    }

  }

}
