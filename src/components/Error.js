import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div>
            <h1>Oops!! {err.status}</h1>
            <h2>Something Went Wrong!! {err.statusText}!!</h2>
        </div>
    );

};
export default Error;