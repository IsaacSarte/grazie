import React from 'react';
import Image from "next/image";
import solarBench from "../../public/images/solar_smart_bench1.jpg";
import bench from "../../public/images/Bbench4.jpg";
import DescriptionWithButton from '@/components/description';

const MissionVision = () => {
  const desc = "We've curated an online haven where cozy corners meet cutting-edge learning,"
  return (
    <div className="bg-[#756666] p-6 pt-16 h-screen ">
      <DescriptionWithButton
        withButton={true}
        buttonLabel={'Shop Now'}
        description={desc}
        bgColor={"bg-transparent border-2 border-white"}
        txtColor={"text-white"}
        descColor={"text-white"}
      />
      <div className="flex justify-between mt-4 pt-1">
        <div className="w-full max-w-[800px] h-[700px] m-4 ml-[80px]">
          <div className="bg-white p-4 rounded h-full">
            {/* Placeholder image for Mission */}
            <Image
              src={solarBench}
              alt="Mission Placeholder"
              width={550}
              height={550}
              className='object-cover'
            />
            <span className="mt-3 text-2xl font-semibold opacity-65">
              Mission
            </span>
            <p>At Grazie, our mission is to cultivate a lifestyle of balance, curiosity, and gratitude in the digital age. Through thoughtfully curated products, we inspire and support good physical and digital reading habits, foster healthy eating choices, and encourage a mindset of constant appreciation. Through our offerings, we aim to guide individuals towards a harmonious existence that embraces both the virtual and the tangible.</p>
          </div>
        </div>
        <div className="w-full max-w-[800px] h-[700px] m-4 mr-[80px]">
          <div className="bg-white p-4 rounded h-full">
            {/* Placeholder image for Vision */}
            <Image
              src={bench}
              alt="Vision Placeholder"
              width={550}
              height={550}
              className=''
            />
            <span className="mt-3 text-2xl font-semibold opacity-65">
              Vision
            </span>
            <p>Our vision is to be a guiding light in the modern world, where reading enriches minds, nourishment fuels vitality, and gratitude permeates every moment. Grazie envisions a future where our products empower individuals to navigate the digital landscape while staying grounded in meaningful experiences. We strive to create a community that values learning, well-being, and thankfulness, enhancing lives even amidst the digital era's rapid pace.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
