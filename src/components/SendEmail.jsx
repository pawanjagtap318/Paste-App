import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import emailjs from 'emailjs-com';
import { useState } from "react";
import toast from "react-hot-toast";

export const SendEmail = () => {
  const allPastes = useSelector((state) => state.paste.pastes);
  const { id } = useParams();
  const paste = allPastes.filter((p) => p._id === id)[0];
  const [email, setEmail] = useState('');

  if (!paste) {
    return <div>Paste not found</div>;
  }

  const sendEmail = () => {
    emailjs.send(
      'pawanjagtap318',
      'pawanjagtap318',
      {
        title: paste.title,
        content: paste.content,
        send_to: email,
      },
      'um4WPZPrrs-cJ0Q2Q'
    )
      .then(response => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success("Email Sent Successfully!")
      })
      .catch(err => {
        console.error('Failed to send email:', err);
        toast.error("Failed to Send!")
      });
  };

  return (
    <div className="place-self-center h-screen place-content-center">
      <input 
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-96 text-xl pl-2 p-1 mr-4 mb-96"
      />
      <button className="bg-blue-400 text-xl font-semibold p-1 px-1.5 rounded-lg mb-4 hover:p-1.5 hover:px-2 hover:font-bold" onClick={sendEmail}>Send</button>
    </div>
  );
};
