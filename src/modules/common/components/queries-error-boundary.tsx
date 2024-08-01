import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { memo, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorOnFetchElement from "./error-on-fetch-element.component";

const QueriesErrorBoundary = ({ children }: { children: ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      fallback={<ErrorOnFetchElement resetErrorBoundary={reset} />}
    >
      {children}
    </ErrorBoundary>
  );
};

export default memo(QueriesErrorBoundary);
