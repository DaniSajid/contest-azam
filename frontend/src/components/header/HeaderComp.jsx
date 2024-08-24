import ItemsComp from "./ItemsComp";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BtnComp from "../reusable/BtnComp";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const HeaderComp = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const handleSignOut = () => {
    Cookies.remove("token");
    navigate("/account"); 
  };
  return (
    <header className="p-3  border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            Navbar
          </a>

          <ul className="nav col-12 col-lg-auto mx-lg-auto mb-2 justify-content-center mb-md-0">
            <ItemsComp path={"/"} name={"Home"} />
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </Link>
              <ul className="dropdown-menu">
                <ItemsComp path={"/indoor"}  name={"Indoor"} />
                <ItemsComp path={"/outdoor"}  name={"Outdoor"} />
                <ItemsComp path={"/succulent"}  name={"Succulent"} />
                <ItemsComp path={"/floweringshrubs"}  name={"Flowering Shrubs"} />
              </ul>
            </li>
            <ItemsComp path={"/about"} name={"About"} />
            <ItemsComp path={"/contact"} name={"Contact"} />
            <ItemsComp path={"/feedback"} name={"Feedback"} />
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          {token ?    <div className="dropdown text-end mx-2">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" onClick={handleSignOut}>Sign out</Link></li>
            </ul>
          </div>
          :
          <Link to={"/account"}>
            <BtnComp variant={"contained"} className={"mx-2"} name={"Login"} />
          </Link>}
        
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;
