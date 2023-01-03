import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <div>
          <h4>
            <FontAwesomeIcon icon="fas fa-map-marker-alt" /> Address
          </h4>
          <p>
            P. Sherman 42
            <br />
            Wallaby Way, Sydney
          </p>
        </div>
        <div>
          <h4>
            <FontAwesomeIcon icon="fas fa-phone-alt" /> Let&apos;s
            Talk{' '}
          </h4>
          <p>+639*********</p>
        </div>
        <div>
          <h4>
            <FontAwesomeIcon icon="fa-solid fa-envelope" /> General
            Support{' '}
          </h4>

          <p>contact@example.com</p>
        </div>
      </div>

      <div className="right">
        <h2>Contact Us</h2>
        <p>Name*</p>
        <input id="txt_name" type="text" required="required" />
        <p>Email*</p>
        <input id="txt_email" type="text" required="required" />
        <p>Phone*</p>
        <input id="txt_phone" type="text" required="required" />
        <p>Subject*</p>
        <input id="txt_subject" type="text" required="required" />
        <p>Message*</p>
        <textarea
          id="txt_message"
          rows="4"
          cols="20"
          required="required"
        />
        <input type="submit" id="btn_send" value="SEND" />
      </div>
    </div>
  );
}

export default Contact;

