import { Mission } from "../../models/home-page";
import './mission.css';

const MissionStatement: React.FC<Mission> = ({ title, content, linktext, href }) => {
  return (
    <div className="mission-statement text-center my-5">
      <h2>{title}</h2>
      <p className="lead">{content}</p>
      <a href={href} className="btn btn-primary">{linktext}</a>
    </div>
  );
};

export default MissionStatement;