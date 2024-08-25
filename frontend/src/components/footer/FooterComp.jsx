import FooterItem from "./FooterItem"


const FooterComp = () => {
  return (
    <div className="bg-success">
    <div className="container ">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Pages</h5>
          <ul className="nav flex-column">
           <FooterItem name={"Home"} path={"/"} />
           <FooterItem name={"About"} path={"/about"} />
           <FooterItem name={"Contact"} path={"/contact"} />
           <FooterItem name={"Feedback"} path={"/feedback"} />
          </ul>
        </div>
  
        <div className="col-6 col-md-2 mb-3">
          <h5>Category</h5>
          <ul className="nav flex-column">
          <FooterItem name={"Indoor"} path={"/indoor"} />
           <FooterItem name={"Outdoor"} path={"/outdoor"} />
           <FooterItem name={"Succulent"} path={"/succulent"} />
           <FooterItem name={"Flowering Shrubs"} path={"/floweringshrubs"} />
          </ul>
        </div>
  
        <div className="col-6 col-md-2 mb-3">
          <h5>Account</h5>
          <ul className="nav flex-column">
          <FooterItem name={"Account"} path={"/account"} />
          </ul>
        </div>
  
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of whats new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
              <button className="btn btn-light" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
  
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="#">icon</a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#">icon</a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#">icon</a></li>
        </ul>
      </div>
    </footer>
  </div>
  </div>
  )
}

export default FooterComp
