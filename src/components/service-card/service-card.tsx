import { ServiceCard as ServiceCardModel, Services } from "../../models/service-page-model";
import './service-card.css';

const ServiceCard: React.FC<Services> = ({id, services}) => {
    const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL || "http://localhost:1337";   
    
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4">
        {services.map((service) => (
        <div className="col" key={service.id}>
            <div >
                <div key={service.id} className="card" >
                    <img src={baseUrl + service.image.url}  alt={service.image.alternativeText}/>
                    <div className="card-body" >
                        <a href={service.href}>{service.title}</a>
                    </div>
                </div>
                
            </div>
        </div>
        ))}
    </div>
  
    );
};

export default ServiceCard;