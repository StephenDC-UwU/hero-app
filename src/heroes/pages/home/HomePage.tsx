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
import { getHeroesByPage } from "@/heroes/actions/getHeroesByPage"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"


const HomePage = () => {

    const validTabs = ['all', 'favorites', 'heroes', 'villains']
    const [searchParams, setSearchParams] = useSearchParams();

    const getTabActive = searchParams.get('tab-active') ?? 'all';

    const tabActive = validTabs.find((tab) => tab === getTabActive ? tab : 'all')




    // const [tabActive, settabActive] = useState<
    //     'all' |
    //     'favorites' |
    //     'heroes' |
    //     'villains'
    // >('all');

    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPage(),
        staleTime: 1000 * 60 * 5
    })

    // useEffect(() => {
    //     getHeroesByPage().then();
    // }, []);

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
                                prev.set('active-tab', 'all')
                                return prev
                            })}
                            value="all">All Characters (16)</TabsTrigger>
                        <TabsTrigger
                            onClick={() => setSearchParams((prev) => {
                                prev.set('active-tab', 'favorites')
                                return prev
                            })}
                            value="favorites" className="flex items-center gap-2">
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={() => setSearchParams((prev) => {
                                prev.set('active-tab', 'heroes')
                                return prev
                            })}
                            value="heroes">Heroes (12)</TabsTrigger>
                        <TabsTrigger
                            onClick={() => setSearchParams((prev) => {
                                prev.set('active-tab', 'villains')
                                return prev
                            })}
                            value="villains">Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value={"all"}>
                        <h1>All Characters</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value={"favorites"}>
                        <h1>Favorites</h1>
                        <HeroGrid heroes={[]} />
                    </TabsContent>
                    <TabsContent value={"heroes"}>
                        <h1>Heroes</h1>
                        <HeroGrid heroes={[]} />
                    </TabsContent>
                    <TabsContent value={"villains"}>
                        <h1>Villains</h1>
                        <HeroGrid heroes={[]} />
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

                {/* Character Grid */}

                {/* <HeroGrid /> */}


                {/* Pagination */}
                <CustomPagination
                    totalPages={3}
                />
            </>
        </>
    )
}

export default HomePage;