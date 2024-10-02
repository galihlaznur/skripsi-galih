import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet, useMatch } from 'react-router-dom'

export default function LayoutDashboard() {
  const isPreviewPage = useMatch('/manager/courses/:id/preview');

  return (
    <>
      {isPreviewPage !== null ? (
        <Outlet />
      ) : (
        <div className="flex min-h-screen">
          <Sidebar />
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
