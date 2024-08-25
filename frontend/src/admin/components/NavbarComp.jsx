import React from "react";
import { Notifications, Search } from "@mui/icons-material";

const NavbarComp = ({
  isSearchFormVisible,
  onSearchButtonClick,
  onMenuBarClick,
  onDarkModeToggle
}) => {
  return (
    <nav>
      <i className="bx bx-menu" onClick={onMenuBarClick}></i>
      <a href="#" className="nav-link">Categories</a>
      <form action="#">
        <div className={`form-input ${isSearchFormVisible ? 'show' : ''}`}>
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn" onClick={onSearchButtonClick}>
            <Search />
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden onChange={onDarkModeToggle} />
      <label htmlFor="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        <Notifications />
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src="img/people.png" alt="profile" />
      </a>
    </nav>
  );
};

export default NavbarComp;
