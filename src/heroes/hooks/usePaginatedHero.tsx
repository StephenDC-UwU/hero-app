import { useQuery } from "@tanstack/react-query";
import { getHeroesByPage } from "../actions/getHeroesByPage";


const usePaginatedHero = (page: string, limit: string, category: string) => {

    return useQuery({
        queryKey: ['heroes', { page, limit, category }],
        queryFn: () => getHeroesByPage(+page, +limit, category),
        staleTime: 1000 * 60 * 5
    })
}

export default usePaginatedHero;
