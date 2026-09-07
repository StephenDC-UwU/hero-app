import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "./ui/SearchControls"
import HeroGrid from "@/heroes/components/HeroGrid"
import { useSearchParams } from "react-router"
import useHeroSearchByOptions from "@/heroes/hooks/useHeroSearchByOptions"


const SearchPage = () => {

    const [searchParams] = useSearchParams();



    const name = searchParams.get('name') ?? '';
    const strength = searchParams.get('strength') ?? '';


    // const { search } = useParams();


    const { data: heroesSearched } = useHeroSearchByOptions({ name: name, strength: strength });



    return (
        <div>
            <h1>SearchPage</h1>
            <CustomJumbotron
                title="Superhero Universe"
                description="Discover, explore, and manage your favorite superheroes and villains"
            />
            <CustomBreadcrumbs
                currentPage="Search Heros"
            // breadcrumbs={
            //     [{ label: "Hero", to: "/" }]
            // }
            >

            </CustomBreadcrumbs>

            {/* Stats Dashboard */}
            <HeroStats />

            {/* Controls */}
            <SearchControls />

            {
                heroesSearched?.length === 0 ? (
                    <>
                        <p>
                            Not found any heroes with {name}
                        </p>
                    </>

                ) : (
                    <HeroGrid heroes={heroesSearched ?? []} />
                )
            }
        </div>
    )
}

export default SearchPage
