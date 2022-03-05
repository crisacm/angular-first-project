import { Personaje } from "./personaje";

export class Capitulo {
    id?: number;
    name?: string;
    air_date?: string;
    episode?: string;
    characters?: string[];
    personajes?: Personaje[];
    url?: string;
}