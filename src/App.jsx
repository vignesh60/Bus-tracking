import { useState } from "react";
import Avatar from "./components/images/member-2.png";

function App() {
  const [number, setNumber] = useState(9345414258);

  const [formData, setFormData] = useState({
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendWhatsapp = () => {
    const encodedMessage = encodeURIComponent(formData.message);
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (isMobileDevice) {
      const url = `whatsapp://send?phone=${number}&text=${encodedMessage}`;
      window.open(url);
    } else {
      const url =
        `https://api.whatsapp.com/send?phone=${number}&text=Vicky :  ` +
        `%0a%0a${encodedMessage}`;
      window.open(url, "_blank").focus();
    }
  };

  return (
    <div className="main">
      <h2>SEND MESSAGE TO THE DRIVER</h2>
      <div className="notification-container">
        <section>
          <img src={Avatar} alt="" className="profile" />
          <form action="">
            <label htmlfor="driverName">Driver Name:</label>
            <input
              type="text"
              id="driverName"
              name="driverName"
              value="John Doe"
              disabled
            />

            <label htmlfor="driverEmail">Driver Email:</label>
            <input
              type="email"
              id="driverEmail"
              name="driverEmail"
              value="johndoe@example.com"
              disabled
            />

            <label htmlfor="driverMobile">Driver Mobile:</label>
            <input
              type="tel"
              id="driverMobile"
              name="driverMobile"
              value={number}
              disabled
            />

            <label htmlfor="busNumber">Bus Number:</label>
            <input
              type="text"
              id="busNumber"
              name="busNumber"
              value="BUS123"
              disabled
            />
          </form>
        </section>
        <section>
          <form className="message-form">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="send the message to the vehicle owner"
            />
            <button type="button" onClick={sendWhatsapp}>
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
