import { Link, useLoaderData } from 'react-router-dom'

export default function LatestCourses() {
    const overviews = useLoaderData()

  return (
    <section id="LatestCourses" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
        <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Courses</h2>
        {overviews?.courses?.map((item) => (
            <div key={item._id} className="card flex items-center gap-5">
                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img src={item.thumbnail_url} className="w-full h-full object-cover" alt="thumbnail" />
                </div>
                <div className="w-full">
                    <Link to={`/manager/courses/${item._id}`} className="font-bold text-xl leading-[30px] line-clamp-1">{item.name}</Link>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
                        <p className="text-[#838C9D]">{item.category.name}</p>
                    </div>
                </div>
            </div>
        ))}
    </section>
  )
}
