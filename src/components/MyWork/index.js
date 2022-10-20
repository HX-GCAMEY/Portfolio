import Cards from './Cards';
import pokemonPi from '../../assets/videos/pokemon-pi.mp4';
import flymate from '../../assets/videos/FlyMate.mp4';
import modelo from '../../assets/videos/modelo.mp4';

const MyWork = () => {
  const gallery = [
    {
      video: flymate,
      text: 'App created with React Native and Mongo DB to search and purchase flight tickets with google login interface and regularloggin authenticated with JWT  and a backend REST API created with NODE and EXPRESS ',
      title: 'Flymate App',
      site: 'https://github.com/GamalielCamey/PF-',
    },
    {
      video: pokemonPi,
      text: 'SPA created with React JS and PostgreSQL to search and filter characters from the series with a backend created with NODE and EXPRESS. https://github.com/GamalielCamey/PI',
      title: 'Pokemon Fanpage',
      site: 'https://github.com/GamalielCamey/PI',
    },
    {
      video: modelo,
      text: 'Contact SPA created with React JS for a small locall business with an Email JS library connection with a fully responsive image gallery',
      title: 'Imprenta Modelo',
      site: 'http://imprentamodelo.com/',
    },
  ];
  return (
    <div className="work">
      <Cards gallery={gallery} />
    </div>
  );
};

export default MyWork;
