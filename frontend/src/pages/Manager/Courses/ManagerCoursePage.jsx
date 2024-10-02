import { Link } from 'react-router-dom'
import CardCourse from './CardCourse'

export default function ManagerCoursePage() {
  return (
    <>
        <header className="flex items-center justify-between gap-[30px]">
            <div>
                <h1 className="font-extrabold text-[28px] leading-[42px]">Manage Courses</h1>
                <p className="text-[#838C9D] mt-[1]">Give the best future for your great employees</p>
            </div>
            <div className="flex items-center gap-3">
                <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                    Import File
                </Link>
                <Link to="/manager/courses/create" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                    New Course
                </Link>
            </div>
        </header>
        <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
            <CardCourse />
            {/* <div id="Pagination" className="flex items-center gap-3">
                <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white">
                    <span className="font-semibold text-sm leading-[21px]">1</span>
                </button>
                <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                    <span className="font-semibold text-sm leading-[21px]">2</span>
                </button>
                <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                    <span className="font-semibold text-sm leading-[21px]">3</span>
                </button>
                <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                    <span className="font-semibold text-sm leading-[21px]">4</span>
                </button>
                <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                    <span className="font-semibold text-sm leading-[21px]">5</span>
                </button>
            </div> */}
        </section>
    </>
  )
}
