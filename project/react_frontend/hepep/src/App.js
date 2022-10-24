import { BrowserRouter, Routes, Route, path } from 'react-router-dom';
import './App.css';
import { Head } from './components/header/Head';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about/' element={<About/>}/>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
