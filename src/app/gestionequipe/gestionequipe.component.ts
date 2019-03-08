import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IdClubEntraineur } from '../modele/IdClubEntraineur';
import { GestionEquipeService } from 'src/app/service/gestionequipe/gestionequipe.service';
import { Router } from '@angular/router';
import { CookieService } from 'ng2-cookies';
import { joueur } from '../modele/joueur';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Login } from 'src/app/modele/login';

/**
 * @title Drag&Drop sorting
 */
@Component({
	selector: 'app-gestionequipe',
	templateUrl: './gestionequipe.component.html',
	styleUrls: ['./gestionequipe.component.css']
})

export class GestionequipeComponent implements OnInit {

	constructor(private FormBuilder: FormBuilder, private cookieService: CookieService, private gestionEquipeService: GestionEquipeService, private router: Router) {
	}

	id: IdClubEntraineur;
	mail: String;
	Listofjoueurs: joueur[];
	ListofjoueurTerrain: joueur[];
	compte: number;
	tableau: number[];
	joueurfoot: joueur;
	gestionequipeForm: FormGroup;

	ngOnInit() {
		console.log('Le composant a fini son initialisation');
		this.gestionequipeForm = this.FormBuilder.group({});
		// Initialisation de la liste de tout les joueurs 
		this.getClubEntraineur();
	}

	async getClubEntraineur() {
		this.mail = this.cookieService.get("user");
		console.log(this.mail);
		this.id = await this.gestionEquipeService.getClubUtilisateur(this.mail);
		this.getListofJoueur();
	}

	async getListofJoueur() {
		this.Listofjoueurs = await this.gestionEquipeService.getListjoueur(this.id.id);
		this.getListeofJoueurTerrain();
	}

	async getListeofJoueurTerrain() {
		this.ListofjoueurTerrain = await this.gestionEquipeService.getListjoueurTerrain(this.id.id);
		this.doublecheck();
	}

	doublecheck() {
		this.ListofjoueurTerrain.forEach(elementjoueurterrain => {
			this.compte = 0;
			this.Listofjoueurs.forEach(elementjoueur => {
				if (elementjoueur.nom == elementjoueurterrain.nom) {
					console.log("match sur" + this.compte);
					this.Listofjoueurs.splice(this.compte, 1);
				}
				this.compte++;
			});
		});
		this.moveonalltable();
	}

	moveonalltable() {
		this.Listofjoueurs.forEach(element => {

			if (element.role == "AT" || element.role == "ATG" || element.role == "ATD") {
				this.attaquants.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "MOC" || element.role == "MDCD" || element.role == "MDCG") {
				this.milieux.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "DCD" || element.role == "DCG" || element.role == "DD" || element.role == "DG") {
				this.defenseurs.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role = "GD") {
				this.gardiens.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}
		});

		this.moveonalltableterrain();
	}

	moveonalltableterrain() {
		this.ListofjoueurTerrain.forEach(element => {

			if (element.role == "AT") {
				this.attaquant.splice(0, 1);
				this.attaquant.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "ATG") {
				this.attg.splice(0, 1);
				this.attg.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "ATD") {
				this.attd.splice(0, 1);
				this.attd.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "MOC") {
				this.moc.splice(0, 1);
				this.moc.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "MDCD") {
				this.mdcd.splice(0, 1);
				this.mdcd.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "MDCG") {
				this.mdcg.splice(0, 1);
				this.mdcg.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "DCD") {
				this.dfcd.splice(0, 1);
				this.dfcd.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "DCG") {
				this.dfcg.splice(0, 1);
				this.dfcg.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "DD") {
				this.dfd.splice(0, 1);
				this.dfd.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "DG") {
				this.dfg.splice(0, 1);
				this.dfg.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}

			if (element.role == "GD") {
				this.gd.splice(0, 1);
				this.gd.push(element.role + "-" + element.nom + " " + element.prenom);
				return;
			}
		});
	}

	attaquants = [
	];

	defenseurs = [
	];

	milieux = [
	];

	gardiens = [
	];

	attaquant = new Array(1);

