import { heroApi } from "../api/hero.api"
import type { HeroesReponse } from "../types/getHeroesResponse";

const BASE_URL = import.meta.env.VITE_API_URL;


export const getHeroesByPage = async (): Promise<HeroesReponse> => {
    const {data} = await heroApi.get<HeroesReponse>('/');

    const heroes = data.heroes.map(hero => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`
    }))

    return {
        ...data,
        heroes: heroes
    };
}


