"use client";
import Image from 'next/image'
import Button from '@/components/button';
import React from 'react'
import grazieIcon from "../../public/images/Grazie1322Logo.png";
import { AnimatePresence, motion } from 'framer-motion';

const Banner = () => {
  return (
    <React.Fragment>
      <div className="h-screen max-h-screen overflow-hidden md:max-h-none flex">
        {/* left div */}
        <div className="w-1/2 bg-slate-100">
          <div className="w-[90%] mt-4 mx-auto flex flex-col gap-12">
            <Image
              src={grazieIcon}
              alt="Grazie Logo"
              width={150}
              height={150}
            />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-4 flex flex-col gap-8"
              >
                <span className="md:mt-4 text-3xl md:text-6xl font-semibold">
                  Welcome to Grazie 1322
                </span>
                <span className="text-xl md:text-2xl font-semibold opacity-65">
                    Eat Right, Feel Bright: One Delicious Bite at a Time!
                </span>
                <Button 
                  label={'Shop Now'}
                  className="p-4"
                  bgColor={'bg-yellow-800'}
                  txtColor={'text-white'}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* right div */}
        <div className="w-1/2">
            <div className="flex flex-col">
              <AnimatePresence>
                <motion.div 
                    className="product-one h-[50vh] bg-cover bg-center relative"
                    initial={{ height: 0 }}
                    animate={{ height: '50vh' }}
                    transition={{ type: 'spring', bounce: 0.1, duration: 1.75 }}
                >
                    <span className="absolute bottom-0 md:text-2xl tracking-wide text-white p-4 font-bold">
                        Crispy Fruits
                    </span>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <div className="h-[50vh] bg-slate-100 flex">
                  <motion.div
                    className="product-two bg-cover bg-center w-1/2"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ type: 'spring', bounce: 0.1, duration: 1.75 }}
                  />
                  <div className="w-1/2 flex flex-col ml-8 justify-center -mt-12 gap-2 text-left">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="md:p-0 md:text-2xl font-bold">
                        Healthy Snacks
                    </motion.span>
                    <hr className="h-1 w-1/2 bg-black" />
                  </div>
                </div>
              </AnimatePresence>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Banner;