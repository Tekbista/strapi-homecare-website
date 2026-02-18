
import './drawer.css';
import { Menu } from '../../models/home-page';
import { ReactSVG } from 'react-svg';


const Drawer: React.FC<Menu> = ({ id, heading, MenuItem}) => {
    const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL || "http://localhost:1337";
  return (
    <>
        <nav className="navbar navbar-light bg-orange">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop"  aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
        </nav>
        
        <div className="offcanvas offcanvas-start"  id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
            <div className="offcanvas-header">
                <h3 className="offcanvas-title">{heading}</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <hr/>
            <div className="offcanvas-body">
                <ul>
                   {MenuItem.map(item => (
                    <li key={item.id} className="nav-item">
                        <ReactSVG
                            src={`${baseUrl}${item.icon.url}`}
                            beforeInjection={(svg) => {
                            svg.setAttribute("fill", "white");   // Change color here
                            svg.setAttribute("width", "24");
                            svg.setAttribute("height", "24");
                            }}
                        />
                        <a className="nav-link" href={item.url} >
                            {item.title}
                        </a>
                    </li>
                   ))}
                </ul>
            </div>
        </div>

    </>
  );
};

export default Drawer;
