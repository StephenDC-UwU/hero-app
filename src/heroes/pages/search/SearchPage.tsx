import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"

const SearchPage = () => {
    return (
        <div>
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
            <h1>SearchPage</h1>
        </div>
    )
}

export default SearchPage
