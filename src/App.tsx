import './App.css';
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/home/" element={<Home />}></Route>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
