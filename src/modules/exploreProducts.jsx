import DescriptionWithButton from '@/components/description';
import React from 'react'

const ExploreProducts = () => {
  const desc = 'lorem ipsum dolor sit amet, consectetur adip';

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
      </div>
    </React.Fragment>
  )
}

export default ExploreProducts;