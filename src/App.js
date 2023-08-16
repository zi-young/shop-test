import './App.scss';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom"
import Interior from "./pages/Interior.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Sale from "./pages/Sale";
import OfflineStore from "./pages/OfflineStore.jsx";
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
        <Route path="/sale" element={<Sale />}/>
        <Route path="/OfflineStore" element={<OfflineStore />}/>
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// https://4ad88ba8-1261-4c6f-b0c3-c6a35416cecd.mock.pstmn.io