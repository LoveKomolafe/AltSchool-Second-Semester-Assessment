import { useState } from "react";

function ErrorBoundary () {

    const [hasError, setHasError] = useState(false);

    if (hasError) {
        throw new Error("Oops... There is an error. Something went wrong in this App");
    }

    return (
        <div>
            <button onClick={() => setHasError(true)}>Test the Error Boundary Here</button>
        </div>
    )
}
export default ErrorBoundary;
