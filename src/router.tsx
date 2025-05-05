import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/home/MainPage";
import LoginPage from "./pages/login/LoginPage";
import ClassPage from "./pages/class/ClassPage";
import ClassMemberPage from "./pages/class/ClassMemberPage";
import WinePage from "./pages/wine/WinePage";
import WineMainPage from "./pages/wine/WineMainPage";
import AddWinePage from "./pages/wine/AddWinePage";
import UserPage from "./pages/user/UserPage";
import UserMainPage from "./pages/user/UserMainPage";
import ReportPage from "./pages/report/ReportPage";
import NoshowReportPage from "./pages/report/NoshowReportPage";
import CompletedReportPage from "./pages/report/CompletedReportPage";
import WineDetailPage from "./pages/wine/WineDetailPage";
import UserDetailPage from "./pages/user/UserDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/class",
    element: <ClassPage />,
    children: [
      { path: "member", element: <ClassMemberPage /> }, // /class/member
    ],
  },
  {
    path: "/wine",
    element: <WinePage />,
    children: [
      { index: true, element: <WineMainPage /> }, // /wine
      { path: "add", element: <AddWinePage /> }, // /wine/add
      { path: ":id", element: <WineDetailPage /> }, // /wine/:id
    ],
  },
  {
    path: "/user",
    element: <UserPage />,
    children: [
      { index: true, element: <UserMainPage /> }, // /user
      { path: ":id", element: <UserDetailPage /> }, // /user/:id
    ],
  },
  {
    path: "/report",
    element: <ReportPage />,
    children: [
      { path: "noshow", element: <NoshowReportPage /> }, // /report/noshow
      { path: "completed", element: <CompletedReportPage /> }, // /report/completed
    ],
  },
]);
