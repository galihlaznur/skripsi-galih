import { Link } from 'react-router-dom'

export default function LatestCourses() {
  return (
    <section id="LatestCourses" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
        <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Courses</h2>
        <div className="card flex items-center gap-5">
            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src="/assets/images/thumbnails/th-1.png" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="w-full">
                <Link to="#" className="font-bold text-xl leading-[30px] line-clamp-1">Responsive Design Triclorem Lorem, ipsum dolor.</Link>
                <div className="flex items-center gap-[6px] mt-[6px]">
                    <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
                    <p className="text-[#838C9D]">Programming</p>
                </div>
            </div>
        </div>
        <div className="card flex items-center gap-5">
            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src="/assets/images/thumbnails/th-2.png" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="w-full">
                <Link to="#" className="font-bold text-xl leading-[30px] line-clamp-1">HTMX JavaScript 2020</Link>
                <div className="flex items-center gap-[6px] mt-[6px]">
                    <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
                    <p className="text-[#838C9D]">Marketing</p>
                </div>
            </div>
        </div>
        <div className="card flex items-center gap-5">
            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src="/assets/images/thumbnails/th-3.png" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="w-full">
                <Link to="#" className="font-bold text-xl leading-[30px] line-clamp-1">Mastering React</Link>
                <div className="flex items-center gap-[6px] mt-[6px]">
                    <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
                    <p className="text-[#838C9D]">Data Science</p>
                </div>
            </div>
        </div>
        <div className="card flex items-center gap-5">
            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src="/assets/images/thumbnails/th-2.png" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="w-full">
                <Link to="#" className="font-bold text-xl leading-[30px] line-clamp-1">Responsive Design Triclorem Lorem, ipsum dolor.</Link>
                <div className="flex items-center gap-[6px] mt-[6px]">
                    <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
                    <p className="text-[#838C9D]">Marketing</p>
                </div>
            </div>
        </div>
        <div className="card flex items-center gap-5">
            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src="/assets/images/thumbnails/th-3.png" className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="w-full">
                <Link to="#" className="font-bold text-xl leading-[30px] line-clamp-1">Company Profile Multilorem Lorem, ipsum dolor.</Link>
                <div className="flex items-center gap-[6px] mt-[6px]">
                    <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
                    <p className="text-[#838C9D]">Data Science</p>
                </div>
            </div>
        </div>
    </section>
  )
}
