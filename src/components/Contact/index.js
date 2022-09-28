import Loader from 'react-loaders';
import { useEffect, useRef, useState } from 'react';
import AnimatedLetter from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const notifySuccess = () =>
    toast.success('✅ Email sent!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyFailure = () =>
    toast.failure('⚠️ Email couldnt be sent, please try again later!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q6if20r',
        'template_zrdnv1v',
        refForm.current,
        '5DvKeSTbP2y6FuQUJ'
      )
      .then(
        () => {
          notifySuccess();

          setTimeout(() => {
            window.location.reload(false);
          }, 3000);
        },
        () => {
          notifyFailure();
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I,m a fullstack developer looking for knowledge and carrer grow! but
            also can work as on freelance if needed! If you have any questions
            or request do not hesitate and send me a message I'll be pleased to
            hear from you!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              ;
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          My location,
          <br />
          Cordoba,
          <br />
          Argentina
          <br />
          <span>Whatsapp: +52 55 27292754</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-31.277462, -64.296998]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-31.277462, -64.296998]}>
              <Popup>This is my Town!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Contact;
