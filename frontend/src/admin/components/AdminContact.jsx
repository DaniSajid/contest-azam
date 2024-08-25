

const AdminContact = () => {
  return (
    <main>
    <div className="table-data">
    <div className="table-data order">
    <div className="head">
      <h3>User Contact </h3>
      <i className='bx bx-search'></i>
      <i className='bx bx-filter'></i>
    </div>
    <table>
      <thead>
        <tr>
          <th>User Name</th>
          <th>User Email</th>
          <th>User Phone</th>
          <th>User Subject</th>
          <th>User Messsage</th>
        </tr>
      </thead>
      <tbody>
        {/* Example rows */}
        <tr>
          <td>
           
            <p>Daniyal</p>
          </td>
          <td>dani@gmail.com</td>
          <td>3209238923</td>
          <td><b>Product Issue</b></td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum exercitationem velit maiores nulla. Ipsam.</td>
        </tr>
        <tr>
          <td>
           
            <p>Daniyal</p>
          </td>
          <td>dani@gmail.com</td>
          <td>3209238923</td>
          <td>Product Issue</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum exercitationem velit maiores nulla. Ipsam.</td>
        </tr>
        <tr>
          <td>
           
            <p>Daniyal</p>
          </td>
          <td>dani@gmail.com</td>
          <td>3209238923</td>
          <td><b>Product Issue</b></td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum exercitationem velit maiores nulla. Ipsam.</td>
        </tr>
     
      </tbody>
    </table>
  </div>
  </div>
  </main>
  )
}

export default AdminContact
