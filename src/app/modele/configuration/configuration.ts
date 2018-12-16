export class Configuration {
    serveurUrl: string;
    loginUrl: string;

    constructor() {
        this.serveurUrl = 'http://localhost:8080';
        this.loginUrl = '/be/login';
    }
}
