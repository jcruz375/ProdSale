import { Route, Routes } from 'react-router-dom';
import Home from './Homepage';
import ProductsPage from './Products';


export default function RoutesComponent() {
  return (
    <Routes>
      <Route path='/' element={< Home />}></Route>
      <Route path='/products' element={< ProductsPage />}></Route>
    </Routes>
  );
};