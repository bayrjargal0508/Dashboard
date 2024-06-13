import React, { useState } from 'react';
import Header from './header';
import Add from '../assets/plus.png';

function Products() {
  const [showInputs, setShowInputs] = useState(false);
  const [inputValues, setInputValues] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: ""
  });
  const [productList, setProductList] = useState([]);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...productList];
    updatedProducts.splice(index, 1);
    setProductList(updatedProducts);
  };

  const handleAddProducts = () => {
    const newProduct = {
      text1: inputValues.text1,
      text2: inputValues.text2,
      text3: inputValues.text3,
      text4: inputValues.text4,
      text5: inputValues.text5
    };
    setProductList([...productList, newProduct]);
  };

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  return (
    <div>
      <Header style={{ position: 'fixed', zIndex: -1 }}/>
      <div className='ml-[500px] mt-[-47%]'>
        
        <button 
          className='bg-blue-300 w-28 h-10 text-black flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-blue-600'
          onClick={toggleInputs} 
        >
          <span>Add</span>
          <img src={Add} className='w-6 h-6' alt='Add icon' />
        </button>
        
        {productList.length > 0 && (
  <div className="mt-6 ">
    <h2 className="text-lg font-semibold mb-2">Products Added:</h2>
    <div className="overflow-x-auto">
      <table className="w-[1100px] border rounded-md overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Text 1</th>
            <th className="py-2 px-4 border-b">Text 2</th>
            <th className="py-2 px-4 border-b">Text 3</th>
            <th className="py-2 px-4 border-b">Text 4</th>
            <th className="py-2 px-4 border-b">Text 5</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border-b">{product.text1}</td>
              <td className="py-2 px-4 border-b">{product.text2}</td>
              <td className="py-2 px-4 border-b">{product.text3}</td>
              <td className="py-2 px-4 border-b">{product.text4}</td>
              <td className="py-2 px-4 border-b">{product.text5}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteProduct(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}


        {showInputs && 
         <div className='mt-0 w-[1100px]'>
            
            <button className='mt-10 bg-gray-300 w-36 h-10 text-black flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-gray-600'>
              <span>Add Image</span>
              <img src={Add} className='w-6 h-6' alt='Add' />
            </button>
            <div className='mt-10'>
              <input 
                type="text" 
                name="text1"
                value={inputValues.text1} 
                placeholder="Enter text" 
                className="border border-gray-400 w-96 rounded-md px-2 py-1 mb-4" 
                onChange={handleInputChange} 
              />
              <input 
                type="text" 
                name="text2"
                value={inputValues.text2} 
                placeholder="Enter text" 
                className="border border-gray-400 w-96 rounded-md px-2 py-1 mb-4 ml-10" 
                onChange={handleInputChange} 
              />
              <input 
                type="text" 
                name="text3"
                value={inputValues.text3} 
                placeholder="Enter text" 
                className="border border-gray-400 w-96 rounded-md px-2 py-1 mb-4 " 
                onChange={handleInputChange} 
              />
              <input 
                type="text" 
                name="text4"
                value={inputValues.text4} 
                placeholder="Enter text" 
                className="border border-gray-400 w-96 rounded-md px-2 py-1 ml-10 mb-4" 
                onChange={handleInputChange} 
              />
              <input 
                type="text" 
                name="text5"
                value={inputValues.text5} 
                placeholder="Enter text" 
                className="border border-gray-400 w-96 rounded-md px-2 py-1  mb-4" 
                onChange={handleInputChange} 
              />
            </div>
            <button 
              className='mt-6 bg-gray-300 w-36 h-10 text-black flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-gray-600'
              onClick={handleAddProducts} 
            >
              <span>Add Products</span>
            </button>
         </div>
       }

      
      </div>
      </div>
   
  );
}

export default Products;

