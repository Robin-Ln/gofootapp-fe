import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
	selector: 'app-gestionequipe',
	templateUrl: './gestionequipe.component.html',
	styleUrls: ['./gestionequipe.component.css']
})

export class GestionequipeComponent {

	attaquants = [
		'AT-Paul Herve',
		'ATG-Gaetan Louarn',
		'ATD-Alex auau'
	];

	defenseurs = [
		'DG-Roger Adrien',
		'DCG-Aubry Thierry',
		'DCD-George Pompi',
		'DD-Dede drouet'
	];

	milieux = [
		'MOC-Roger Michel',
		'MDCG-Claude Benoit',
		'MDCD-Raul lala'
	];

	gardiens = [
		'G-Claude Puel',
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
}

