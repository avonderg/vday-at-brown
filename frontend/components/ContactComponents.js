import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Emoji from "./emojis";

const Result=() =>{
    return(
        <p>
            Your message has been successfully submitted.
        </p>
    )
}

function ContactComponent(props) {
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_srphayg", "template_apqk8bu", e.target, "user_sdRoDwdfjjyft5Fy3a0IH")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

    setTimeout( () =>{
        showResult(false)
    }, 5000)

    return (
        <form action = "" onSubmit={sendEmail}>
            <link rel="stylesheet" type="text/css"   href="/css/style.css"></link>
            <div className="formWord">
                <h2>Spread the Love <Emoji symbol="💘" label="heart-arrow"/></h2>
                <span>Recipient's Name</span>
                <br />
                <input className="input100" type="text" name="recipientName" required />
                <br />
                <span>Recipient's Brown Email</span>
                <br />
                <input className="input100" type="text" name="recipientEmail" required />
                <br />
            </div>
            <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div class="row">{result ? <Result/> : null} </div>
            </div>
        </form>
    );
}

// /* fit the window size to match the content wrapper */
// function fitWindow2Content( contentWrapper ) {
  
// 	// calculate necessary change in window's width
// 	var width = window.innerWidth - contentWrapper.clientWidth;

// 	// calculate necessary change in window's height
// 	var height = window.innerHeight- contentWrapper.clientHeight;
  
//   	// resize window to fit content
// 	window.resizeBy( -width , -height );
// }

export default ContactComponent;