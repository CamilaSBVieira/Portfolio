import { Col, Row } from 'react-bootstrap'
import { Social } from './Social'

export function Footer({ socialMedias }) {
    return (
        <Row className='d-flex justify-content-between align-items-center px-0 px-md-2 py-2 fs-5 fixed-bottom bg-primary'>
            <Col className='col-auto'>
                &copy; Camila Vieira
            </Col>
            <Col className='col-auto'>
                <Social styling='fs-4' socialMedias={socialMedias}/>
            </Col>
        </Row>
    )
}