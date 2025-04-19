import React from 'react';

function ContactMe({areacode, first3, last4, email, address}) {
    return (
        <div id="contact">
            <div id="contactText">
            <h2>Let's Get In Touch</h2>
                <h3>Phone</h3>
                <a href="tel:{areacode}{first3}{last4}">({areacode})-{first3}-{last4}</a>
                <h3>Email</h3>
                <a href="mailto:{email}">{email}</a>
                <h3>Mail</h3>
                <p>{address}</p>
                
            </div>
            <div id="ContactForm">
                <form action="submit_form.php" method="post">
                 <label for="name">Name:</label><br />
                 <input type="text" id="name" name="name" required /><br /><br />

                 <label for="phone">Phone Number:</label><br />
                 <input type="tel" id="phone" name="phone" required /><br /><br />

                 <label for="email">Email:</label><br />
                 <input type="email" id="email" name="email" required /><br /><br />

                 <label for="message">Message:</label><br />
                 <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />

                 <input type="submit" value="Submit" />
                </form>
            </div>
      </div>
    );
  }

export default ContactMe;