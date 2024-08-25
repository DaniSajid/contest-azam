import {
  Dashboard,
  Store,
  PieChart,
  Message,
  Group,
  Settings,
  ExitToApp,
  EmojiEmotions
} from "@mui/icons-material";

const SidebarComp = ({ activeMenuItem, onMenuItemClick }) => {
  return (
    <section id="sidebar">
      <a href="#" className="brand m-3">
        <EmojiEmotions />
        <span className="text ">Admin Pannel</span>
      </a>
      <ul className="side-menu top">
        <li className={activeMenuItem === "Dashboard" ? "active" : ""}>
          <a href="#" onClick={() => onMenuItemClick("Dashboard")}>
            <Dashboard />
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li className={activeMenuItem === "My Store" ? "active" : ""}>
          <a href="#" onClick={() => onMenuItemClick("My Store")}>
            <Store />
            <span className="text">Show Product</span>
          </a>
        </li>
        <li className={activeMenuItem === "Add Product" ? "active" : ""}>
          <a href="#" onClick={() => onMenuItemClick("Add Product")}>
            <PieChart />
            <span className="text">Add Product</span>
          </a>
        </li>
        <li className={activeMenuItem === "Message" ? "active" : ""}>
          <a href="#" onClick={() => onMenuItemClick("Message")}>
            <Message />
            <span className="text">Feedback</span>
          </a>
        </li>
        <li className={activeMenuItem === "Team" ? "active" : ""}>
          <a href="#" onClick={() => onMenuItemClick("Team")}>
            <Group />
            <span className="text">Contact</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li className={activeMenuItem === "Settings" ? "active" : ""}>
          <a href="#" onClick={() => onMenuItemClick("Settings")}>
            <Settings />
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <ExitToApp />
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SidebarComp;
