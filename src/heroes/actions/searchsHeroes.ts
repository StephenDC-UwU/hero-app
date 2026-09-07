import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/heroInterface";
import type { Options } from "../types/heroOptionsInterface";

const BASE_URL = import.meta.env.VITE_API_URL;


export const searchsHeroes = async (inputSearchHero: Options) =>{

        const {data} = await heroApi.get<Hero[]>('/search', {
            params:{
                name: inputSearchHero.name ?? '',
                team: inputSearchHero.team ?? '',
                category: inputSearchHero.category ?? '',
                universe: inputSearchHero.universe ?? '',
                status: inputSearchHero.status ?? '',
                strength: inputSearchHero.strength ?? '',
            }
        });


            return data.map(hero => ({
                ...hero,
                image: `${BASE_URL}/images/${hero.image}`
        }))

}