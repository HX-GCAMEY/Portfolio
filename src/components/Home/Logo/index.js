import './index.scss';
import LogoG from '../../../assets/images/the-code.jpg';
import gsap from 'gsap-trial';
import { useEffect, useRef } from 'react';

const LogoBig = () => {
  const logoAnimation = useRef();

  useEffect(() => {
    gsap.fromTo(
      logoAnimation.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        ref={logoAnimation}
        src={LogoG}
        alt="big-logo"
      />
    </div>
  );
};

export default LogoBig;
