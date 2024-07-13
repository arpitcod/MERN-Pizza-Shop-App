import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
// import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
const ContactUs = () => {
  return (
    <>
      <div className="container card mb-3 mt-5" style={{ width: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/17543144/pexels-photo-17543144/free-photo-of-pizza-on-boxes.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Contact Us</h2>
              <p className="card-text">
                At Pizza Delight, we value our customers and are always here to
                help! Whether you have a qu estion, feedback, or need assistance
                with your order, please don't hesitate to get in touch with us.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>

              <table className="table">
                {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <FaPhoneAlt />
                    </td>
                    <td>01234567890</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <MdOutlineEmail />
                    </td>
                    <td>info@pizzadelight.com</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                    <Ri24HoursLine />
                    </td>
                    <td> Monday to Friday: 10:00 AM - 10:00 PM</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    {/* <td colSpan={2}><FaAddressBook /></td> */}
                    <td>
                      <FaAddressBook />
                    </td>
                    <td>
                      Pizza Delight Headquarters 123 Pizza Lane Flavor Town, USA
                      12345
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
