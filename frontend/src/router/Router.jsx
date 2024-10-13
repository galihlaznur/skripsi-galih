import { createBrowserRouter, redirect } from "react-router-dom";
import ManagerHomePage from "../pages/Manager/Home/ManagerHomePage";
import SignInPage from "../pages/SignIn/SignInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import SuccessCheckoutPage from "../pages/SuccessCheckout/SuccessCheckoutPage";
import LayoutDashboard from "../components/LayoutDashboard";
import ManagerCoursePage from "../pages/Manager/Courses/ManagerCoursePage";
import ManagerCreateCoursePage from "../pages/Manager/CreateCourse/ManagerCreateCoursePage";
import ManagerCourseDetailPage from "../pages/Manager/CourseDetail/ManagerCourseDetailPage";
import ManagerCreateContentPage from "../pages/Manager/CreateCourseContent/ManagerCreateContentPage";
import ManagerCoursePreviewPage from "../pages/Manager/CoursePreview/ManagerCoursePreviewPage";
import ManagerStudentsPage from "../pages/Manager/Students/StudentOverview/ManagerStudentsPage";
import StudentPage from "../pages/Students/StudentPage";
import secureLocalStorage from "react-secure-storage";
import { MANAGER_SESSION, STORAGE_KEY } from "../utils/const";
import { getCategories, getCourseDetail, getCourses, getDetailContent } from "../services/courseService";


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
    id: MANAGER_SESSION,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)
      
      if (!session || session.role !== "manager") {
        throw redirect('/manager/sign-in')
      }

      return session
    },
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        loader: async () => {
          const data = await getCourses()
          console.log(data)
          return data
        },
        element: <ManagerCoursePage />
      },
      {
        path: "/manager/courses/create",
        loader: async () => {
          const categories = await getCategories()
          return {categories, course: null}
        },
        element: <ManagerCreateCoursePage />
      },
      {
        path: "/manager/courses/edit/:id",
        loader: async ({params}) => {
          const categories = await getCategories()
          const course = await getCourseDetail(params.id)
          console.log(course)
          return {categories, course: course?.data}
        },
        element: <ManagerCreateCoursePage />
      },
      {
        path: "/manager/courses/:id",
        loader: async ({params}) => {
          const course = await getCourseDetail(params.id)
          return course?.data
        },
        element: <ManagerCourseDetailPage />
      },
      {
        path: "/manager/courses/:id/create",
        element: <ManagerCreateContentPage />
      },
      {
        path: "/manager/courses/:id/edit/:contentId",
        loader: async ({params}) => {
          const content = await getDetailContent(params.contentId)

          return content?.data
        },
        element: <ManagerCreateContentPage />
      },
      {
        path: "/manager/courses/:id/preview",
        loader: async ({params}) => {
          const course = await getCourseDetail(params.id, true)

          return course?.data
        },  
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

