import OrderComp from './OrderComp';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const DashboardComp = () => {
  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li><i className='bx bx-chevron-right'></i></li>
            <li>
              <a className="active" href="#">Dashboard</a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <CloudDownloadIcon />
          <span className="text">Download PDF</span>
        </a>
      </div>
      <ul className="box-info">
        <li>
          <BarChartIcon />
          <span className="text">
            <h3>1,245</h3>
            <p>New Orders</p>
          </span>
        </li>
        <li>
          <PersonIcon />
          <span className="text">
            <h3>580</h3>
            <p>New Users</p>
          </span>
        </li>
        <li>
          <ShoppingBagIcon />
          <span className="text">
            <h3>$25,000</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>
      
      <div className="table-data">
        <OrderComp />
      </div>
    </main>
  );
}

export default DashboardComp;
