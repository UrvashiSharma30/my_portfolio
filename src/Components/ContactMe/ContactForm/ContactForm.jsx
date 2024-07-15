import React from 'react';
import './ContactForm.css';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "61910396-d040-44ee-bf63-18b32990028f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent successfully!",
        icon: "success"
      }).then(() => {
        event.target.reset();
      });
    }
  };

  return (
    <div className='contact-form-container'>
      <form onSubmit={onSubmit}>
        <div className='name-container'>
          <input type='text' name='firstname' placeholder='FirstName' required />
          <input type='text' name='lastname' placeholder='LastName' />
        </div>
        <input type='text' name='email' placeholder='Email' className='email' required />
        <textarea type='text' name='message' placeholder='Message' rows={5} required />
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
