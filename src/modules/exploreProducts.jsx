"use client"
import React, { useEffect } from 'react';
import DescriptionWithButton from '@/components/description';
import Image from 'next/image';
import { products } from "../staticData/products.js";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { BsArrowReturnRight } from 'react-icons/bs';

const ExploreProducts = () => {
  const desc = 'Each bite tells a story of love, passed down through generations';

  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const fade = useAnimation();
  const animationDown = useAnimation();

  useEffect(() => {
    if (inView) {
      fade.start({
        opacity: 1
      });
      animationDown.start({
        y: 0,
        transition: {
          type: 'spring',
          duration: 1.25,
          bounce: 0.2
        }
      });
    }

    if (!inView) {
      fade.start({
        opacity: 0
      });
      animationDown.start({
        y: '-100px'
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <React.Fragment>
      <div className="bg-slate-100">
        <div className="w-[95%] mx-auto">
          <DescriptionWithButton
            withButton={true}
            buttonLabel={'Shop Now'}
            description={desc}
            bgColor={'bg-yellow-800'}
            txtColor={'text-white'}
            link={'https://www.facebook.com/graziefoodco?mibextid=ZbWKwL'}
          />
        </div>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-14 mt-8 w-[95%] mx-auto">
          {products?.map((product) => (
            <div key={product.id} className="relative group">
                <motion.div
                    animate={animationDown}
                    className="bg-white p-4 h-72 overflow-hidden"
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                    />
                    <div ref={ref} 
                        className="absolute bottom-0 rounded -left-5 flex flex-col gap-4 bg-gray-100 shadow-md text-black text-base font-semibold p-4 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    >
                        <div className="flex items-center gap-1 transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-[500ms]">
                            <BsArrowReturnRight />
                            {product.descFlavor}
                        </div>
                        <div className="flex items-center gap-1 transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-[500ms] delay-75">
                            <BsArrowReturnRight />
                            {product.descAdd}
                        </div>
                        <div className="flex items-center gap-1 transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-[500ms] delay-100">
                            <BsArrowReturnRight />
                            {product.descPres}
                        </div>
                        <div className="flex items-center gap-1 transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-[500ms] delay-150">
                            <BsArrowReturnRight />
                            {product.descExp}
                        </div>
                    </div>
                </motion.div>
                <motion.h2 animate={fade} className="text-lg font-semibold mt-4">{product.title}</motion.h2>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ExploreProducts;
