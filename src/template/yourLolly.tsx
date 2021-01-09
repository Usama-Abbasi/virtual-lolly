import React from 'react'
import Header from '..//component/Header';
import Lolly from '..//component/lolly';
import { navigate, Link } from "gatsby"
export default function YourLolly({pageContext}) {
    // console.log(pageContext);
    return (
        <div className="container">
      <Header />
      <div className="lollyFormPage">
        <div>
          <Lolly
            fillLollyTop={pageContext.top}
            fillLollyMiddle={pageContext.middle}
            fillLollyBottom={pageContext.bottom}
          />
        </div>
        <div>
          <div className="YourLoollyLink">
            {" "}
            <h4>Your lolly is freezing. Share it with this link:</h4>
            <h3 className="link">{`https://usama-bootcamp-virtual-lolly.netlify.app/virtuallolly/${pageContext.lollyPath}`}</h3>
          </div>

          <div className="YourLoolly">
            <div className="resultCard">
              <strong className="reciepentName">{pageContext.recipient}</strong>
              <h4 className="message">{pageContext.message}</h4>
              <strong className="senderName">— {pageContext.sender}</strong>
            </div>
          </div>
          <p className = "desc">
            {pageContext.sender} {" "}
            made this virtual lollipop for you. You can<Link style = {{color: '#ffffff'}} to = '/createNewlolly'> make your own </Link> to send to
            a friend who deserve some sugary treat which won't rot their
            teeth...
          </p>
        </div>
      </div>
    </div>
 );
}
    
