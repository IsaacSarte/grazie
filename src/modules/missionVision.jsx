"use client";
import React, { useEffect } from 'react';
import DescriptionWithButton from '@/components/description';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const MissionVision = () => {
  const desc = "From Granny secrets to modern delights, savor the essence of tradition of our homemade foods.";

  const { ref, inView } = useInView({
    threshold: 0.25
  });

  const fade = useAnimation();
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView) {
        fade.start({
            opacity: 1
        });
        animationLeft.start({
            x: 0,
            transition: {
                type: 'spring', duration: 1.25, bounce: 0.15
            }
        });
        animationRight.start({
            x: 0,
            transition: {
                type: 'spring', duration: 1.25, bounce: 0.15
            }
        });
    }

    if (!inView) {
        fade.start({
            opacity: 0
        });
        animationLeft.start({
            x: '-100px',
        });
        animationRight.start({
            x: '100px'
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <React.Fragment>
      <div className="md:h-screen bg-[#756666]">
        <div className="w-[95%] mx-auto">
          <DescriptionWithButton
            withButton={true}
            buttonLabel={'Shop Now'}
            description={desc}
            bgColor={"bg-transparent border-2 border-white"}
            txtColor={"text-white"}
            descColor={"text-white"}
          />
        </div>

        <div
            ref={ref}
            className="mt-4 md:h-[70vh] flex flex-col w-[90%] mx-auto md:w-full md:flex-row justify-center gap-8"
        >
            {/* mission */}
            <motion.div
                animate={fade}
                className="relative md:w-[25%] bg-slate-100 flex flex-col"
            >
                <div className="product-three bg-cover bg-center h-[10vh] md:h-[35vh]" />
                <div className="p-4" ref={ref}>
                    <motion.span
                        animate={fade}
                        className="text-2xl md:text-4xl"
                    >
                        Mission
                    </motion.span>
                    <hr className="h-1 w-1/2 bg-black" />
                    <motion.p
                        animate={animationLeft}
                        className="mt-2 text-sm md:text-base"
                    >
                        We strive to deliver timeless and exceptional food experiences that transcend generations, crafting a legacy of joy and well-being. Through our commitment to quality, innovation, and health, we aim to delight taste buds across ages, fostering a community that cherishes the art of nourishing both body and soul.
                    </motion.p>
                </div>
            </motion.div>
            {/* vision */}
            <motion.div 
                animate={fade}
                className="relative md:w-[25%] mb-16 md:mb-0 bg-slate-100 flex flex-col"
            >
                <div className="product-four bg-cover bg-center h-[10vh] md:h-[35vh]" />
                <div className="p-4" ref={ref}>
                    <motion.span
                        animate={fade}
                        className="text-2xl md:text-4xl"
                    >
                        Vision
                    </motion.span>
                    <hr className="h-1 w-1/2 bg-black" />
                    <motion.p
                        animate={animationRight}
                        className="mt-2 text-sm md:text-base"
                    >
                        To be the heart of homes worldwide, where our diverse range of special foods and healthy snacks becomes synonymous with moments of happiness and vitality. We envision a future where every generation finds comfort, pleasure, and wellness in our products, creating a lasting tradition of savoring life&apos;s moments with our timeless delights.
                    </motion.p>
                </div>
            </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MissionVision;
