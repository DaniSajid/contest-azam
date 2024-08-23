import ItemsComp from "./ItemsComp";
import {  IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BtnComp from "../reusable/BtnComp";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const HeaderComp = () => {
  return (
    <header className="p-3  border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            Navbar
          </a>

          <ul className="nav col-12 col-lg-auto mx-lg-auto mb-2 justify-content-center mb-md-0">
            <ItemsComp path={"/"} name={"Home"} />
            <ItemsComp path={"/"} name={"Category"} />
            <ItemsComp path={"/"} name={"Shop"} />
            <ItemsComp path={"/about"} name={"About"} />
            <ItemsComp path={"/contact"} name={"Contact"} />
            <ItemsComp path={"/contact"} name={"Feedback"} />
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <Link to={"/account"}>
          <BtnComp variant={"contained"} className={"mx-2"} name={"Login"}/>
          </Link>  
          {/* <div className="dropdown text-end mx-2">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;
