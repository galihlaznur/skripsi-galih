import { createBrowserRouter } from "react-router-dom";
import ManagerHomePage from "../pages/Manager/Home/ManagerHomePage";
import SignInPage from "../pages/SignIn/SignInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import SuccessCheckoutPage from "../pages/SuccessCheckout/SuccessCheckoutPage";
import LayoutDashboard from "../components/LayoutDashboard";
import ManagerCoursePage from "../pages/Manager/Courses/ManagerCoursePage";
import ManagerCreateCoursePage from "../pages/Manager/CreateCourse/ManagerCreateCoursePage";
import ManagerCourseDetailPage from "../pages/Manager/CourseDetail/ManagerCourseDetailPage";
import ManagerCreateContentPage from "../pages/Manager/CreateCourseContent/CourseContentCreate";
import ManagerCoursePreviewPage from "../pages/Manager/CoursePreview/ManagerCoursePreviewPage";
import ManagerStudentsPage from "../pages/Manager/Students/StudentOverview/ManagerStudentsPage";
import StudentPage from "../pages/Students/StudentPage";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
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
  },
  {
    path: "/manager",
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        element: <ManagerCoursePage />
      },
      {
        path: "/manager/courses/create",
        element: <ManagerCreateCoursePage />
      },
      {
        path: "/manager/courses/:id",
        element: <ManagerCourseDetailPage />
      },
      {
        path: "/manager/courses/:id/create",
        element: <ManagerCreateContentPage />
      },
      {
        path: "/manager/courses/:id/preview",
        element: <ManagerCoursePreviewPage />
      },
      {
        path: "/manager/students",
        element: <ManagerStudentsPage />
      }
    ]
  },
  {
    path: "/student",
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        index: true,
        element: <StudentPage />
      },
      {
        path: "/student/detail-course/:id",
        element: <ManagerCoursePreviewPage />
      }
    ]
  }
]);

export default Router;

