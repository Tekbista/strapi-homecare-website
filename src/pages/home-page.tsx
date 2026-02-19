import React, { useState, useEffect } from 'react';
import PageService from '../services/page-service';
import { Carousel, Welcome, Mission} from '../models/home-page';

import CarouselComponent  from '../components/carousel/carousel';
import WelcomComponent from '../components/welcome/welcome';

import MissionStatement from '../components/mission/mission';

export default function HomePage() {
  

  const [carousel, setCarousel] = useState<Carousel | null>(null);
  const [welcome, setWelcome] = useState<Welcome | null>(null);
  const [mission, setMission] = useState<Mission | null>(null);

  useEffect(() => {
    new PageService().getHomePage().then(data => {
      setCarousel(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.carousel') || null);
      setWelcome(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.welcome') || null);
      setMission(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.misson') || null);

    });
  }, []);

  

  return (
    <div className="container mt-4">
      {carousel && <CarouselComponent id={0} Carousels={carousel.Carousels} />}
      {welcome && <WelcomComponent content={welcome.content} id={0} />}
      <hr className=" border-1 border-secondary" style={{borderStyle: "dashed"}}/>
      {mission && <MissionStatement {...mission} />}
    </div>
    
  );
}
