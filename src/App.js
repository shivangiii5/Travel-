import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/SignUp' element={<SignUp />} /> {/* Sign Up route */}
        <Route path='/about' element={<Home />} /> {/* Default route */}
        <Route path='/' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
