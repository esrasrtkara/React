
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Homepage from './pages/Homepage/Homepage';
import Products from './pages/Products/Products';




// JSX => HTML + JS
// HTML'de keywordün ismini değiştirmek
// class => className
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='*' element={<div>Not Found</div>}></Route>
    </Routes>
    </BrowserRouter>
  );
}