import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ListGroup, ListGroupItem } from "react-bootstrap"

export function Social({ styling, socialMedias }) {
    return (
        <ListGroup horizontal className={styling}>
            {socialMedias.map((s, index) => {
                
                    return (
                        <ListGroupItem key={index} className='border-0 p-1 px-md-4'>
                            <a href={s.link} target="blank" className='link-dark'><FontAwesomeIcon icon={s.icon} title={s.name} /></a>
                        </ListGroupItem>
                    )
            })}
        </ListGroup>
    )
}