
import { Carousel } from "../../models/home-page";

const CarouselComponent: React.FC<Carousel> = ({ id, Carousels }) => {
    const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL || "http://localhost:1337";

  return (
    
    <div id={`carouselExampleIndicators${id}`} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {Carousels.map((item, index) => (
          <button
            key={item.id}
            type="button"
            data-bs-target={`#carouselExampleIndicators${id}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {Carousels.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={`${baseUrl}${item.image.url}`} className="d-block w-100" alt={item.image.alternativeText} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;