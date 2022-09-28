import './index.scss';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import me from '../../assets/images/me.jpg';
import { Link } from 'react-router-dom';
import AnimatedLetter from '../AnimatedLetters';
import LogoBig from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const fullArray = [
    'F',
    'u',
    'l',
    'l',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '!',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _13`}> I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img className="imagen" src={Logo} alt="developer" />
            <br />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={fullArray}
              idx={15}
            />
          </h1>

          <h2>
            Javascript | React JS | React Native | Mongo DB | PostgreSQL
            <br />
            Express | Git | Node JS | HTML | CSS | Sequelize
          </h2>
          <Link className="flat-button" to="/contact">
            CONTACT ME!
          </Link>
          <div className="profile-pic">
            <img src={me} alt="profile-pic" className="pic" />
          </div>
        </div>
        <LogoBig />
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Home;
