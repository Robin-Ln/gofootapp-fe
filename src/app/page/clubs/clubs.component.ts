import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/modele/club';
import { ClubService } from 'src/app/service/club/club.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { NouveauClub } from 'src/app/modele/nouveauClub';
=======
import { InscriptionAuClub } from 'src/app/modele/InscriptionAuClub';
>>>>>>> branch 'master' of https://github.com/Robin-Ln/gofootapp-fe.git

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
})

export class ClubsComponent implements OnInit {
  clubs: Club[];
  retour: Boolean;
  constructor(private clubService: ClubService, private router: Router) {
  }

  ngOnInit() {
    console.log('Le composant a fini son initialisation');
    this.getRejoindreClub();
  }

  getRejoindreClub() {
    this.clubs = [];
    this.clubService.getListeClubNonAdherer(3).subscribe(data => { this.clubs = data; });
  }

  getMesClub() {
    this.clubs = [];
    this.clubService.getListeClubAdherer(3).subscribe(data => { this.clubs = data; });
  }

<<<<<<< HEAD
  async inscriptionClub(idc: Number,idu :Number){
    const inscriptionClub: InscriptionClub=new InscriptionClub();
    inscriptionClub.idClub=idc;
    inscriptionClub.idUtilisateur=idu;
    const retour :Boolean =await this.clubService.rejoindreClub(inscriptionClub);
    if(retour){
      this.getRejoindreClub();
      console.log("a rejoint !")
    }
   
  }

  async nouveauClub(nomClub: String,idu :Number){
    const nouveauClub: NouveauClub=new NouveauClub();
    nouveauClub.nom=nomClub;
    nouveauClub.idUtilisateur=idu;
    const retour :Boolean =await this.clubService.creeNouveauClub(nouveauClub);
    if(retour){
      this.getRejoindreClub();
      console.log("club Creer!")
    }
   
=======
  inscriptionClub(idc: Number, idu: Number) {
    const inscriptionClub: InscriptionAuClub = new InscriptionAuClub();
    inscriptionClub.idClub = idc;
    inscriptionClub.idUtilisateur = idu;
    this.clubService.rejoindreClub(inscriptionClub).subscribe(data => { this.retour = data; });
    this.getRejoindreClub();
>>>>>>> branch 'master' of https://github.com/Robin-Ln/gofootapp-fe.git
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
