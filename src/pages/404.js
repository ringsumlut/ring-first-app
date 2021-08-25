import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <h1>Page Not Found!</h1>
      <Link to="/home">Go to Home Page</Link>
    </React.Fragment>
  );
};

export default NotFoundPage;
