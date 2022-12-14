import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"

export function Social({ styling, socialMedias }) {
    return (
        <ListGroup horizontal className={styling}>
            {socialMedias.map((s, index) => {
                if (s.name === 'email') {
                    return (
                        <ListGroupItem key={index} className='border-0 p-1 px-md-4'>
                            <Link to={s.link} className='link-dark'><FontAwesomeIcon icon={s.icon} /></Link>
                        </ListGroupItem>
                    )
                } else {
                    return (
                        <ListGroupItem key={index} className='border-0 p-1 px-md-4'>
                            <a href={s.link} target="blank" className='link-dark'><FontAwesomeIcon icon={s.icon} /></a>
                        </ListGroupItem>
                    )
                }
            })}
        </ListGroup>
    )
}