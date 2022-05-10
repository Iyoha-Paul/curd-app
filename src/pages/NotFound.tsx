import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found  container">
      <h1>ERROR 404</h1>

      <p>Page not found</p>
      <Link to={"/"} className="link">
        Back to Home Page...
      </Link>
    </div>
  );
};

export default NotFound;
