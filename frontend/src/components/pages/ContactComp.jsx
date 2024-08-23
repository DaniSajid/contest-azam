 
// import { useState } from 'react';  
import "../css/contact.css";
import BtnComp from "../reusable/BtnComp";
import PagesTopComp from "../reusable/PagesTopComp";

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
    <>
    <PagesTopComp name={"Contact Us"} pageName={"Contact Us"} pagePath={"/contact"} />
    <div className="px-4  my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Contact Us</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        </div>
    </div>
    {/* map  */}
<div className="map">
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14477.256537922056!2d67.1518249!3d24.8872643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1691647397756!5m2!1sen!2s" 
  width="600" 
  height="450" 
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
</div>
    
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
  </>
  );
};

export default ContactComp;