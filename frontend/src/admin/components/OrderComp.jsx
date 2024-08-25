
const OrderComp = () => {
  return (
    <div className="table-data order">
      <div className="head">
        <h3>Orders</h3>
        <i className='bx bx-search'></i>
        <i className='bx bx-filter'></i>
      </div>
      <table >
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* Example rows */}
          <tr>
            <td>
             
              <p>John Doe</p>
            </td>
            <td>01-08-2024</td>
            <td><span className="status completed">Completed</span></td>
            <td>$100</td>
            <td>jhon@gmail.com</td>
          </tr>
          <tr>
            <td>
              <p>Jane Smith</p>
            </td>
            <td>01-08-2024</td>
            <td><span className="status pending">Pending</span></td>
            <td>$250</td>
            <td>jane@gmail.com</td>
          </tr>
          <tr>
            <td>
              <p>Jane Smith</p>
            </td>
            <td>01-08-2024</td>
            <td><span className="status pending">Pending</span></td>
            <td>$250</td>
            <td>jane@gmail.com</td>
          </tr>
          <tr>
            <td>
              <p>Jane Smith</p>
            </td>
            <td>01-08-2024</td>
            <td><span className="status pending">Pending</span></td>
            <td>$250</td>
            <td>jane@gmail.com</td>
          </tr>
          <tr>
            <td>
              <p>Jane Smith</p>
            </td>
            <td>01-08-2024</td>
            <td><span className="status pending">Pending</span></td>
            <td>$250</td>
            <td>jane@gmail.com</td>
          </tr>
          <tr>
            <td>
              <p>Jane Smith</p>
            </td>
            <td>01-08-2024</td>
            <td><span className="status pending">Pending</span></td>
            <td>$250</td>
            <td>jane@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderComp;
