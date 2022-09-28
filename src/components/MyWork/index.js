import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetter from '../AnimatedLetters';
import { Loader } from 'react-loaders';
import pokemonpi from '../../assets/videos/pokemon-pi.mp4';

const MyWork = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  let [toggleSize, setToggleSize] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const goToPage = () => {
    window.open('https://pipoke.vercel.app/');
  };

  const resizeVideo = () => {
    if (toggleSize) {
      setToggleSize(false);
    } else {
      setToggleSize(true);
    }
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
            at Henry!
          </p>
        </div>
        <div className="video-zone">
          <div className={toggleSize ? 'info-video' : 'info-hidden'}>
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
            src={pokemonpi}
            autoPlay={true}
            muted={true}
            width={toggleSize ? '70%' : '180%'}
            onClick={resizeVideo}
          />
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default MyWork;
