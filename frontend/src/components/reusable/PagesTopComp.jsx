import { Link } from "react-router-dom"


const PagesTopComp = ({name,pageName,pagePath}) => {
  return (
    <div className="pages-top">
        <h1 className="">{name}</h1>
        <div className="des text-center"><Link className="text-decoration-none text-white" to={"/"} >Home</Link><Link className="text-decoration-none text-white" to={pagePath}>/ {pageName}</Link></div>
    </div>
  )
}

export default PagesTopComp
