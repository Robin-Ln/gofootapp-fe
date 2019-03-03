export class Configuration {
    serveurUrl: string;
    loginUrl: string;
    inscriptionUrl: string;
    clubNonAdhererUrl: string;
    clubAdhererUrl: string;
    rejoindreClubUrl: string;
    nouveauClubUrl: string;
    constructor() {
        this.serveurUrl = 'http://localhost:8080';
        this.loginUrl = '/be/login';
        this.inscriptionUrl = '/be/inscription';
        this.clubNonAdhererUrl = '/be/clubNonAdherer';
        this.clubAdhererUrl='/be/clubAdherer';
        this.rejoindreClubUrl='/be/rejoindreClub';
        this.nouveauClubUrl='/be/nouveauClub';
    }

}
