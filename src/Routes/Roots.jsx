// Description: This is the root component of the application
import { Link } from "react-router-dom";
import ErrorBound from "../Components/ErrorBound";
import { ErrorBoundary } from "react-error-boundary";

function Root () {

    return (
        // Wrapping the entire component with ErrorBoundary
        <ErrorBoundary fallback={<h2>Oops... This page is unavailable at the moment... Check back later</h2>}>
            <div className="container">
                <h1>Welcome to the Assessment Portal</h1>
                <br />
                <br />
                <h3>Click <Link to="counter">counterApp</Link> to check the counter</h3>
                <br />
                <br />
                <h3>Click <Link to="/error">here</Link> for result update</h3>
                <br />
                <br />
                <ErrorBound />
            </div>
        </ErrorBoundary>
    );
}

export default Root;