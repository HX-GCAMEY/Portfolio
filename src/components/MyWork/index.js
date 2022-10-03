import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetter from '../AnimatedLetters';
import { Loader } from 'react-loaders';
import pokemonpi from '../../assets/videos/pokemon-pi.mp4';
import flymate from '../../assets/videos/FlyMate.mp4';

const MyWork = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  let [toggleSizeA, setToggleSizeA] = useState(true);
  let [toggleSizeB, setToggleSizeB] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const goToPage = () => {
    window.open('https://pipoke.vercel.app/');
  };

  const closeButton = () => {
    setToggleSizeA(true);
    setToggleSizeB(true);
  };

  const resizeVideoA = () => {
    setToggleSizeA(false);
  };

  const resizeVideoB = () => {
    setToggleSizeB(false);
  };

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'w', 'o', 'r', 'k']}
              idx={15}
            />
          </h1>
          <p>
            Here you can see some of the projects I've worked in by myself or as
            a part of a team, this projects where made during my learning path
            at Henry! If you are on a mobile device try looking at the links
            below to visit my deploys, else if you are on a desktop check out
            the link beside the video player!
          </p>

          <p className="movile-link" onClick={goToPage}>
            Check out my Pokemon website! 😼
          </p>
        </div>
        <div className="video-container">
          <div className={toggleSizeA ? 'video-zone' : 'video-zone-active'}>
            <div
              className={
                (toggleSizeB, toggleSizeA) ? 'info-video' : 'info-hidden'
              }
            >
              <span>Pokemon PI</span>
              <br />
              A fun pokemon website that
              <br />
              was a part of a proyect on Henry
              <br />
              bootcamp
              <br />
              <p onClick={goToPage}>
                Go to the page
                <br /> or click the video to enlarge 😼
              </p>
            </div>
            <video
              className={toggleSizeA ? 'pokemon-inactive' : 'pokemon-active'}
              src={pokemonpi}
              autoPlay={true}
              muted={toggleSizeA ? true : false}
              onClick={resizeVideoA}
            />
            <button
              className={toggleSizeA ? 'button-inactive' : 'button-active'}
              onClick={closeButton}
            >
              X
            </button>
          </div>
          <div className={toggleSizeB ? 'video-zone2' : 'video-zone-active'}>
            <div
              className={
                (toggleSizeB, toggleSizeA) ? 'info-video' : 'info-hidden'
              }
            >
              <span>FlyMate App</span>
              <br />
              An app to search and purchase flight tickets
              <br />
              was a part of a proyect on Henrybootcamp
              <br />
              made with React Native
              <br />
              <p onClick={goToPage}>Click the video to enlarge 😼</p>
            </div>
            <video
              className={toggleSizeB ? 'flymate-inactive' : 'flymate-active'}
              src={flymate}
              autoPlay={true}
              muted={toggleSizeB ? true : false}
              onClick={resizeVideoB}
            />
            <button
              className={toggleSizeB ? 'button-inactive' : 'button-active'}
              onClick={closeButton}
            >
              X
            </button>
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default MyWork;
