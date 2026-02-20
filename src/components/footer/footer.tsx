import { ReactSVG } from "react-svg";
import { Footer } from "../../models/home-page";
import "./footer.css";

const FooterComponent: React.FC<Footer> = ({ contact, quicklinks, social, copyright, bgColor }) => {
    const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL || "http://localhost:1337";
  return (
    <footer className=" text-white text-center py-3" style={{ backgroundColor: bgColor }}>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4 ">
                <h6>{contact.title}</h6>
                <ul className="list-unstyled d-flex flex-column align-items-center">
                    {contact.info.map(info => (
                        <li key={info.id} className="d-flex align-items-center">
                            <ReactSVG
                                src={`${baseUrl}${info.icon.url}`}
                                beforeInjection={(svg) => {
                                svg.setAttribute("fill", "white");   // Change color here
                                svg.setAttribute("width", "12");
                                svg.setAttribute("height", "12");
                                }}
                            />
                            <p className="ms-3 mb-0">{info.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-md-4">
                <h6>{quicklinks.title}</h6>
                <ul className="list-unstyled">
                    {quicklinks.links.map(link => (
                        <li key={link.id}>
                            <a href={link.href} className="text-white text-decoration-none">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-md-4">
                <h6>{social.title}</h6>
                <div className="d-flex justify-content-center">
                    {social.social.map(socialItem => (
                        <a key={socialItem.id} href={socialItem.href} className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                            <ReactSVG
                                src={`${baseUrl}${socialItem.icon.url}`}
                                beforeInjection={(svg) => {
                                svg.setAttribute("fill", "white");   // Change color here
                                svg.setAttribute("width", "32");
                                svg.setAttribute("height", "32");
                                }}
                            />
                        </a>
                    ))}
                </div>
            </div>
            
        </div>
        <hr className="bg-light" />
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Demo Homecare. {copyright}.</p>
      </div>
      </div>
    </footer>
  );
};

export default FooterComponent;