import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Homepage';

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={Home} path="/" />
      </Routes>
    </BrowserRouter>
  );
};