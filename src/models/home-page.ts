export interface HomePage{
    id: number;
    header: Header;
    menu: Menu;

}

export interface Menu{
    id: number;
    heading: string;
    MenuItem: MenuItem[];

}

export interface MenuItem{
    id: number;
    title: string;
    icon: Media;
    url: string;
    hoverColor: string;
}

export interface Header{
    id: number;
    brand: string;
    logo: Media;
    bgColor: string;
}

export interface Carousel{
    id: number;
    Carousels: CarouselItem[];
}

export interface CarouselItem{
    id: number;
    title: string;
    content: string;
    image: Media;
}

export interface Welcome{
    id: number;
    content: string;
}

export interface Footer{
    id: number;
    title: string;
    bgColor: string;
    contact: Contact;
    quicklinks: QuickLinks;
    social: Socials;
    copyright: string;
}

export interface Contact{
    id: number;
    title: string;
    info: Info[];
}

export interface Info{
    id: number;
    content: string;
    icon: Media;
}

export interface QuickLinks{
    id: number;
    title: string;
    links: Link[];
}

export interface Link{
    id: number;
    title: string;
    href: string;
}

export interface Socials{
    id: number;
    title: string;
    social: Social[];
}

export interface Social{
    id: number;
    title: string;
    href: string;
    icon: Media;
}

export interface Mission{
    id: number;
    title: string;
    content: string;
    linktext: string;
    href: string;
}

export interface Media{
    id: number;
    url: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
}