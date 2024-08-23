import { NavLink } from "react-router-dom"

const ItemsComp = ({name, path}) => {
  return (
    <li><NavLink to={path} className="nav-link isActive px-2 link-body-emphasis">{name}</NavLink></li>

  )
}

export default ItemsComp
