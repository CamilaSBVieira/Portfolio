import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AluraGeek from '../assets/images/AluraGeek.jpg';
import AluraGeekMobile from '../assets/images/AluraGeekMobile.jpg';

export function ProjectCard({ project, technologies }) {

    return (
        <Col className={`px-5 py-3 d-flex flex-wrap align-items-center`} xs='12' lg='9'>
            <Col xs='12' md='6'>
                <img src={AluraGeek} title="project" style={{ width: 400, height: 200 }} className='d-lg-block d-none mx-auto img-fluid' />
                <img src={AluraGeekMobile} title="project" style={{ width: 250, height: 400 }} className='d-block d-lg-none mx-auto img-fluid' />
            </Col>
            <Col xs='12' md='6'>
                <Card className='border-0 mx-0 px-4 py-3'>
                    <Card.Body className="px-0 mx-0 ">
                        <Card.Title className="fs-3 pb-1">
                            {project.formatedName}
                        </Card.Title>
                        <Card.Text className='fs-5'>
                            {project.description}
                            <ListGroup horizontal className="fs-5">
                                {project.topics.map((topic, index) => {
                                    return technologies.map(t => {
                                        if (t.name === topic) {
                                            return (<ListGroupItem key={index} className='border-0'>
                                                <FontAwesomeIcon icon={t.icon} />
                                            </ListGroupItem>)
                                        }
                                    })
                                })}
                            </ListGroup>
                        </Card.Text>
                        <br></br>
                        <Link to={`/projects/${project.name}`} state={{ project: project, technologies: technologies }} className='btn btn-success btn-lg fw-semibold'>Details</Link>
                    </Card.Body>
                </Card>
            </Col>
        </Col>
    )
}