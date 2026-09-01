import { useParams } from "react-router"

const HeroPage = () => {

    const { slug } = useParams();

    console.log(slug);

    return (
        <div>
            <h1>HeroPage</h1>
        </div>
    )
}

export default HeroPage
