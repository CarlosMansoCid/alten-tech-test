import { memo } from "react";

const ErrorOnFetch = () => {
  return (
    <div aria-errormessage="Error">
      <h2>Ha ocurrido un error</h2>
    </div>
  );
};
export default memo(ErrorOnFetch);
