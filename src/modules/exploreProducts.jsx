"use client";
import React, { useEffect } from 'react';
import DescriptionWithButton from '@/components/description';
import Image from 'next/image';
import { products } from "../staticData/products.js";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ExploreProducts = () => {
  const desc = 'Each bite tells a story of love, passed down through generations.';

  const { ref, inView } = useInView({
    threshold: 0.1
  });

  const fade = useAnimation();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();
  const animationDown = useAnimation();

  useEffect(() => {
    if (inView) {
        fade.start({
            opacity: 1
        });
        animationDown.start({
            y: 0,
            transition: {
                type: 'spring', duration: 1.25, bounce: 0.2
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
            link={'https://www.facebook.com/GrazieOnlineStore/'}
          />
        </div>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-14 mt-8 w-[95%] mx-auto">
          {products?.map((product) => (
            <>
              <div>
                <motion.div
                    animate={animationDown}
                    className="bg-white p-4 h-72 overflow-hidden"
                >
                    <Image
                        src={product?.image} 
                        alt={product?.title}
                    />
                </motion.div>
                <motion.h2 animate={fade} className="text-lg font-semibold mt-4">{product?.title}</motion.h2>
              </div>
            </>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ExploreProducts;