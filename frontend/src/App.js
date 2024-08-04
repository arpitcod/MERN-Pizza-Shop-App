
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import CartPage from './components/CartPage';

function App() {
  return (
   <>
   <Header/>
      {/* <HomePage/> */}

      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/cart' element={<CartPage />}/>
      </Routes>
   </>
  );
}

export default App;
