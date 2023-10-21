import { Link } from "react-router-dom";

// This is the error 404 page for the application
function NotFound() {
  return (
    <div>
      <h1>Error 404 - Page Not Found</h1>
      <Link to="/">Return to the Home Page</Link>
    </div>
  );
}

export default NotFound;
