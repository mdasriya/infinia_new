import React from 'react';

// import data

import { products } from "../data"


// import product slider components

import ProductSlider from "../components/ProductSlider"



const Products = () => {

  // destructure products
   
  const {title, subtitle} =  products;

  return <section className='section text-center'>
     
    <div className='container mx-auto'>
    
      <div>
        <h2 className='title'>{title}</h2>
        <p className='max-w-[750px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
      </div>
{/* sliders */}
<ProductSlider />

    </div>
  </section>;
};

export default Products;
