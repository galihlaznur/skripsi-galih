import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet, useMatch } from 'react-router-dom'
import PropTypes from "prop-types"

export default function LayoutDashboard({isAdmin = true}) {
  const isManagerPreviewPage = useMatch('/manager/courses/:id/preview');
  const isStudentPreviewPage = useMatch('/student/detail-course/:id');

  return (
    <>
      {isManagerPreviewPage !== null || isStudentPreviewPage !== null ? (
        <Outlet />
      ) : (
        <div className="flex min-h-screen">
          <Sidebar isAdmin={isAdmin} />
          <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
              <Header />
              <Outlet />
          </main>
        </div>
      )
      }
    </>
  )
}

LayoutDashboard.propTypes = {
  isAdmin: PropTypes.bool,
}