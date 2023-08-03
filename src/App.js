import './App.scss';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom"
import Interior from "./pages/Interior.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Office from "./pages/Office.jsx";
import Fabric from "./pages/Fabric.jsx";
import UploadPage from './components/UploadPage';
import ProductPage from './components/ProductPage';




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/interior" element={<Interior />}/>
        <Route path="/kitchen" element={<Kitchen />}/>
        <Route path="/office" element={<Office />}/>
        <Route path="/fabric" element={<Fabric />}/>
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// https://4ad88ba8-1261-4c6f-b0c3-c6a35416cecd.mock.pstmn.io