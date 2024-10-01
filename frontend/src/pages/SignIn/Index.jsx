import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInPage() {
  return (
	<div className="relative flex flex-col flex-1 p-[10px]">
        <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
            <img src="/assets/images/backgrounds/background-glow.png" className="absolute bottom-0 transform -translate-x-1/2 left-1/2" alt="" />
        </div>
        <nav className="flex items-center justify-between p-[30px]">
            <div className="flex items-center gap-[60px]">
                <img src="/assets/images/logos/logo.svg" className="flex shrink-0" alt="logo" />
                <ul className="flex items-center gap-10">
                    <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="#">Pricing</Link>
                    </li>
                    <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="#">Features</Link>
                    </li>
                    <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="#">Testimonials</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <Link to="#" >
                    <div className="flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                        <span className="font-semibold text-white">My Dashboard</span>
                    </div>
                </Link>           
                <Link to="/manager/sign-up" >
                    <div className="flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                        <span className="font-semibold text-white">Sign Up</span>
                    </div>
                </Link>
            </div>
        </nav>
        <form className="flex flex-col w-[400px] h-fit rounded-[20px] border border-[#262A56] p-[30px] gap-[30px] bg-[#080A2A] m-auto">
            <div>
                <h1 className="font-bold text-[26px] leading-[39px] text-white">Welcome Back!</h1>
                <p className="text-[#6B6C7F]">Manage your employees easily</p>
            </div>
            <hr className="border-[#262A56]" />
            <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                <img src="/assets/images/icons/sms-white.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
                <input type="email" name="email" id="email" className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]" placeholder="Write your email address" />
            </div>
            <div>
                <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                    <img src="/assets/images/icons/key-white.svg" className="w-6 h-6 flex shrink-0" alt="icon" />
                    <input type="password" name="password" id="password" className="appearance-none outline-none !bg-transparent w-full font-semibold text-white placeholder:font-normal placeholder:text-[#6B6C7F]" placeholder="Type your secure password" />
                </div>
                <div className="flex justify-end mt-[10px]">
                    <Link to="#" className="text-sm leading-[21px] text-[#662FFF] hover:underline">Forgot Password</Link>
                </div>
            </div>
            <hr className="border-[#262A56]" />
            <button type="submit" className="w-full rounded-full border p-[14px_20px] text-center font-semibold text-white bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                Sign In to Manage
            </button>
        </form>
    </div>
  )
}
