import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page not-found">
      <div className="not-found">404 Page Not Found
      <Link to="/"><p>Go Home</p></Link>
      </div>
      
    </div>
  );
};

export default NotFound;
