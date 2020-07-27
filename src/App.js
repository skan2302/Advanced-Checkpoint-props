import React from 'react';
import './App.css';
import ProductTable from './Components/Producttable';

const products = [
  { name: "Tom ",  price: "50 ", category: "Electronics" },
  { name: "Cherry ",  price: "100 ", category: "Clothes"},
]; 
function App() {
  return (
    
<ProductTable tableau={products}/>
   );
}

export default App;
