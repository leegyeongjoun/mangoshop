import './App.css';
import React from 'react';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import UploadPage from './components/UploadPage';
import {Route, Routes} from 'react-router-dom';
function App() {
  // https://dfff3b06-6386-4201-9dc1-adb439542016.mock.pstmn.io
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path="/ProductPage/:id" element={<ProductPage/>}></Route>
            <Route path="/UploadPage" element={<UploadPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
