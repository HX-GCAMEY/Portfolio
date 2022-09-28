import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faMdb,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetters';
import './index.scss';
import { Loader } from 'react-loaders';

const About = () => {
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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '!']}
              idx={15}
            />
          </h1>
          <p>
            I'm new in the IT world and have a huge ambition to grow and learn
            new technologies and improve my current skills, right now I'm
            looking for my first job and the chance to show my abilities as a
            developer and to start my way into the challenging world of the
            software development!
          </p>
          <p>
            I consider my self a hardworking person with a perpetuall need for
            improvement and learning, I enjoy working and coding along with team
            mates, but also have solid bases to learn and work on my own.
          </p>
          <p>
            I define my self as an outgoing hardworker with high regard for team
            building and pair coding!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faMdb} color="#4DB33D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default About;
