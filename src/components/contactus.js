import React from 'react';
import Nav from './nav1';

const Contact = () => {
  return(
    <>
      <div className = "contactUs">
        <Nav/>
        <div className = "contactData">
          <div className = "contactInfo">
            <h2>NEW YORK</h2>
            <p>304 Park Ave South
              Penthouse North
              New York, NY 10010
            </p>
            <br/>
            <p>
              Main +1( 212) 253 8884
              <br/>
              Dvlp +1(212) 477 9382
              <br/>
              Fax +1(212) 253 8883
              <br/>
            </p>
          </div>

          <div className = "contactInfo">
            <h2>LOS ANGELES</h2>
            <p>8201 Beverly Blvd. 
              Suite 300
              Los Angeles, CA 90048
            </p>
            <br/>
            <p>
            Main +1( 310) 550 3405
            </p>
          </div>

          <div className = "contactInfo">
            <h2>LONDON</h2>
            <p>2, Arundel Street Building
                5th Floor
                180 The Strand
                London WC2R 3DA
            </p>
            <br/>
            <p>
              E-Mail London@glancemodels.com
              <br/>
              Main +44 207 665 5500
              <br/>
              Fax +44 207 665 5501
              <br/>
            </p>
          </div>
        </div>
      </div>       
    </>   
  )
}

export default Contact;