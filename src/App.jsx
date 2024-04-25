
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route } from 'react-router-dom';
import PropertyDetails from './pages/PropertyDetails';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {


  return (
    <div className=' bg-white mx-auto'>
      <Header />
        <section className='mt-[5rem] '>
        <ScrollToTop />
      <Routes  >
        <Route  path='/' element={<Home />} />
        <Route path='/property/:id' element=
          {<PropertyDetails />} />
      </Routes>
        </section>
      <Footer />
    </div>
  );
}

export default App;
