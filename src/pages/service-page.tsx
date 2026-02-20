import { useEffect, useState } from "react";
import PageService from "../services/page-service";

const ServicePage: React.FC = () => {
    const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL || "http://localhost:1337";
    const [service, setService] = useState<any>(null);

    useEffect(() => {
        // Fetch service page data from Strapi
        new PageService().getServicePage()
            .then(data => {
                setService(data?.data?.service);
            })
            .catch(error => console.error("Error fetching service page data:", error));
    }, []);

    return (
        <div>
            {service ? (
        <div dangerouslySetInnerHTML={{ __html: service }} />
      ) : (
        <p>Loading service page data...</p>
      )}
        </div>
    );
};

export default ServicePage;