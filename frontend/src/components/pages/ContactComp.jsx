 
// import { useState } from 'react';  
import "../css/contact.css";
import BtnComp from "../reusable/BtnComp";

const ContactComp = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here (e.g., send data to a server)
  //   console.log('Form submitted:', { name, email, phone, subject, message });
  //};

  return (
    <div className="container container-contact">
    <div className="row">
      <div className="col-md-6">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
          <div className="office">
            <h3>Head Office</h3>
            <p>730 Glenstone Ave 65802, Springfield, US</p>
            <p>+123 987 321, +123 123 654</p>
            <p>Roofers@templatesjungle.com</p>
          </div>
          <div className="office">
            <h3>Branch Office</h3>
            <p>730 Glenstone Ave 65802, Springfield, US</p>
            <p>+123 987 321, +123 123 654</p>
            <p>contact@yourcompany.com</p>
          </div>
          <div className="social-info">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="contact-form">
          <h2>Got Any Questions?</h2>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name*" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your E-mail*" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="5" placeholder="Your Message*"></textarea>
            </div>
            <BtnComp variant={"contained"} name={"Send Message"} />
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactComp;