export class Configuration {
    serveurUrl: string;
    loginUrl: string;
    inscriptionUrl: string;

    constructor() {
        this.serveurUrl = 'http://localhost:8080';
        this.loginUrl = '/be/login';
        this.inscriptionUrl = '/be/inscription';
    }

}
