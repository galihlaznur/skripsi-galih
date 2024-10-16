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
import { MANAGER_SESSION, STORAGE_KEY, STUDENT_SESSION } from "../utils/const";
import { getCategories, getCourseDetail, getCourses, getDetailContent, getStudentCourse } from "../services/courseService";
import ManagerCreateStudentPage from "../pages/Manager/CreateStudent/ManagerCreateStudentPage";
import { getCoursesStudents, getDetailStudent, getStudents } from "../services/studentService";
import StudentCourseList from "../pages/Manager/student-course/StudentCourseList";
import StudentForm from "../pages/Manager/student-course/StudentForm";
import { getOverviews } from "../services/overviewService";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
  },
  {
    path: "/manager/sign-in",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)
      
      if (session && session.role === "manager") {
        throw redirect('/manager')
      }

      return true
    },
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)
      
      if (session && session.role === "manager") {
        throw redirect('/manager')
      }

      return true
    },
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
        loader: async () => {
          const overviews = await getOverviews()

          return overviews?.data
        },
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
        loader: async () => {
          const students = await getStudents()

          return students?.data
        },
        element: <ManagerStudentsPage />
      },
      {
        path: "/manager/students/create",
        element: <ManagerCreateStudentPage />
      },
      {
        path: "/manager/students/edit/:id",
        loader: async ({params}) => {
          const student = await getDetailStudent(params.id)

          return student?.data
        },
        element: <ManagerCreateStudentPage />
      },
      {
        path: '/manager/courses/students/:id',
        loader: async ({params}) => {
          const course = await getStudentCourse(params.id)

          return course?.data
        },
        element: <StudentCourseList />
      },
      {
        path: '/manager/courses/students/:id/add',
        loader: async () => {
          const students = await getStudents()

          return students?.data
        },
        element: <StudentForm />
      }
    ]
  },
  {
    path: "/student",
    id: STUDENT_SESSION,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)
      
      if (!session || session.role !== "student") {
        throw redirect('/student/sign-in')
      }

      return session
    },
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        index: true,
        loader: async () => {
          const courses = await getCoursesStudents()

          return courses?.data
        },
        element: <StudentPage />
      },
      {
        path: "/student/detail-course/:id",
        loader: async ({params}) => {
          const course = await getCourseDetail(params.id, true)

          return course?.data
        },  
        element: <ManagerCoursePreviewPage isAdmin={false} />
      }
    ]
  },
  {
    path: "/student/sign-in",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)
      
      if (session && session.role === "student") {
        throw redirect('/student')
      }

      return true
    },
    element: <SignInPage type='student' />,
  }
]);

export default Router;

