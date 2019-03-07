
import {Equipe} from 'src/app/modele/equipe';
export interface Club {
    id: Number;
    nom: string;
    nombreAdherent: Number;
    equipes: Equipe[];
}
