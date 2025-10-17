import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Career from './Pages/Career/Career';
import JobHire from './Pages/JobHire/JobHire';
import Executive from './Pages/Executive/Executive';
import Permanent from './Pages/Permanent/Permanent';
import Contingent from './Pages/Contingent/Contingent';
import Contract from './Pages/Contract/Contract';
import Payroll from './Pages/Payroll/Payroll';
import RPO from './Pages/RPO/RPO';
import Manufacturing from './Pages/Manufacturing/Manufacturing';
import LightIndustrial from './Pages/LightIndustrial/LightIndustrial';
import Technology from './Pages/Technology/Technology';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Aerospace from './Pages/Aerospace/Aerospace';
import Retail from './Pages/Retail/Retail';
import Telecommunication from './Pages/Telecommunication/Telecommunication';
import Hospitality from './Pages/Hospitality/Hospitality';
import Pharmaceutical from './Pages/Pharmaceutical/Pharmaceutical';
import PublicSector from './Pages/PublicSector/PublicSector';
import FinanceService from './Pages/FinanceService/FinanceService';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/career' element={<Career />} />
        <Route path='/jobhire' element={<JobHire />} />
        <Route path='/executive' element={<Executive />} />
        <Route path='/permanent' element={<Permanent />} />
        <Route path='/contingent' element={<Contingent />} />
        <Route path='/contract' element={<Contract />} />
        <Route path='/payroll' element={<Payroll />} />
        <Route path='/rpo' element={<RPO />} />
        <Route path='/manufacturing' element={<Manufacturing />} />
        <Route path='/lightindustrial' element={<LightIndustrial />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/aerospace' element={<Aerospace />} />
        <Route path='/retail' element={<Retail />} />
        <Route path='/telecommunication' element={<Telecommunication />} />
        <Route path='/hospitality' element={<Hospitality />} />
        <Route path='/pharmaceutical' element={<Pharmaceutical />} />
        <Route path='/publicsector' element={<PublicSector />} />
        <Route path='/financeservice' element={<FinanceService />} />
        {/* ...add other routes as needed... */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
