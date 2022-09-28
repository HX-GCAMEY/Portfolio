import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetter from '../AnimatedLetters';
import { Loader } from 'react-loaders';

const MyWork = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
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
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default MyWork;
