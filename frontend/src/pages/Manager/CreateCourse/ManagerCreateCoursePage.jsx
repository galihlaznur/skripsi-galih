import { Link } from 'react-router-dom'

export default function ManagerCreateCoursePage() {
  return (
    <>
        <header className="flex items-center justify-between gap-[30px]">
            <div>
                <h1 className="font-extrabold text-[28px] leading-[42px]">New Course</h1>
                <p className="text-[#838C9D] mt-[1]">Create new future htmlFor company</p>
            </div>
            <div className="flex items-center gap-3">
                <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                    Import from BWA
                </Link>
            </div>
        </header>
        <htmlForm className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
            <div className="flex flex-col gap-[10px]">
                <label htmlFor="title" className="font-semibold">Course Name</label>
                <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <img src="/assets/images/icons/note-favorite-black.svg" className="w-6 h-6" alt="icon" />
                    <input type="text" name="title" id="title" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Write better name htmlFor your course" required />
                </div>
            </div>
            <div className="relative flex flex-col gap-[10px]">
                <label htmlFor="thumbnail" className="font-semibold">Add a Thumbnail</label>
                <div id="thumbnail-preview-container" className="relative flex shrink-0 w-full h-[200px] rounded-[20px] border border-[#CFDBEF] overflow-hidden">
                    <button type="button" id="trigger-input" className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 z-0">
                        <img src="/assets/images/icons/gallery-add-black.svg" className="w-6 h-6" alt="icon" />
                        <span className="text-[#838C9D]">Add an attachment</span>
                    </button>
                    <img id="thumbnail-preview" src="" className="w-full h-full object-cover hidden" alt="thumbnail" />
                    <button type="button" id="delete-preview" className="absolute right-[10px] bottom-[10px] w-12 h-12 rounded-full z-10 hidden">
                        <img src="/assets/images/icons/delete.svg" alt="delete" />
                    </button>
                </div>
                <input type="file" name="thumbnail" id="thumbnail" accept="image/*" className="absolute bottom-0 left-1/4 -z-10" required />
            </div>
            <div className="flex flex-col gap-[10px]">
                <label htmlFor="tagline" className="font-semibold">Course Tagline</label>
                <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <img src="/assets/images/icons/bill-black.svg" className="w-6 h-6" alt="icon" />
                    <input type="text" name="tagline" id="tagline" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Write tagline htmlFor better copy" />
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <label htmlFor="category" className="font-semibold">Select Category</label>
                <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <img src="/assets/images/icons/bill-black.svg" className="w-6 h-6" alt="icon" />
                    <select name="category" id="category" className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent">
                        <option value="" hidden>Choose one category</option>
                        <option value="" >test</option>
                        <option value="" >test</option>
                        <option value="" >test</option>
                    </select>
                    <img src="/assets/images/icons/arrow-down.svg" className="w-6 h-6" alt="icon" />
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <label htmlFor="desc" className="font-semibold">Description</label>
                <div className="flex w-full rounded-[20px] border border-[#CFDBEF] gap-3 p-5  transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF] ring-2 ring-[#FF435A]">
                    <img src="/assets/images/icons/note-black.png" className="w-6 h-6" alt="icon" />
                    <textarea name="desc" id="desc" rows="5" className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Explain what this course about"></textarea>
                </div>
                <span className="error-message text-[#FF435A]">The description is required</span>
            </div>
            <div className="flex items-center gap-[14px]">
                <button type="submit" className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                    Save as Draft
                </button>
                <button type="submit" className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                    Create Now
                </button>
            </div>
        </htmlForm>
    </>
  )
}
