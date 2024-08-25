import { useState, useEffect } from "react";
import DashboardComp from "./components/DashboardComp";
import NavbarComp from "./components/NavbarComp";
import SidebarComp from "./components/SidebarComp";
import AddProduct from "./components/AddProduct";
import "./admin.css";
import AdminContact from "./components/AdminContact";
import AdminFeedback from "./components/AdminFeedback";

const AdminComp = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarHidden(true);
      } else {
        setIsSidebarHidden(false);
        setIsSearchFormVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const toggleSearchForm = () => {
    setIsSearchFormVisible(!isSearchFormVisible);
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'Dashboard':
        return <DashboardComp />;
      case 'Add Product':
        return <AddProduct />;
      case 'AdminContact':
        return <AdminContact />;
      case 'Message':
        return <AdminFeedback />;
      default:
        return <DashboardComp />;
    }
  };

  return (
    <div className={`app ${isSidebarHidden ? 'sidebar-hidden' : ''}`}>
      <SidebarComp 
        activeMenuItem={activeMenuItem} 
        onMenuItemClick={handleMenuItemClick} 
      />
      <section id="content">
        <NavbarComp 
          isSearchFormVisible={isSearchFormVisible} 
          onSearchButtonClick={toggleSearchForm} 
          onMenuBarClick={toggleSidebar} 
          onDarkModeToggle={() => setIsDarkMode(!isDarkMode)} 
        />
        {renderContent()}
      </section>
    </div>
  );
};

export default AdminComp;
