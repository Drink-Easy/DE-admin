import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ClassPage from "./pages/ClassPage";
import WinePage from "./pages/WinePage";
import UserPage from "./pages/UserPage";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/class" element={<ClassPage />}></Route>
          <Route path="/wine" element={<WinePage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/report" element={<ReportPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
