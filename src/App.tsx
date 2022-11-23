import './App.css';
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import Home from './pages/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/home/" element={<Home />}></Route>
            <Route path="/" element={<Navigate replace to="/home" />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
