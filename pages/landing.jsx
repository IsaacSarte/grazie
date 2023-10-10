import Banner from '@/modules/banner';
import ExploreProducts from '@/modules/exploreProducts';
import MissionVision from '@/modules/missionVision';
import Footer from '@/modules/footer';
import React from 'react'

const Landing = () => {
  return (
    <React.Fragment>
      <Banner />
      <MissionVision />
      <ExploreProducts />
      <Footer />
    </React.Fragment>
  )
}

export default Landing;