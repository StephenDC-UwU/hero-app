import { useQuery } from "@tanstack/react-query";
import type { Options } from "../types/heroOptionsInterface";
import { searchsHeroes } from "../actions/searchsHeroes";


const useHeroSearchByOptions = (options: Options) => {
    return useQuery({
        queryKey: ['searchs-heroes', options],
        queryFn: () => searchsHeroes(options!),
        staleTime: 1000 * 60 * 5,
    })
}

export default useHeroSearchByOptions;
