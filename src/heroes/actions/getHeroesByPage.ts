import { heroApi } from "../api/hero.api"
import type { HeroesReponse } from "../types/getHeroesResponse";

const BASE_URL = import.meta.env.VITE_API_URL;


export const getHeroesByPage = async (
    page: number,
    limit: number = 6,
    category: string
): Promise<HeroesReponse> => {

    if(isNaN(page) || isNaN(limit)){
        page = 1
        limit = 6
    }


    const {data} = await heroApi.get<HeroesReponse>('/', {
        params:{
            limit: limit,
            offset: (page - 1 ) * limit,
            category: category
        }
    })

    const heroes = data.heroes.map(hero => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`
    }))

    return {
        ...data,
        heroes: heroes
    };
}


