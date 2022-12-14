import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import '../scss/featured.scss';
import { Title } from "./Title";


export function FeaturedProjects({ favorites, technologies }) {
    return (
        <Container fluid>
            <Row>
                <Title text='Featured Projects'></Title>
            </Row>
            <Row className="d-flex flex-column align-items-start featured">
                {favorites.map((favorite, index) => {
                    return <ProjectCard key={index} project={favorite} technologies={technologies}></ProjectCard>
                })}

            </Row>
        </Container>
    )
}