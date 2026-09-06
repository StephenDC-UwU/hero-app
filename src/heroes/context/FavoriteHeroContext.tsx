import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/heroInterface";


interface FavoriteHeroContext {
    //State
    favorites: Hero[],
    favoriteCount: number,

    //Methods
    isFavorite: (hero: Hero) => boolean,
    toggleFavorite: (hero: Hero) => void
}


// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);


const getFavoriteFromLocalStorage = () => {
    const favorites = localStorage.getItem('favorite');
    return favorites ? JSON.parse(favorites) : [];
}



export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoriteFromLocalStorage());

    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find((h) => h.id === hero.id);
        if (heroExist) {
            return setFavorites(favorites.filter((h) => h.id !== hero.id))
        }
        setFavorites([...favorites, hero]);
    }

    const isFavorite = (hero: Hero) => {
        const heroExist = favorites.some((h) => h.id === hero.id);
        return !!heroExist;
    }


    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoriteHeroContext
            value={
                {
                    //State
                    favoriteCount: favorites.length,
                    favorites: favorites,
                    //Methods
                    isFavorite: isFavorite,
                    toggleFavorite: toggleFavorite
                }
            }
        >
            {children}
        </FavoriteHeroContext>
    )
}

