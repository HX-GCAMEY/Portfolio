import { useState, useEffect, useRef } from 'react';
import AnimatedLetter from '../../AnimatedLetters';
import { Loader } from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Cards = ({ gallery }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(gallery.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === gallery.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const goToPage = (site) => {
    console.log(site);
    window.open(site);
  };

  return (
    <>
      {openModal && (
        <div className="slider">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="btnNext"
            onClick={nextSlide}
            size="2x"
          />
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
            size="2x"
          />
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
            size="2x"
          />
          <div className="fullScreenImage">
            <video
              src={gallery[slideNumber].video}
              autoPlay={true}
              muted={true}
              controls
            />
          </div>
        </div>
      )}
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
        </div>

        <div className="video-container">
          {gallery &&
            gallery.map((slide, index) => {
              return (
                <div className="single" key={index}>
                  <div
                    className="info-video"
                    onClick={() => handleOpenModal(index)}
                  >
                    <span>{slide.title}</span>
                    <p>{slide.text}</p>
                    <p onClick={() => handleOpenModal(index)}>
                      Click the video to enlarge 😼
                    </p>
                    {slide.site ? (
                      <span
                        className="site"
                        onClick={() => goToPage(slide.site)}
                      >
                        <p>Go to the page</p> {slide.site}
                      </span>
                    ) : null}
                  </div>
                  <video
                    muted={true}
                    onClick={() => handleOpenModal(index)}
                    src={slide.video}
                    autoPlay={true}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  );
};

export default Cards;
