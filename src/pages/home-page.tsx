import React, { useState, useEffect } from 'react';
import Drawer from '../components/drawer/drawer';
import PageService from '../services/page-service';
import { Menu, Header as HeaderType, Carousel, Welcome, Footer, Mission} from '../models/home-page';
import Header from '../components/header/header';
import CarouselComponent  from '../components/carousel/carousel';
import WelcomComponent from '../components/welcome/welcome';
import FooterComponent from '../components/footer/footer';
import MissionStatement from '../components/mission/mission';

export default function HomePage() {
  
  const [header, setHeader] = useState<HeaderType | null>(null);
  const [menu, setMenu] = useState<Menu | null>(null);
  const [carousel, setCarousel] = useState<Carousel | null>(null);
  const [welcome, setWelcome] = useState<Welcome | null>(null);
  const [footer, setFooter] = useState<Footer | null>(null);
  const [mission, setMission] = useState<Mission | null>(null);

  useEffect(() => {
    new PageService().getHomePage().then(data => {
      setHeader(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.header') || null);
      setMenu(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.menu') || null);
      setCarousel(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.carousel') || null);
      setWelcome(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.welcome') || null);
      setFooter(data?.data?.Components?.find((comp: any) => comp.__component === 'my-components.footer') || null);
      setMission(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.misson') || null);

    });
  }, []);

  

  return (
    <div>
      {header && <Header {...header} />}
      {menu && <Drawer {...menu} />}
      
      <div className="container mt-4">
        {carousel && <CarouselComponent id={0} Carousels={carousel.Carousels} />}
        {welcome && <WelcomComponent content={welcome.content} id={0} />}
        <hr className=" border-1 border-secondary" style={{borderStyle: "dashed"}}/>
        {mission && <MissionStatement {...mission} />}
      </div>
      {footer && <FooterComponent {...footer} />}
    </div>
  );
}
