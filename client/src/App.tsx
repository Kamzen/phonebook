
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavTabs from './components/Tabs';
import Login from './pages/Login';
import { Root } from './pages/Root';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} replace={true} />} />
        <Route path='/login' element={<Root><Login /></Root>} />
        <Route path='/contacts' element={<NavTabs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
