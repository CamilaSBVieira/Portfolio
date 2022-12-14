import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Title } from "./Title";


export function Projects({ projects, technologies }) {
    return (
        <Container fluid className="pb-5 mb-3">
            <Row>
                <Title text={'Projects'}></Title>
            </Row>
            {projects.map(p => {
                return <ProjectCard project={p} technologies={technologies} />
            })}
        </Container>
    )
}