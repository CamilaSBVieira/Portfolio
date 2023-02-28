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
                            <Col xs='3' className="p-0 my-2 d-flex align-items-center justify-content-center">
                                {t.icon &&
                                    <FontAwesomeIcon icon={t.icon} style={{ height: 30 }} className='d-block mx-auto' title={t.name} />
                                    ||
                                    <p key={index} style={{ wordBreak: 'break-all'}} className="mb-0">{t.name}</p>
                                }

                            </Col>
                            <Col xs='9' className="p-0 my-2">
                                <ProgressBar animated now={t.level} role="progressbar" variant='success' style={{ height: 30 }} />
                            </Col>
                        </Row>
                    )
                })}
            </Row>
        </Container>
    )
}