import { Link } from 'react-router-dom'
import CardCourse from './CardCourse'

export default function StudentPage() {
  return (
    <section id="LatestCourses" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
        <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Courses</h2>
        <CardCourse />
    </section>
  )
}
