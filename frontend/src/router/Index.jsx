import { createBrowserRouter } from "react-router-dom";
import ManagerHome from "../pages/ManagerHome/Index";
import SignInPage from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHome />,
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  }
]);

export default router;

