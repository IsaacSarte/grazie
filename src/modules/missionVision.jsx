"use client";
import React from 'react';
import DescriptionWithButton from '@/components/description';
import { AnimatePresence, motion } from 'framer-motion';

const MissionVision = () => {
  const desc = "At Grazie, we are in the business of creating smiles and connections.";

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

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-4 md:h-[70vh] flex flex-col w-[90%] mx-auto md:w-full md:flex-row justify-center gap-8"
          >
            {/* mission */}
            <div className="relative md:w-[25%] bg-slate-100 flex flex-col">
              <div className="product-three bg-cover bg-center h-[10vh] md:h-[35vh]" />
              <div className="p-4">
                <span className="text-2xl md:text-4xl">Mission</span>
                <hr className="h-1 w-1/2 bg-black" />
                <p className="mt-2 text-sm md:text-base">At Grazie, our mission is to cultivate a lifestyle of balance, curiosity, and gratitude in the digital age. Through thoughtfully curated products, we inspire and support good physical and digital reading habits, foster healthy eating choices, and encourage a mindset of constant appreciation. Through our offerings, we aim to guide individuals towards a harmonious existence that embraces both the virtual and the tangible.</p>
              </div>
            </div>
            {/* vision */}
            <div className="relative md:w-[25%] mb-16 md:mb-0 bg-slate-100 flex flex-col">
              <div className="product-four bg-cover bg-center h-[10vh] md:h-[35vh]" />
              <div className="p-4">
                <span className="text-2xl md:text-4xl">Vision</span>
                <hr className="h-1 w-1/2 bg-black" />
                <p className="mt-2 text-sm md:text-base">Our vision is to be a guiding light in the modern world, where reading enriches minds, nourishment fuels vitality, and gratitude permeates every moment. Grazie envisions a future where our products empower individuals to navigate the digital landscape while staying grounded in meaningful experiences. We strive to create a community that values learning, enhancing lives even amidst the digital era&apos;s rapid pace.</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
};

export default MissionVision;
