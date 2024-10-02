import { Link } from "react-router-dom";
import PropTypes from "prop-types"

export default function Sidebar({isAdmin = true}) {
  return (
    <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[280px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
            <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
                <nav className="flex flex-col w-full h-fit p-[30px] gap-10 z-10">
                    <Link to="#">
                        <img src="/assets/images/logos/logo.svg" alt="logo" />
                    </Link>
                    <ul className="flex flex-col gap-4">
                        <p className="font-semibold text-xs leading-[18px] text-white">GENERAL</p>
                        <li>
                            <Link to="/manager" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                    <img src="/assets/images/icons/3dcube-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Overview</span>
                                </div>
                            </Link>
                        </li>
                        {isAdmin && (
                            <>
                                <li>
                                    <Link to="/manager/courses">
                                        <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                            <img src="/assets/images/icons/note-favorite-white.svg" className="w-6 h-6" alt="icon" />
                                            <span className="font-semibold text-white">Courses</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                            <img src="/assets/images/icons/crown-white.svg" className="w-6 h-6" alt="icon" />
                                            <span className="font-semibold text-white">Categories</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/manager/students" >
                                        <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                            <img src="/assets/images/icons/profile-2user-white.svg" className="w-6 h-6" alt="icon" />
                                            <span className="font-semibold text-white">Students</span>
                                        </div>
                                    </Link>
                                </li>
                            </>  
                        )}
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <p className="font-semibold text-xs leading-[18px] text-white">OTHERS</p>
                        <li>
                            <Link to="#" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/security-card-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Subscription</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/cup-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Rewards</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" >
                                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                    <img src="/assets/images/icons/setting-2-white.svg" className="w-6 h-6" alt="icon" />
                                    <span className="font-semibold text-white">Settings</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <img src="/assets/images/backgrounds/sidebar-glow.png" className="absolute object-contain object-bottom bottom-0" alt="background" />
        </aside>
  )
}

Sidebar.propTypes = {
    isAdmin: PropTypes.bool,
}
