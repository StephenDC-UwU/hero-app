import { useQuery } from "@tanstack/react-query";
import { getHeroBySlug } from "../actions/getHeroBySlug";


const useHeroBySlug = (slug?: string) => {
    return useQuery({
        queryKey: ['hero', { slug }],
        queryFn: () => getHeroBySlug(slug!),
        enabled: !!slug && slug.trim().length > 0,
        staleTime: 1000 * 60 * 5,
    })
}

export default useHeroBySlug;
