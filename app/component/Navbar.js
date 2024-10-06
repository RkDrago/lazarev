"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Navbar = () => {
    const divRef = useRef(null)


    useEffect(() => {
        const yspanElements = gsap.utils.toArray('.yspan');
        const dropdownElement = divRef.current;

        const handleMouseEnter = () => {
            let tl = gsap.timeline();
            tl.to(dropdownElement, {
                height: 200,
                duration: 0.3,
            });
            tl.to(yspanElements, {
                bottom:0,
                duration:0.1,
                stagger:{
                    amount:0.4
                }
            });
        };
        
        const handleMouseLeave = () => {
            let tl = gsap.timeline();
            tl.to(dropdownElement, {
                height: 20,
                duration: 0.5,
            });
            tl.to(yspanElements, {
                bottom:"-20px",
                duration:0.1,
                stagger:{
                    amount:0.4
                }
            });
        };

        dropdownElement.addEventListener('mouseenter', handleMouseEnter);
        dropdownElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            dropdownElement.removeEventListener('mouseenter', handleMouseEnter);
            dropdownElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (

        <nav className='bg-[#111] sticky top-0 z-40'>
            <div className="w-[87%] mx-auto flex items-center justify-between py-5">
                <h1 className='text-2xl font-extrabold z-10'>LAZAREV.</h1>
                <button className="group text-sm p-[14px] pr-16 rounded-full font-bold flex relative z-10">
                    <span className='z-[1]'>LET'S TALK</span>
                    <span className="transition-all ease-out duration-500 bg-[#0da34e] rounded-full absolute pl-[121px] p-[14px] right-0 top-0 group-hover:pl-[14px]"><svg className='size-5' fill="none" viewBox="0 0 20 20"><path fill="#fff" d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"></path></svg></span>
                </button>
            </div>
            <div className=" flex flex-col gap-10 items-center py-9 w-[100%] mx-auto bg-[#111] overflow-hidden absolute top-0">
                <div className="drop-menu flex text-[13px] font-bold gap-6">
                    <ul className='hover:opacity-30 transition-all ease-out duration-300'>
                        CASE STUDIES
                    </ul>
                    <div ref={divRef} className='dropdown flex gap-6 h-[20px] overflow-hidden'>
                        <ul className='flex flex-col gap-3'>
                            AREAS OF EXPERTIES
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden mt-2'>
                                <span className='yspan absolute -bottom-5'>🔥 AI & ML</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>FinTech</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>RealEstate</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>E-commerce</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>Web3</span>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            UI UX DESIGN
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden mt-2'>
                                <span className='yspan absolute -bottom-5'>UX Audit</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>UI Design</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>UX Design</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>UX Research</span>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            PRODUCT DESIGN
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden mt-2'>
                                <span className='yspan absolute -bottom-5'>SaaS</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>Web App</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>Mobile App</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>Website Design</span>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            DESIGN PROCESS
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden mt-2'>
                                <span className='yspan absolute -bottom-5'>MVP</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>Relaunch</span>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-3 w-28'>
                            ABOUT AGENCY
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden mt-2'>
                                <span className='yspan absolute -bottom-5'>Our story</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>Clients'Feedback</span>
                            </li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>Careers</span>
                            </li>
                            <li><span> </span></li>
                            <li className='relative h-5 hover:opacity-30 transition-all ease-out duration-300 overflow-hidden'>
                                <span className='yspan absolute -bottom-5'>News & Articles</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mx-auto w-[87%] border-b-[1px] absolute bottom-0"></div>
            </div>


        </nav>
    )
}

export default Navbar
