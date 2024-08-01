import { ReactNode, memo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ITanstackQueryProvider {
  children: ReactNode;
}
const TanstackQueryProvider = ({ children }: ITanstackQueryProvider) => {
  const queryClient = new QueryClient({});
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default memo(TanstackQueryProvider);
