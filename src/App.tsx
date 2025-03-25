import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import MainPage from "./pages/home/MainPage";
import LoginPage from "./pages/login/LoginPage";
import ClassPage from "./pages/class/ClassPage";
import ClassMemberPage from "./pages/class/ClassMemberPage";
import WinePage from "./pages/wine/WinePage";
import AddWinePage from "./pages/wine/AddWinePage";
import UserPage from "./pages/user/UserPage";
import ReportPage from "./pages/report/ReportPage";
import NoshowReportPage from "./pages/report/NoshowReportPage";
import CompletedReportPage from "./pages/report/CompletedReportPage";
import WineDetailPage from "./pages/wine/WineDetailPage";
import UserDetailPage from "./pages/user/UserDetailPage";

const queryClient = new QueryClient();

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>

              <Route path="/class" element={<ClassPage />}></Route>
              <Route path="/class/member" element={<ClassMemberPage />}></Route>

              <Route path="/wine" element={<WinePage />}></Route>
              <Route path="/wine/:id" element={<WineDetailPage />}></Route>
              <Route path="/wine/add" element={<AddWinePage />}></Route>

              <Route path="/user" element={<UserPage />}></Route>
              <Route path="/user/:id" element={<UserDetailPage />}></Route>

              <Route path="/report" element={<ReportPage />}></Route>
              <Route
                path="/report/noshow"
                element={<NoshowReportPage />}
              ></Route>
              <Route
                path="/report/completed"
                element={<CompletedReportPage />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
