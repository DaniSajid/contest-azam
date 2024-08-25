const AdminFeedback = () => {
  return (
    <main>
      <div className="table-data">
        <div className="table-data order">
          <div className="head">
            <h3>User Contact </h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows */}
              <tr>
                <td>
                  <p>Daniyal</p>
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  ipsum exercitationem velit maiores nulla. Ipsam.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AdminFeedback;
