
export interface ServicePage {
    id: number;
    title: string;
    description: string;
    service: TrustedHTML;
    services: Services;
}

export interface Services{
    id: number;
    services: ServiceCard[];
}

export interface ServiceCard{
    id: number;
    title: string;
    description: string;
    image: Media;
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