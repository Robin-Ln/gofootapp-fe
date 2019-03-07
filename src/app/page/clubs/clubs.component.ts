import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { Club } from 'src/app/modele/club';
import { ClubService } from 'src/app/service/club/club.service';
import { Router } from '@angular/router';
import { NouveauClub } from 'src/app/modele/nouveauClub';
import { InscriptionAuClub } from 'src/app/modele/InscriptionAuClub';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
})

export class ClubsComponent implements OnInit {
  clubs: Club[];
  retour: Boolean;
  nouveauClubForm: FormGroup;
  nouvelleEquipeForm: FormGroup;
  loading: Boolean = false;

  constructor(private clubService: ClubService, private formBuilder: FormBuilder,private router: Router) {
  }

  ngOnInit() {
    console.log('Le composant a fini son initialisation');
    this.getRejoindreClub();
    this.nouveauClubForm=this.formBuilder.group({
      nomClub : new FormControl('',Validators.compose([Validators.minLength(3),Validators.required]))
    });

    this.nouvelleEquipeForm=new FormGroup({
      nomEquipe : new FormControl('')
    });
  }

  getRejoindreClub() {
    this.clubs = [];
    this.clubService.getListeClubNonAdherer(3).subscribe(data => { this.clubs = data; });
  }

  getMesClub() {
    this.clubs = [];
    this.clubService.getListeClubAdherer(3).subscribe(data => { this.clubs = data; });
  }

  async inscriptionClub(idc: Number,idu :Number){
    const inscriptionClub: InscriptionAuClub=new InscriptionAuClub();
    inscriptionClub.idClub=idc;
    inscriptionClub.idUtilisateur=idu;
    const retour :Boolean =await this.clubService.rejoindreClub(inscriptionClub);
    if(retour){
      this.getRejoindreClub();
      console.log("a rejoint !")
    }
   
  }

  async nouveauClub() {
    if((this.nouveauClubForm.invalid)||((this.nouveauClubForm.value.nomClub).split(' ').join('').length<3)){
      console.log("Nouveau club invalide ");
      return;
    }
    this.loading = true;
    const nouveauClub: NouveauClub=new NouveauClub();
    nouveauClub.nom=this.nouveauClubForm.value.nomClub;
    nouveauClub.idUtilisateur=3;
    const retour :Boolean =await this.clubService.creeNouveauClub(nouveauClub);
    if(retour){
      this.getRejoindreClub();
      console.log("club Creer!");
     
    }else{
      console.log("ERREUR :Creation club impossible ");
    }
    this.loading = false;
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
