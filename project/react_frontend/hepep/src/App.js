import { BrowserRouter, Routes, Route, path } from 'react-router-dom';
import './App.css';
import { Head } from './components/header/Head';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

import Main2 from './components/main/Main2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='main2/' element={<Main2/>}/>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
