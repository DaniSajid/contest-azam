import { Link } from "react-router-dom"


const FooterItem = ({name,path}) => {
  return (
    <li className="nav-item mb-2  "><Link to={path} className="nav-link p-0 text-white">{name}</Link></li>
  )
}

export default FooterItem
