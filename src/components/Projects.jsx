import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Title } from "./Title";


export function Projects({ projects, technologies, projectsImages }) {
    return (
        <Container fluid className="pb-5 mb-3">
            <Row>
                <Title text={'Projects'}></Title>
            </Row>
            {projects.map(p => {
                return projectsImages.map(pi => {
                    if(pi.name === p.name) {
                        return <ProjectCard project={p} technologies={technologies} projectImages={{desktop: pi.link, mobile: pi.mobileLink}}/>
                    }
                })
            })}
        </Container>
    )
}