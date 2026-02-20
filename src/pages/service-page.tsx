import { useEffect, useState } from "react";
import PageService from "../services/page-service";
import ServiceCard from "../components/service-card/service-card";
import { Services } from "../models/service-page-model";

const ServicePage: React.FC = () => {
    const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL || "http://localhost:1337";
    const [service, setService] = useState<any>(null);
    const [services, setServices] = useState<Services | null>(null);

    useEffect(() => {
        // Fetch service page data from Strapi
        new PageService().getServicePage()
            .then(data => {
                setService(data?.data?.service);
                setServices(data?.data?.services.find((ser: any) => ser.__component === "homecare.services") || []);
            })
            .catch(error => console.error("Error fetching service page data:", error));
    }, []);

    return (
        <div>
            {service && services ? (
                <>
                <div dangerouslySetInnerHTML={{ __html: service }} />
                <ServiceCard {...services} />
                </>
            ) : (
                <p>Loading service page data...</p>
            )}

        </div>
    );
};

export default ServicePage;