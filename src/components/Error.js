import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <h2>{err.status}</h2>
    </div>
  );
};

export default Error;
