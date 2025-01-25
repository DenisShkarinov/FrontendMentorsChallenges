import {createUseStyles} from "react-jss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faPinterest} from "@fortawesome/free-brands-svg-icons";

import Link from "./Link";
const listClasses = createUseStyles({
    'ul': {
        height: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        '& li': {
            marginRight: '2.5rem',
            ':last-child': {
                marginRight: 0
            }
        },
    },
})
function List () {
    const classes = listClasses()

    return (
        <ul className={classes.ul}>
            <li><Link url="https://facebook.com/"><FontAwesomeIcon icon={faFacebook}/> </Link></li>
            <li><Link url="https://pinterest.com/" ><FontAwesomeIcon icon={faPinterest}/></Link></li>
            <li><Link url="https://instagram.com/" ><FontAwesomeIcon icon={faInstagram} /></Link></li>
        </ul>
    )
}

export default List