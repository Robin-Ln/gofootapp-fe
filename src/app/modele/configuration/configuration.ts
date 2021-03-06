export class Configuration {
    serveurUrl: string;
    loginUrl: string;
    inscriptionUrl: string;
    clubNonAdhererUrl: string;
    clubAdhererUrl: string;
    rejoindreClubUrl: string;
    nouveauClubUrl: string;
    planningEvenementUrl: string;
    idclubentraineurUrl: string;
    listeJoueurClubUrl: string;
    listeJoueurTerrainUrl: string;
    getIdOfJoueurUrl : string;
    enregistrementequipe : string;
    
    constructor() {
        this.serveurUrl = 'http://localhost:8080';
        this.loginUrl = '/be/login';
        this.inscriptionUrl = '/be/inscription';
        this.clubNonAdhererUrl = '/be/clubNonAdherer';
        this.clubAdhererUrl = '/be/clubAdherer';
        this.rejoindreClubUrl = '/be/rejoindreClub';
        this.planningEvenementUrl = '/be/planning/evenements';
        this.nouveauClubUrl='/be/nouveauClub';
        this.idclubentraineurUrl='/be/clubidentraineur';
        this.listeJoueurClubUrl='/be/getListeJoueurClub';
        this.listeJoueurTerrainUrl='/be/getListeJoueurTerrain';
        this.getIdOfJoueurUrl='/be/getIdOfJoueur';
        this.enregistrementequipe='/be/Enregistrementequipe';
    }

}
