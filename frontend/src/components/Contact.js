import React from "react";
import {NavLink} from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      autoComplete="off"
                    />
                    <label for="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      autoComplete="off"
                    />
                    <label for="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      autoComplete="off"
                    />
                    <label for="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      autoComplete="off"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-center">
              <NavLink to="/login" className="btn btn-primary">
                Send
              </NavLink>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Takli Haji, Shirur, Pune, India</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>suraj@mern.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
