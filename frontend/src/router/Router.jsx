import { createBrowserRouter } from "react-router-dom";
import ManagerHome from "../pages/ManagerHome/ManagerHome";
import SignInPage from "../pages/SignIn/SignInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import SuccessCheckoutPage from "../pages/SuccessCheckout/SuccessCheckoutPage";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHome />,
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckoutPage />,
  }
]);

export default Router;

