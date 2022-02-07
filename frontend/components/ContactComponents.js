import React, { useState } from "react";
import emailjs from '@emailjs/browser';

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
            <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Recipient's Name</span>
                <br />
                <input className="input100" type="text" name="recipientName" required />
                <br />
                <span>Recipient's Email</span>
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
export default ContactComponent;