"use client";
import Image from 'next/image'
import Button from '@/components/button';
import React from 'react'
import grazieIcon from "../../public/images/Grazie1322Logo.png";
import { AnimatePresence, motion } from 'framer-motion';

const Banner = () => {
  return (
    <React.Fragment>
      <div className="h-screen flex">
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
                transition={{ duration: 1, delay: 0.25 }}
                className="mt-4 flex flex-col gap-8"
              >
                <span className="mt-4 text-6xl font-semibold">
                  Welcome to Grazie 1332
                </span>
                <span className="ml-3 text- font-semibold opacity-65">
                  Where Curiosity, Comfort and Goodness Unite!
                </span>
                <p className="mt-4 text-2xl font-semibold opacity-75">
                  At Grazie, we&apos;re in the business of creating smiles and connections. We&apos;re a team of dreamers and doers, united by a love for learning, well-being, and givers of gratitude.
                </p>
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
                    transition={{ type: 'spring', bounce: 0.1, duration: 1.5 }}
                >
                    <span className="absolute bottom-0 text-2xl tracking-wide text-white p-4 font-bold">
                        Product 1
                    </span>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <div className="h-[50vh] bg-slate-100 flex">
                  <motion.div
                    className="product-two bg-cover bg-center w-1/2"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ type: 'spring', bounce: 0.1, duration: 1.5 }}
                  />
                  <div className="w-1/2 flex flex-col ml-8 justify-center -mt-12 gap-2 text-left">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="text-2xl font-bold">
                        Product 2
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