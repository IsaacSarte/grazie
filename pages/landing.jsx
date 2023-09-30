import Banner from '@/modules/banner';
import ExploreProducts from '@/modules/exploreProducts';
import MissionVision from '@/modules/missionVision';
import React from 'react'

const Landing = () => {
  return (
    <React.Fragment>
      <Banner />
      <MissionVision />
      <ExploreProducts />
    </React.Fragment>
  )
}

export default Landing;