import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    console.log(err);
    return (
        <>
            <h1>Oops !!</h1>
            <h2>Something went wrong</h2>
            <p>{status + " : " + statusText} </p>
        </>
    );
};

export default Error;