	attd = new Array(1);

	moc = new Array(1);

	attg = new Array(1);

	mdcg = new Array(1);

	mdcd = new Array(1);

	dfg = new Array(1);

	dfd = new Array(1);

	dfcg = new Array(1);

	dfcd = new Array(1);

	gd = new Array(1);

	drop(event: CdkDragDrop<string[]>) {

		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			if (event.container.id == "listatt" && this.attaquant.length == 1) {
				if (!this.attaquant[0] == false) {
					this.attaquants.push(this.attaquant[0]);
				}
				this.attaquant.splice(0, 1);
			}
			if (event.container.id == "listattd" && this.attd.length == 1) {
				if (!this.attd[0] == false) {
					this.attaquants.push(this.attd[0]);
				}
				this.attd.splice(0, 1);
			}
			if (event.container.id == "listmoc" && this.moc.length == 1) {
				if (!this.moc[0] == false) {
					this.milieux.push(this.moc[0]);
				}
				this.moc.splice(0, 1);
			}
			if (event.container.id == "listattg" && this.attg.length == 1) {
				if (!this.attg[0] == false) {
					this.attaquants.push(this.attg[0]);
				}
				this.attg.splice(0, 1);
			}
			if (event.container.id == "listmdcg" && this.mdcg.length == 1) {
				if (!this.mdcg[0] == false) {
					this.milieux.push(this.mdcg[0]);
				}
				this.mdcg.splice(0, 1);
			}
			if (event.container.id == "listmdcd" && this.mdcd.length == 1) {
				if (!this.mdcd[0] == false) {
					this.milieux.push(this.mdcd[0]);
				}
				this.mdcd.splice(0, 1);
			}
			if (event.container.id == "listdfg" && this.dfg.length == 1) {
				if (!this.dfg[0] == false) {
					this.defenseurs.push(this.dfg[0]);
				}
				this.dfg.splice(0, 1);
			}
			if (event.container.id == "listdfd" && this.dfd.length == 1) {
				if (!this.dfd[0] == false) {
					this.defenseurs.push(this.dfd[0]);
				}
				this.dfd.splice(0, 1);
			}
			if (event.container.id == "listdfcg" && this.dfcg.length == 1) {
				if (!this.dfcg[0] == false) {
					this.defenseurs.push(this.dfcg[0]);
				}
				this.dfcg.splice(0, 1);
			}
			if (event.container.id == "listdfcd" && this.dfcd.length == 1) {
				if (!this.dfcd[0] == false) {
					this.defenseurs.push(this.dfcd[0]);
				}
				this.dfcd.splice(0, 1);
			}
			if (event.container.id == "listgd" && this.gd.length == 1) {
				if (!this.gd[0] == false) {
					this.gardiens.push(this.gd[0]);
				}
				this.gd.splice(0, 1);
			}
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
		}
	}

	splitjoueur(chaine: String) {

		var splitteur1 = chaine;
		var splitteur2 = splitteur1.split("-");
		var splitteur3 = splitteur2[1];
		var splitteur4 = splitteur3.split(" ");
		console.log(splitteur4[0] + splitteur4[1]);

		return splitteur4[0];
	}

	async enregistrementEquipe() {

		this.tableau = new Array(1);
		this.tableau.splice(0, 1);

		if (!this.gd[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.gd[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.dfcd[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.dfcd[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.dfcg[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.dfcg[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.dfg[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.dfg[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.dfd[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.dfd[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.mdcd[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.mdcd[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.mdcg[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.mdcg[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.attg[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.attg[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.attd[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.attd[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.moc[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.moc[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}
		if (!this.attaquant[0] == false) {
			this.joueurfoot = await this.gestionEquipeService.getIdJoueur(this.splitjoueur(this.attaquant[0]).trim());
			if (this.joueurfoot != null) {
				console.log("isenter");
				this.tableau.push(this.joueurfoot.idUtilisateur);
			}
		}

		console.log(this.tableau);
		await this.gestionEquipeService.AjoutEquipe(this.tableau);
		this.router.navigate(['/club']);
	}


}
