import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MyWork from './components/MyWork';
import Background from './components/Particles';

function App() {
  return (
    <div>
      <Background className="back" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<MyWork />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
