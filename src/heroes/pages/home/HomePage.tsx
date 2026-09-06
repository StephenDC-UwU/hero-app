import {
    Filter,
    Heart,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "../search/ui/SearchControls"
import HeroGrid from "@/heroes/components/HeroGrid"
import CustomPagination from "@/components/custom/CustomPagination"
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs"

import { useSearchParams } from "react-router"
import useHeroSummary from "@/heroes/hooks/useHeroSummary"
import usePaginatedHero from "@/heroes/hooks/usePaginatedHero"
import { use } from "react"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"


const HomePage = () => {

    const validTabs = ['all', 'favorites', 'heroes', 'villains']
    const [searchParams, setSearchParams] = useSearchParams();


    const getTabActive = searchParams.get('active-tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';
    const category = searchParams.get('category') ?? 'all';

    const tabActive = validTabs.includes(getTabActive) ? getTabActive : 'all';



    const { favorites: heroesFavorites, favoriteCount } = use(FavoriteHeroContext);
    const { data: heroesResponse } = usePaginatedHero(page, limit, category);
    const { data: summary } = useHeroSummary();

    console.log({ heroesResponse })


    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Superhero Universe"
                    description="Discover, explore, and manage your favorite superheroes and villains"
                />

                {/* Bread Crumbs */}
                <CustomBreadcrumbs currentPage="Heroes" />

                {/* Stats Dashboard */}

                <HeroStats />


                {/* Controls */}
                <SearchControls />



                {/* Tabs */}
                <Tabs value={tabActive} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            onClick={() => setSearchParams((prev) => {
                                prev.set('active-tab', 'all');
                                prev.set('category', 'all');
                                prev.set('page', '1');
                                return prev
                            })}
                            value="all">{`All Characters (${summary?.totalHeroes})`}</TabsTrigger>
                        <TabsTrigger
                            onClick={() => setSearchParams((prev) => {
                                prev.set('active-tab', 'favorites')
                                prev.set('page', '1');
                                return prev
                            })}
                            value="favorites" className="flex items-center gap-2">
                            <Heart className="h-4 w-4" />
                            {`Favorites (${favoriteCount})`}
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => setSearchParams((prev) => {
                                prev.set('active-tab', 'heroes')
                                prev.set('category', 'hero');
                                prev.set('page', '1');
                                return prev
                            })}
                            value="heroes">
                            {`Heroes (${summary?.heroCount})`}
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => setSearchParams((prev) => {
                                prev.set('active-tab', 'villains')
                                prev.set('category', 'villain');
                                prev.set('page', '1');
                                return prev
                            })}
                            value="villains">
                            {`Villains (${summary?.villainCount})`}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value={"all"}>
                        <h1>All Characters</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value={"favorites"}>
                        <h1>Favorites</h1>
                        <HeroGrid heroes={heroesFavorites ?? []} />
                    </TabsContent>
                    <TabsContent value={"heroes"}>
                        <h1>Heroes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value={"villains"}>
                        <h1>Villains</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                </Tabs>


                {/* Results info */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <p className="text-gray-600">Showing 6 of 16 characters</p>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Filter className="h-3 w-3" />
                            Filtered
                        </Badge>
                    </div>
                </div>



                {/* Pagination */}
                <CustomPagination
                    totalPages={heroesResponse?.pages ?? 1}
                />
            </>
        </>
    )
}

export default HomePage;