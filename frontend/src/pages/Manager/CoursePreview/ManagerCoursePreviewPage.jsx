import { Link } from "react-router-dom";
import ContentText from "./ContentText";
import ContentVideo from "./ContentVideo";

export default function ManagerCoursePreviewPage() {
  return (
    <div className="flex min-h-screen">
        <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[330px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
            <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
                <nav className="flex flex-col w-full h-fit p-[30px] gap-[30px] z-10">
                    <Link to="manage-course.html" className="font-semibold text-white hover:underline">
                        <span>Back to Dashboard</span>
                    </Link>
                    <div className="flex flex-col gap-4">
                        <div className="flex shrink-0 w-[130px] h-[100px] rounded-[14px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/th-1.png" className="w-full h-full object-cover" alt="thumbnail" />
                        </div>
                        <h2 className="font-bold text-xl leading-[34px] text-white">Mastering React 18 Pro TypeScript Development</h2>
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link to="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Persiapan fundamental</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Install figma plugins</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Pengenalan UI UX</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Mengapa UI mobil le...</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Bikin UI components</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Bikin UI components</span>
                                </div>
                            </Link>
                        </li><li>
                            <Link to="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Persiapan fundamental</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Install figma plugins</span>
                                </div>
                            </Link>
                        </li><li>
                            <Link to="course-learning-text.html" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/note-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Persiapan fundamental</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="course-learning-video.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/video-play-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Install figma plugins</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="course-learning-finished.html">
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="w-full font-semibold text-white line-clamp-1 transition-all duration-300 hover:line-clamp-none">Finished</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <img src="/assets/images/backgrounds/sidebar-glow.png" className="absolute object-contain object-bottom bottom-0" alt="background" />
        </aside>
        <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[340px]">
            <div id="TopBar" className="flex items-center justify-between gap-[30px]">
                <form action="" className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <input type="text" name="search" id="search" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D]" placeholder="Search course, student, other file..." />
                    <img src="/assets/images/icons/search-normal.svg" className="w-6 h-6" alt="icon" />
                </form>
                <div className="relative flex items-center justify-end gap-[14px]">
                    <div className="text-right">
                        <p className="font-semibold">Masayoshi Kyo</p>
                        <p className="text-sm leading-[21px] text-[#838C9D]">Employee</p>
                    </div>
                    <button type="button" id="profileButton" className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="profile photos" />
                    </button>
                    <div id="ProfileDropdown" className="absolute top-full hidden">
                        <ul className="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4">
                            <li className="font-semibold">
                                <Link to="#">My Account</Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="#">Subscriptions</Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="#">Settings</Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="signin.html">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col gap-[26px]">
                <ContentText />
                <ContentVideo /> 
            </div>
        </main>
    </div>
  )
}
