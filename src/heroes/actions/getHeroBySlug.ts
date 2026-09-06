import { heroApi } from "../api/hero.api"
import type { Hero } from "../types/heroInterface";


const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroBySlug = async (idSlug:string):Promise<Hero>  => {

    const {data} = await heroApi.get<Hero>(`/${idSlug}`);

    return {
        ...data,
         image: `${BASE_URL}/images/${data.image}`
    }
}
