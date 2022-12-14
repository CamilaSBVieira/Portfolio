import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Title } from "./Title";

export function Experience({ technologies }) {
    return (
        <Container fluid>
            <Row>
                <Title text={'Experience'}></Title>
            </Row>
            <Row className="p-5">
                {technologies.map((t, index) => {
                    return (
                        <Row key={index}>
                            <Col xs='3' className="p-0 my-2">
                                <FontAwesomeIcon icon={t.icon} style={{ height: 30 }} className='d-block mx-auto'/>
                            </Col>
                            <Col xs='9' className="p-0 my-2">
                                <ProgressBar animated now={t.level} variant='success' style={{ height: 30 }} />
                            </Col>
                        </Row>
                    )
                })}
            </Row>
        </Container>
    )
}