import DescriptionWithButton from '@/components/description';
import React from 'react'
import Image from 'next/image';
import { products } from "../staticData/products.js";

const ExploreProducts = () => {
  const desc = 'Each bite tells a story of love, passed down through generations.';

  return (
    <React.Fragment>
      <div className="h-screen bg-slate-100">
        <div className="w-[95%] mx-auto">
          <DescriptionWithButton
            withButton={true}
            buttonLabel={'Shop Now'}
            description={desc}
            bgColor={'bg-yellow-800'}
            txtColor={'text-white'}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap- mt-8 w-[95%] mx-auto">
          {products.map((product, index) => (
            <>
              <div key={index} className="bg-white p-4 rounded shadow-md">
                <div className="image-container w-full h-72 overflow-hidden">
                  <Image src={product.image} alt={product.title} className="w-full h-auto" />
                </div>
              </div>
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            </>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ExploreProducts;