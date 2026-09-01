import type { Hero } from "./heroInterface";

export interface HeroesReponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}

