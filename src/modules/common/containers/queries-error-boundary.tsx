import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { memo, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface IQueryErrorBoundary {
  children: ReactNode;
}

const QueryErrorBoundary = ({ children }: IQueryErrorBoundary) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          There was an error!
          <button onClick={() => resetErrorBoundary()}>Try again</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default memo(QueryErrorBoundary);
