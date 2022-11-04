import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page not-found">
      <img className="404-img" src="" alt="" />
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFound;
