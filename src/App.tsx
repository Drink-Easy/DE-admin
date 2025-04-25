import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
