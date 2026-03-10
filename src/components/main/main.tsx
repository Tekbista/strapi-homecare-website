import { useEffect, useState } from "react";
import { Header as HeaderType, Menu, Footer } from "../../models/home-page";
import PageService from "../../services/page-service";
import Drawer from "../drawer/drawer";
import Header from "../header/header";
import FooterComponent from "../footer/footer";
import { Outlet } from "react-router-dom";


const Main: React.FC = () => {

    const [header, setHeader] = useState<HeaderType | null>(null);
    const [menu, setMenu] = useState<Menu | null>(null);
    const [footer, setFooter] = useState<Footer | null>(null);

    useEffect(() => {
        new PageService().getHomePage().then(data => {
            setHeader(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.header') || null);
            setMenu(data?.data?.Components?.find((comp: any) => comp.__component === 'homecare.menu') || null);
            setFooter(data?.data?.Components?.find((comp: any) => comp.__component === 'my-components.footer') || null);

        });
    }, []);
    

    return (
        <>
            {header && <Header {...header} />}
            {menu && <Drawer {...menu} />}
            <main className="container">
                <Outlet />
            </main>
            {footer && <FooterComponent {...footer} />}
        </>
    );
};

export default Main;