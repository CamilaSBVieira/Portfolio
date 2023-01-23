import { Container } from "react-bootstrap";
import { AboutMe } from "./AboutMe";
import { Experience } from "./Experience";
import { FeaturedProjects } from "./FeaturedProjects";

export function Home({ favorites, technologies, projectsImages }) {
    return (
        <Container fluid className='pb-5 mb-3'>
            <AboutMe technologies={technologies}/>
            <FeaturedProjects favorites={favorites} technologies={technologies} projectsImages={projectsImages}/>
            <Experience technologies={technologies}/>
        </Container>
    )
}