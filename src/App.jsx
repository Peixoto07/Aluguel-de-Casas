
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route } from 'react-router-dom';
import PropertyDetails from './pages/PropertyDetails';
import Home from './pages/Home';

function App() {


  return (
    <div className=' max-w-[1224px] bg-white mx-auto'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element=
          {<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
