import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <h1>Oops !!</h1>
            <h2>Something went wrong</h2>
            <p>{err.status + " : " + err.statusText} </p>
        </>
    );
};

export default Error;