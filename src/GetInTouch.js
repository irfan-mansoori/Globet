import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';


const GetInTouch = () => {
  return (
    <section className="getInTouch py-6">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="shortTitle text-center">Contact Us</h3>
                    <h4 className="longTitle text-center">Get In Touch!</h4>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-8">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3" controlId="formBasicName">
                          <input type="text" className="form-control" placeholder="Your Name?" required/>
                        </div>                        
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3" controlId="formBasicEmail">
                          <input type="email" className="form-control" placeholder="Your Email" required/>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3" controlId="formBasicSubject">
                        <input type="text" className="form-control" placeholder="Subject:" required/>
                    </div>

                    <div className="mb-3" controlId="formBasicMessage">
                        <input type="text" className="form-control" placeholder="Message" required/>
                    </div>
                    <button className="customBtn mt-4" type="submit">
                        Send Message 
                    </button>
                  </form>
                </div>
                <div className="col-4">
                    <div className="iconBox">
                      <div className="ctaIcon">
                        <FaPhoneAlt />
                      </div>
                      <div className="iconContent">
                        <h4>Phone</h4>
                        <p>01234567890</p>
                      </div>
                    </div>
                    <div className="iconBox mt-5">
                      <div className="ctaIcon">
                        <FaEnvelope />
                      </div>
                      <div className="iconContent">
                        <h4>Email</h4>
                        <p>info@globet.com</p>
                      </div>
                    </div>
                    <div className="iconBox mt-5">
                      <div className="ctaIcon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="iconContent">
                        <h4>Address</h4>
                        <p>22 International Division Via G.B. Pirell</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch