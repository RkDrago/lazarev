"use client"
import gsap from "gsap"
import { useRef } from "react"
export default function Home() {
  const showReelVidRef = useRef(null)
  const track1vid = useRef(null)
  const track2vid = useRef(null)
  const blockbeatVid = useRef(null)
  const pikaVid = useRef(null)


  const handleMouseMove = (e) => {
    console.log(e.target);
    gsap.to(".tracker", {
      x: e.clientX - e.target.getBoundingClientRect().x - 63,
      y: e.clientY - e.target.getBoundingClientRect().y - 87,
      duration: 0.2
    })
  }

  const handleTracker = (e) => {
    gsap.to(".track", {
      x: e.clientX - e.target.getBoundingClientRect().x - 88,
      y: e.clientY - e.target.getBoundingClientRect().y - 88,
      duration: 0.2
    })
  }

  const playVid1 = (e) => {
    track1vid.current.play()
  }

  const pauseVid1 = (e) => {
    track1vid.current.pause()
    track1vid.current.currentTime = 0
  }

  const playVid2 = (e) => {
    track2vid.current.play()
  }

  const pauseVid2 = (e) => {
    track2vid.current.pause()
    track2vid.current.currentTime = 0
  }

  const videoPlay = (e) => {
    showReelVidRef.current.play()
    gsap.to(showReelVidRef.current, {
      transform: "scaleX(100%) scaleY(100%)",
      borderRadius: "0px",
      position: "fixed",
      top: 0,
      duration: 1
    })
  }

  const videoPause = (e) => {
    e.target.pause()
    gsap.to(showReelVidRef.current, {
      transform: "scaleX(75%) scaleY(0)",
      borderRadius: "20px",
      duration: 0.5
    })
  }

  const page8PlayBlock = () => {
    blockbeatVid.current.play()
  }

  const page8PauseBlock = () => {
    blockbeatVid.current.pause()
    blockbeatVid.current.currentTime = 0
  }

  const page8PlayPika = () => {
    pikaVid.current.play()
  }

  const page8PausePika = () => {
    pikaVid.current.pause()
    pikaVid.current.currentTime = 0
  }




  return (
    <>
      <div className="page1 h-[100svh] flex justify-center items-center relative">
        <div className="flex flex-col items-center gap-14">
          <div className="flex items-center flex-col leading-[7svw] gap-8">
            <div className="flex items-center">
              <h1 className="text-[9svw] font-extrabold">AI & ML PR</h1>
              <div className="group flex justify-center items-center w-14 rounded-full hover:w-[107px] hover:h-20 transition-all ease-out duration-700">
                <span className="bg-[#0da34e] hover:bg-[#0da34e] rounded-full flex items-center justify-center transition-all ease-out duration-700">
                  <svg className="rounded-full w-[7vw] h-[7vw] group-hover:rotate-[-385deg] transition-all ease-out duration-700" fill="none" viewBox="0 0 131 136"><path className="g-path" data-morph="end" fill="#fff" d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"></path><path className="g-path" data-morph="start" fill="#fff" d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z" data-original="M65.72 109.14c10.08 0 17.76-3.78 23.04-11.34 5.4-7.68 8.1-17.64 8.1-29.88 0-12.24-2.7-22.2-8.1-29.88-5.28-7.68-12.96-11.52-23.04-11.52-9.96 0-17.7 3.84-23.22 11.52-5.4 7.68-8.1 17.64-8.1 29.88 0 12.12 2.7 22.02 8.1 29.7 5.52 7.68 13.26 11.52 23.22 11.52Zm46.08 7.02c-11.64 12.6-27.06 18.9-46.26 18.9s-34.62-6.3-46.26-18.9C7.76 103.56 2 87.48 2 67.92c0-19.56 5.76-35.64 17.28-48.24C30.92 7.08 46.34.78 65.54.78s34.62 6.3 46.26 18.9c11.64 12.6 17.46 28.68 17.46 48.24 0 19.56-5.82 35.64-17.46 48.24Z"></path></svg>
                  </span>
              </div>
              <h1 className="text-[9svw] font-extrabold">DUCT</h1>
            </div>
            <h1 className="text-[9svw] font-extrabold">DESIGN AGENCY</h1>
          </div>
          <div className="flex flex-col items-center">
            <p>We partner with AI & ML businesses, guiding them from series A </p>
            <p>to series D and beyond with our expertise in </p>
            <div className="flex gap-[6px] items-center">
              <h4 className="border-[1px] border-[#66666859] py-1 px-3 rounded-full">Brand design</h4>
              <h4 className="border-[1px] border-[#66666859] py-1 px-3 rounded-full">User Experience</h4>and
              <h4 className="border-[1px] border-[#66666859] py-1 px-3 rounded-full">Digital Product design</h4>.
            </div>

            <div className="w-[52svw] absolute bottom-0 overflow-hidden">
              <div className="z-10 w-[25%] h-full absolute left-0 bg-gradient-to-r from-[#111]"></div>
              <div className="z-10 w-[25%] h-full absolute right-0 bg-gradient-to-l from-[#111]"></div>
              <div className="flex w-[125svw]">
                <div className="flex gap-12 items-center pr-12 anime">
                  <img className="h-4" src="/imgs/awww.svg" alt="" />
                  <img className="h-12" src="/imgs/rd.svg" alt="" />
                  <img className="h-6" src="/imgs/webby.svg" alt="" />
                  <img className="h-4" src="/imgs/fwa.svg" alt="" />
                  <div className="border-[1px] h-7 border-gray-200"></div>
                  <img className="h-4" src="/imgs/forbes.svg" alt="" />
                  <img className="h-4" src="/imgs/wf.svg" alt="" />
                  <img className="h-6" src="/imgs/pmi.svg" alt="" />
                  <img className="h-4" src="/imgs/adweek.svg" alt="" />
                  <div className="border-[1px] h-7 border-gray-200"></div>
                </div>
                <div className="flex gap-12 items-center pr-12 anime">
                  <img className="h-4" src="/imgs/awww.svg" alt="" />
                  <img className="h-12" src="/imgs/rd.svg" alt="" />
                  <img className="h-6" src="/imgs/webby.svg" alt="" />
                  <img className="h-4" src="/imgs/fwa.svg" alt="" />
                  <div className="border-[1px] h-7 border-gray-200"></div>
                  <img className="h-4" src="/imgs/forbes.svg" alt="" />
                  <img className="h-4" src="/imgs/wf.svg" alt="" />
                  <img className="h-6" src="/imgs/pmi.svg" alt="" />
                  <img className="h-4" src="/imgs/adweek.svg" alt="" />
                  <div className="border-[1px] h-7 border-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page2 h-[100svh] w-[87%] mx-auto mt-28 pb-28 relative flex justify-between border-t-2 border-[#66666859]">
        <div className="left flex flex-col justify-between py-10 h-full w-[30%]">
          <div className="text-sm  font-medium">
            <p>Exclusive insights into</p>
            <p>UI/UX and product design</p>
          </div>
          <div className="text-lg leading-6 -tracking-wide font-medium">
            Being a design studio at the forefront of digital transformation and product design, we take it upon ourselves to drop some knowledge, share insights, let out insider tips, and put our work on full display
          </div>
        </div>
        <div className="right h-full w-[50%]">
          <div onMouseMove={(e) => handleMouseMove(e)} className="group h-40 transition-all ease-out duration-100 flex pt-6 relative">
            <div className="z-[2] w-[65%] text-2xl">
              <h2 className="capitalize">The Gestalt Principles of Design: How Design Forms Visual Perception</h2>
            </div>
            <div className="w-[35%] flex justify-end gap-6 leading-3">
              <h5 className="z-[2] text-gray-400 text-sm">6 min read</h5>
              <img className="z-[1] h-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
            <div className="z-[1] tracker group-[:hover]:size-32 absolute size-0 rounded-full overflow-hidden transition-all ease-out duration-500">
              <img className="h-full object-cover" src="/imgs/visual-prec.webp" alt="" />
            </div>
            <div className="h-full w-full top-0 absolute z-30"></div>
          </div>
          <div onMouseMove={(e) => handleMouseMove(e)} className="group h-40 transition-all ease-out duration-100 flex pt-6 relative border-t-2 border-[#66666859] hover:border-white">
            <div className="z-[2] w-[65%] text-2xl">
              <h2 className="capitalize">Effective Design Principles for Cryptocurrency Trading Interfaces</h2>
            </div>
            <div className="w-[35%] flex justify-end gap-6 leading-3">
              <h5 className="z-[2] text-gray-400 text-sm">3 min read</h5>
              <img className="z-[1] h-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
            <div className="z-[1] tracker group-[:hover]:size-32 absolute size-0 rounded-full overflow-hidden transition-all ease-out duration-500">
              <img className="h-full object-cover" src="/imgs/trading.webp" alt="" />
            </div>
            <div className="h-full w-full top-0 absolute z-30"></div>
          </div>
          <div onMouseMove={(e) => handleMouseMove(e)} className="group h-40 transition-all ease-out duration-100 flex pt-6 relative border-t-2 border-[#66666859] hover:border-white">
            <div className="z-[2] w-[65%] text-2xl">
              <h2 className="capitalize">How to design an AI interface users will trust in 2024?</h2>
            </div>
            <div className="w-[35%] flex justify-end gap-6 leading-3">
              <h5 className="z-[2] text-gray-400 text-sm">5 min read</h5>
              <img className="z-[1] h-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
            <div className="z-[1] tracker group-[:hover]:size-32 absolute size-0 rounded-full overflow-hidden transition-all ease-out duration-500">
              <img className="h-full object-cover" src="/imgs/ai.png" alt="" />
            </div>
            <div className="h-full w-full top-0 absolute z-30"></div>
          </div>
          <div onMouseMove={(e) => handleMouseMove(e)} className="group h-40 transition-all ease-out duration-100 flex pt-6 relative border-t-2 border-[#66666859] hover:border-white">
            <div className="z-[2] w-[65%] text-2xl">
              <h2 className="capitalize">How AI Influences Design and the Reciprocal Impact of UX on AI-Driven Products</h2>
            </div>
            <div className="w-[35%] flex justify-end gap-6 leading-3">
              <h5 className="z-[2] text-gray-400 text-sm">5 min read</h5>
              <img className="z-[1] h-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
            <div className="z-[1] tracker group-[:hover]:size-32 absolute size-0 rounded-full overflow-hidden transition-all ease-out duration-500">
              <img className="h-full object-cover" src="/imgs/ux.webp" alt="" />
            </div>
            <div className="h-full w-full top-0 absolute z-30"></div>
          </div>
        </div>
      </div>
      <div className="page3 h-[100svh] relative">
        <img className="h-full w-full object-center object-none" src="/imgs/showreelthumbnail.webp" alt="" />
        <video loop onClick={(e) => videoPause(e)} ref={showReelVidRef} className="z-40 h-full w-full absolute top-0 object-cover scale-x-75 scale-y-0 rounded-2xl translate-y-64" src="/imgs/showreel.mp4"></video>
        <button onClick={(e) => videoPlay(e)} className="absolute top-[calc(50%-11svw/2)] left-[calc(50%-11svw/2)] flex flex-col items-center hover:gap-2 gap-4 group transition-all ease-out duration-500">
          <img className="h-[11svw]" src="/imgs/play-btn.svg" alt="" />
          <h4 className="text-black bg-white rounded-full py-2 px-4 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all ease-out duration-500">WATCH SHOWREEL</h4>
        </button>
      </div>
      <div className="page4 h-[100svh] bg-white py-28">
        <div className="flex w-[87%] mx-auto">
          <div className="left flex h-[100%] w-full">
            <h2 className="text-5xl font-semibold pr-52 text-black">Success Stories Shaped by Our User Experience Design Agency</h2>
          </div>
          <div className="right flex h-[100%] w-full flex-col gap-16">
            <div className="flex flex-col gap-8">
              <h5 className="uppercase text-sm text-gray-500 font-semibold">Partnership mentality</h5>
              <p className="text-black text-[22px]">Along with taking the lead in designing AI-powered solutions, we embody a partnership mentality. This exact commitment has been the bedrock of our clients&apos; successes. When you choose to collaborate with us, we promise to be right where your audience&apos;s changing desires meet your ambitious business goals. We don&apos;t settle for mediocrity; we strive for excellence in every Figma pixel, every touchpoint, and every UX interaction.</p>
            </div>
            <div className="flex flex-col gap-8">
              <h5 className="uppercase text-sm text-gray-500 font-semibold">result</h5>
              <p className="text-black text-[22px]">That is how we&apos;ve built 50+ sustainable startup products and helped 400+ brands secure millions in funding, achieve successful acquisitions, and establish themselves as globally recognized companies.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page5 h-[100svh] tracking-tighter bg-white">
        <div className="w-[87%] mx-auto flex flex-col gap-3">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between px-6 pb-6 pt-10 h-[40svh] w-[28.5svw] bg-[#eeecec]">
              <div>
                <h2 className="text-7xl text-black">$500M</h2>
                <h5 className="text-sm mt-5 text-black">In funding secured owning to our designs</h5>
              </div>
              <h6 className="text-gray-400 text-sm font-semi-bold">/001</h6>
            </div>
            <div className="flex flex-col justify-between px-6 pb-6 pt-10 h-[40svh] w-[28.5svw] bg-[#eeecec]">
              <div>
                <h2 className="text-7xl text-black">+1 million</h2>
                <h5 className="text-sm mt-5 text-black">Increase in customer base</h5>
              </div>
              <h6 className="text-gray-400 text-sm font-semi-bold">/002</h6>
            </div>
            <div className="flex flex-col justify-between px-6 pb-6 pt-10 h-[40svh] w-[28.5svw] bg-[#eeecec]">
              <div>
                <h2 className="text-7xl text-black">1 000 000+</h2>
                <h5 className="text-sm mt-5 text-black">Of active marketplace users</h5>
              </div>
              <h6 className="text-gray-400 text-sm font-semi-bold">/003</h6>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between px-6 pb-6 pt-10 h-[40svh] w-[28.5svw] bg-[#eeecec]">
              <div>
                <h2 className="text-7xl text-black">25 million</h2>
                <h5 className="text-sm mt-5 text-black">Monthly E-commerce visits</h5>
              </div>
              <h6 className="text-gray-400 text-sm font-semi-bold">/004</h6>
            </div>
            <div className="flex flex-col justify-between px-6 pb-6 pt-10 h-[40svh] w-[28.5svw] bg-[#eeecec]">
              <div>
                <h2 className="text-7xl text-black">+300%</h2>
                <h5 className="text-sm mt-5 text-black">Increase in sign-up conversion rate</h5>
              </div>
              <h6 className="text-gray-400 text-sm font-semi-bold">/005</h6>
            </div>
            <div className="flex flex-col justify-between px-6 pb-6 pt-10 h-[40svh] w-[28.5svw] bg-[#eeecec]">
              <div>
                <h2 className="text-7xl text-black">+42%</h2>
                <h5 className="text-sm mt-5 text-black">Increase in the app&apos;s retention rate</h5>
              </div>
              <h6 className="text-gray-400 text-sm font-semi-bold">/006</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="page6 h-[63svh] tracking-tighter bg-white pt-24 text-black">
        <div className="w-[87%] h-full text-[34px] pl-[25%] mx-auto leading-10">
          <div className="flex">
            <div className="leading-4 text-sm text-black inline-block w-[60%]">Featured digital <br />design project</div>
            <p className="text-black">Our portfolio encompasses a wide range of digital designs essential for the growth</p>
          </div>
          <p className="w-full text-black">of modern businesses. From B2B SaaS and B2C mobile apps to marketing design for promotions, we display our work created for early-stage startups and enterprises at various stages of their growth.</p>
        </div>
      </div>
      <div className="page7 flex flex-col min-h-[100svh] bg-white text-black">
        <div className="flex justify-between w-[87%] mx-auto mb-24">
          <div className="w-[23%] pt-7 hover:border-black border-t-2 border-[#66666859] flex flex-col gap-28 transition-all ease-out duration-75">
            <div className="flex gap-5 items-center">
              <h2 className="text-4xl text-black">Accern. Rhea</h2>
              <img className="h-[14px] invert" src="/imgs/arrow.svg" alt="" />
            </div>
            <p className="text-lg leading-6 text-black">Founded by Accern, a front-runner in No-Code NLP, Rhea stands as a personalized AI Associate designed to streamline FinTech workflows.</p>
          </div>
          <div onMouseMove={(e) => handleTracker(e)} onMouseEnter={playVid1} onMouseLeave={pauseVid1} className="group w-[72%] h-[66svh] relative">
            <div className="h-full w-full top-0 absolute z-30"></div>
            <div className="track flex group-[:hover]:size-44 absolute size-0 bg-[#4f5bff] z-10 rounded-full translate-x-24 transition-all ease-out duration-300 overflow-hidden">
              <h3 className="ml-8 mt-24 uppercase text-sm font-bold">view <br /> case studies</h3>
              <img className="h-[14px] mt-10" src="/imgs/arrow.svg" alt="" />
            </div>
            <video ref={track1vid} muted loop src="/imgs/accern-video.mp4"></video>
          </div>
        </div>
        <div className="flex justify-between w-[87%] mx-auto mb-24">
          <div className="w-[23%] pt-7 hover:border-black border-t-2 border-[#66666859] flex flex-col gap-28 transition-all ease-out duration-75 relative">
            <div className="flex gap-5 items-center">
              <h2 className="text-4xl text-black">AfroTech</h2>
              <img className="h-[14px] invert" src="/imgs/arrow.svg" alt="" />
            </div>
            <p className="text-lg leading-6 text-black">A media and events company that focuses on promoting and highlighting the achievements of Black innovators, entrepreneurs, and technologists.</p>
            <div className="bg-[#4f5bff] py-5 px-12 flex rounded-full items-center absolute bottom-0 gap-3">
              <span>
                <h3 className="uppercase text-sm font-bold">see all case studies</h3>
                <h3 className="uppercase text-sm font-bold hidden">see all case studies</h3>
              </span>
              <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
          </div>
          <div onMouseMove={(e) => handleTracker(e)} onMouseEnter={playVid2} onMouseLeave={pauseVid2} className="group w-[72%] h-[66svh] relative">
            <div className="h-full w-full top-0 absolute z-30"></div>
            <div className="track flex group-[:hover]:size-44 absolute size-0 bg-[#4f5bff] z-10 rounded-full transition-all ease-out duration-300 overflow-hidden">
              <h3 className="ml-8 mt-24 uppercase text-sm font-bold">view <br /> case studies</h3>
              <img className="h-[14px] mt-10" src="/imgs/arrow.svg" alt="" />
            </div>
            <video ref={track2vid} muted loop src="/imgs/afrotech-video.mp4"></video>
          </div>
        </div>
      </div>
      <div className="page8 h-[100svh] bg-white pb-28">
        <div className="w-[87%] mx-auto flex gap-24 justify-end">
          <div onMouseEnter={page8PlayBlock} onMouseLeave={page8PauseBlock} className="relative group w-[28svw] h-[84svh] hover:border-black border-t-2 border-[#66666859]">
            <div className="flex gap-7 items-center pt-6 pb-24 mb-6">
              <h2 className="text-black text-4xl">Blockbeat</h2>
              <img className="invert w-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
            <p className="text-black pb-14 text-lg">AI-powered crypto trading terminal that provides traders with continuously updated, streamlined, and distilled data throughout the day.</p>
            <div className="group-hover:h-[455px] h-[300px] w-full overflow-hidden absolute bottom-0 transition-all ease-out duration-300">
              <video muted loop ref={blockbeatVid} className="absolute group-hover:-bottom-7 -bottom-28 transition-all ease-out duration-300" src="/imgs/blockbeatvid.mp4"></video>
            </div>
          </div>
          <div onMouseEnter={page8PlayPika} onMouseLeave={page8PausePika} className="relative group w-[28svw] h-[84svh] hover:border-black border-t-2 border-[#66666859]">
            <div className="flex gap-7 items-center pt-6 pb-16 mb-6">
              <h2 className="text-black text-4xl">Pika AI</h2>
              <img className="invert w-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
            <p className="text-black pb-14 text-lg">Pika AI is a new and better search engine that harnesses AI technology and helps people find the most relevant and interesting information from across the web.</p>
            <div className="group-hover:h-[455px] h-[300px] w-full overflow-hidden absolute bottom-0 transition-all ease-out duration-300">
              <video muted loop ref={pikaVid} className="absolute group-hover:-bottom-7 -bottom-28 transition-all ease-out duration-300" src="/imgs/pikavid.mp4"></video>
            </div>
          </div>
        </div>
      </div>
      <div className="page9 min-h-[100svh] w-[87%] mx-auto flex flex-col items-center">
        <h2 className="text-white text-7xl font-bold pt-32 pb-24 pl-32">Digital Product <br /> Design Services and <br /> Solutions We Offer</h2>
        <div className="w-[87svw] pt-24 pb-[30svh] flex justify-between border-y-2 border-[#66666859]">
          <div className="left w-[21%] relative">
            <div className="w-full py-6 rounded-full flex justify-center items-center gap-4 bg-[#0da343] sticky top-36">
              <h5 className="text-sm font-bold">BECOME A CLIENT</h5>
              <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
          </div>
          <div className="right w-[72%]">
            <div className="text-[34px] leading-10 pb-24">
              <div className="flex">
                <div className="leading-4 text-sm inline-block w-[32%]">Services</div>
                <p className="">We lead your startup at every step of its <br /> growth, providing unparalleled personal</p>
              </div>
              <p className="w-full ">service at every interaction. Whether it's launching an MVP, revamping an existing product, securing funding with UI prototypes, increasing customer engagement, or boosting conversions, we develop a suite of custom-tailored design services to fulfill your expectations.</p>
            </div>
            <div className="">
              <ul className="pt-6 pb-12 flex flex-col gap-12 border-t-2 border-[#66666859]">
                <div className="flex justify-between">
                  <h2 className="text-5xl font-bold">UI UX Design</h2>
                  <img className="h-[16px]" src="/imgs/arrowdown.svg" alt="" />
                </div>
                <div className="flex">
                  <h4 className="uppercase text-[13px] font-bold border-2 border-[#66666859] py-1 px-3 rounded-full">UX Audit</h4>
                  <h4 className="uppercase text-[13px] font-bold border-2 border-[#66666859] py-1 px-3 rounded-full">UI Design</h4>
                  <h4 className="uppercase text-[13px] font-bold border-2 border-[#66666859] py-1 px-3 rounded-full">UX Design</h4>
                  <h4 className="uppercase text-[13px] font-bold border-2 border-[#66666859] py-1 px-3 rounded-full">UX Research</h4>
                </div>
              </ul>
              <ul className="pt-6 pb-12 flex flex-col gap-12 border-t-2 border-[#66666859]">
                <div className="flex justify-between">
                  <h2 className="text-5xl font-bold">Product Design</h2>
                  <img className="h-[16px]" src="/imgs/arrowdown.svg" alt="" />
                </div>
                <div className="flex">
                  <h4 className="uppercase text-[13px] font-bold border-2 border-[#66666859] py-1 px-3 rounded-full">Website Design</h4>
                  <h4 className="uppercase text-[13px] font-bold border-2 border-[#66666859] py-1 px-3 rounded-full">Mobile App</h4>
                  <h4 className="uppercase text-[13px] font-bold border-2 border-[#66666859] py-1 px-3 rounded-full">Web App</h4>
                  <h4 className="uppercase text-[13px] font-bold border-2 border-[#66666859] py-1 px-3 rounded-full">SaaS</h4>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="page10 min-h-[100svh] w-[87%] mx-auto pb-24">
        <div className="flex flex-col gap-14 py-24">
          <h2 className="capitalize text-center text-white text-sm font-semibold">Industries we serve with <br /> our digital UX design expertise</h2>
          <p className="text-4xl text-center leading-[1.3]">Our industry-specific knowledge and digital product design <br /> expertise contribute to solving the right problems, creating <br /> the right products, and designing the products right.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between p-6 h-[40svh] w-[28.5svw] bg-[#1f1f1f]">
              <div className="flex justify-between">
                <h2 className="text-2xl">Web3</h2>
                <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
              </div>
              <p className="text-[13px] font-semibold">We help long-standing companies reshape and amplify their positions by implementing Web3 technologies. As well as we collaborate with emerging startups to launch innovative web3 products that make a splash in the market.</p>
            </div>
            <div className="flex flex-col justify-between p-6 h-[40svh] w-[28.5svw] bg-[#1f1f1f]">
              <div className="flex justify-between">
                <h2 className="text-2xl">E-commerce</h2>
                <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
              </div>
              <p className="text-[13px] font-semibold">Partnering with with $10M+ revenue brands, we expertly scale and solve their business challenges, offering E-commerce website design & development.</p>
            </div>
            <div className="flex flex-col justify-between p-6 h-[40svh] w-[28.5svw] bg-[#1f1f1f]">
              <div className="flex justify-between">
                <h2 className="text-2xl">Real Estate </h2>
                <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
              </div>
              <p className="text-[13px] font-semibold">We holistically advocate for a convenient user experience and design digital real estate websites to convey the physical world. By creating user-friendly digital design, we refine the way people perceive your property business.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col justify-between p-6 h-[40svh] w-[28.5svw] bg-[#1f1f1f]">
              <div className="flex justify-between">
                <h2 className="text-2xl">FinTech</h2>
                <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
              </div>
              <p className="text-[13px] font-semibold">We design smart, in-demand financial solutions, delighting your audience with innovations in the finance sector. By putting end-users at the forefront and creating a high-end experience, we improve your business metrics.</p>
            </div>
            <div className="flex flex-col justify-between p-6 h-[40svh] w-[28.5svw] bg-[#1f1f1f]">
              <div className="flex justify-between">
                <h2 className="text-2xl">🔥 AI & ML</h2>
                <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
              </div>
              <p className="text-[13px] font-semibold">Designing digital experience for an AI and ML product, we focus on creating unique differentiators to set your product apart. Our expertise lies in developing intuitive UX while also ensuring that the AI models perform optimally with minimal iterations.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex rounded-full size-44 bg-[#0da34e]">
            <h5 className=" ml-9 mt-28 pt-2 text-sm font-bold">LETS TALK</h5>
            <img className="h-[14px] mt-9 ml-4" src="/imgs/arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="page11 min-h-[100svh] bg-white px-24 tracking-tighter">
        <div className=" flex justify-center">
          <h2 className="text-black text-8xl font-bold py-24 pl-32">Digital Product <br /> Design Process</h2>
        </div>
        <div className="flex py-24 justify-between border-y-2 border-[#66666859]">
          <div className="left w-[21%] relative">
            <div className="w-full py-6 rounded-full flex justify-center items-center gap-4 bg-[#4f5bff] sticky top-36">
              <h5 className="text-sm font-bold">BECOME A CLIENT</h5>
              <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
          </div>
          <div className="right w-[72%] pr-80 flex flex-col gap-28">
            <p className="text-black text-2xl">
              We do not take on projects that involve blind conformity or designing out of context. We won't settle for a user interface design that is misaligned with your product and digital strategy. Neither will we launch web development ventures without user testing to validate our design solutions.
            </p>
            <p className="text-black text-2xl">
              Instead, we create scalable digital products that meet the ever-evolving demands of our customers, ensuring long-term sustainability.
            </p>
          </div>
        </div>
        <div className="pb-28 min-h-[65%] flex justify-end">
          <div className="w-[72%] flex">
            <div className="w-[41%]">
              <h5 className="py-5 text-[15px] text-black">Product Strategy</h5>
              <div className="pt-6 flex flex-col gap-[2px]">
                <div className="w-56 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">1</div>
                  <h5 className="text-sm font-semibold">Strategy Workshops</h5>
                </div>
                <div className="w-56 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">2</div>
                  <h5 className="text-sm font-semibold">Idea Validation</h5>
                </div>
                <div className="w-56 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">3</div>
                  <h5 className="text-sm font-semibold">Market Research</h5>
                </div>
                <div className="w-56 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">4</div>
                  <h5 className="text-sm font-semibold">Product Positioning</h5>
                </div>
                <div className="w-56 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">5</div>
                  <h5 className="text-sm font-semibold">UX Research</h5>
                </div>
                <div className="w-56 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">6</div>
                  <h5 className="text-sm font-semibold">Functional Decomposition</h5>
                </div>
              </div>
            </div>
            <div className="w-[19%]">
              <h5 className="py-5 text-[15px] text-black">UX Design</h5>
              <div className="pt-6 flex flex-col gap-[2px]">
                <div className="w-44 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">7</div>
                  <h5 className="text-sm font-semibold">User Flows</h5>
                </div>
                <div className="w-44 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">8</div>
                  <h5 className="text-sm font-semibold">Prototyping</h5>
                </div>
              </div>
            </div>
            <div className="w-[21%]">
              <h5 className="py-5 text-[15px] text-black">UI Design</h5>
              <div className="pt-6 flex flex-col gap-[2px]">
                <div className="w-44 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">9</div>
                  <h5 className="text-sm font-semibold">Moodboards</h5>
                </div>
                <div className="w-44 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">10</div>
                  <h5 className="text-sm font-semibold">Visual Design</h5>
                </div>
                <div className="w-44 p-1 bg-[#111] flex gap-3 items-center rounded-full">
                  <div className="size-7 bg-[#3d3d3d] flex items-center justify-center rounded-full font-semibold">11</div>
                  <h5 className="text-sm font-semibold">Hand-off</h5>
                </div>
              </div>
            </div>
            <div className="w-[19%]">
              <h5 className="py-5 text-[15px] text-black">Delivery</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="page12 min-h-[100svh] w-[87%] mx-auto flex py-[22svh] relative">
        <div className="left flex flex-col gap-12 w-1/2 h-1/3 pr-24 sticky top-36">
          <h4 className="uppercase text-sm font-semibold">Testimonials</h4>
          <h2 className="text-5xl font-bold capitalize pb-10">Clients speak out: what they say about our AI design</h2>
          <p className="text-sm w-2/3 leading-[18px]">Even though the world of the decentralized web is a next-level experience, it has fundamental issues that hinder your project from growing. Having partnered with various Web3 startups, we developed key steps to address each with design.</p>
        </div>
        <div className="right w-1/2">
          <div className="border-t-2 border-[#66666859] flex flex-col gap-9 py-9">
            <h4 className="uppercase text-sm font-semibold">/01</h4>
            <h3 className="text-2xl tracking-tight">&quot;I had the pleasure of working with Maria and Lera backed by the amazing design team at Lazarev, and I cannot recommend them highly enough. From start to finish, they were excellent communicators and made the entire process incredibly smooth.</h3>
            <div className="flex gap-5 py-12">
              <img className="size-16 rounded-full" src="/imgs/nickchapmn.webp" alt="" />
              <div className="">
                <h4 className="font-semibold pb-2 text-lg">Nick Chapman</h4>
                <h6 className="text-sm">Chief Product Officer, Pika AI</h6>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-[#66666859] flex flex-col gap-9 pt-9">
            <h4 className="uppercase text-sm font-semibold">/02</h4>
            <h3 className="text-2xl tracking-tight">&quot;They care about the client and have a deep focus on solving problems efficiently.&quot;</h3>
            <div className="flex gap-5 py-12">
              <img className="size-16 rounded-full" src="/imgs/mathiasson.webp" alt="" />
              <div>
                <h4 className="font-semibold pb-2 text-lg">Jens Mathiasson</h4>
                <h6 className="text-sm">CPO & Co-founder at Fieldstream</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page13 h-[75svh] overflow-hidden border-t-2 border-[#66666859] pl-24 relative">
        <div className="flex w-[87svw] absolute z-10 h-[72%] mt-20">
          <div className="left w-[55%]">
            <div className="flex pb-4">
              <img className="size-[15%] mr-3" src="/imgs/kirill.webp" alt="" />
              <p className="float-left text-[9svw] font-extrabold leading-[110px] tracking-tighter">HAVE</p>
            </div>
            <p className="float-left text-[9svw] font-extrabold leading-none tracking-tighter">
              A PROJECT IN MIND?
            </p>
          </div>
          <div className="right w-[45%] flex flex-col items-end justify-between">
            <img className="w-1/3" src="/imgs/arrow.svg" alt="" />
            <p className="w-2/3 text-end text-lg">Share your project idea with us! Should the partnership vibe not align, we're glad to furnish you with valuable insights that could prove beneficial.</p>
          </div>
        </div>
        <img className="absolute z-0 w-[calc(100%-96px)] -top-[38%] left-36" src="/imgs/bookacall.webp" alt="" />
        <img className="absolute z-0 w-[calc(100%-96px)] h-full" src="/imgs/bookacallfilter.webp" alt="" />
      </div>
      <div className="page14 flex flex-col items-center">
        <h2 className="text-white text-8xl font-semibold pt-32 pb-48 pl-16 capitalize tracking-tighter">Award-winning <br /> product design <br /> agency</h2>
        <div className="w-[87svw] flex justify-between">
          <div className="left w-[21%] relative">
            <div className="w-full py-6 rounded-full flex justify-center items-center gap-4 bg-[#0da343] sticky top-36">
              <h5 className="text-sm font-bold">BECOME A CLIENT</h5>
              <img className="h-[14px]" src="/imgs/arrow.svg" alt="" />
            </div>
          </div>
          <div className="right w-[72%]">
            <p className="text-4xl leading-[1.3] tracking-tighter">Instead of handing off the ready design mock-ups and saying goodbye, we promote your project, build recognition for your brand, and expand your reach when winning international awards. <br /> <br /> Up to 2023, our design team <strong>won 120+ design awards</strong> , some of which had us share the stage with:</p>
            <div className="w-full border-t-[1px] border-dotted border-[#f8f7e8] flex pt-8 mt-8">
              <div className="flex gap-2 pr-3">
                <h2 className="text-4xl tracking-tighter">Google</h2>
                <img className="size-5" src="/imgs/google.svg" alt="" />
              </div>
              <div className="flex gap-2 pr-3">
                <h2 className="text-4xl tracking-tighter">, Netflix</h2>
                <img className="size-5" src="/imgs/netflix.svg" alt="" />
              </div>
              <div className="flex gap-2">
                <h2 className="text-4xl tracking-tighter">, and Spotify</h2>
                <img className="size-5" src="/imgs/spotify.svg" alt="" />
              </div>
            </div>
            <h3 className="text-7xl font-bold mt-[28svh]">Our trophies <br /> up to date:</h3>
            <div className="w-full grid grid-cols-4 gap-[6px] py-24">
              <div className="bg-[#1f1f1f] h-56 p-4 flex justify-center items-center relative">
                <div className="flex flex-col justify-between absolute p-4 w-full h-full">
                  <h5 className="tracking-tighter text-sm font-semibold">[x2]</h5>
                  <h5 className="tracking-tighter text-sm font-semibold">Agency of The Year Nominee</h5>
                </div>
                <img className="w-28" src="/imgs/agencyofyear.svg" alt="" />
              </div>
              <div className="bg-[#1f1f1f] h-56 p-4 flex justify-center items-center relative">
                <div className="flex flex-col justify-between absolute p-4 w-full h-full">
                  <h5 className="tracking-tighter text-sm font-semibold">[x5]</h5>
                  <h5 className="tracking-tighter text-sm font-semibold">The Webby Awards</h5>
                </div>
                <img className="w-28" src="/imgs/webbyaward.svg" alt="" />
              </div>
              <div className="bg-[#1f1f1f] h-56 p-4 flex justify-center items-center relative">
                <div className="flex flex-col justify-between absolute p-4 w-full h-full">
                  <h5 className="tracking-tighter text-sm font-semibold">[x4]</h5>
                  <h5 className="tracking-tighter text-sm font-semibold">FWA Awards</h5>
                </div>
                <img className="w-28" src="/imgs/fwaaward.svg" alt="" />
              </div>
              <div className="bg-[#1f1f1f] h-56 p-4 flex justify-center items-center relative">
                <div className="flex flex-col justify-between absolute p-4 w-full h-full">
                  <h5 className="tracking-tighter text-sm font-semibold">[x34]</h5>
                  <h5 className="tracking-tighter text-sm font-semibold">CSS Design Award</h5>
                </div>
                <img className="w-28" src="/imgs/cssdesignaward.svg" alt="" />
              </div>
            </div>
            <div className="">
              <div className="border-t-2 border-[#66666859] pt-7 pb-16 flex justify-between">
                <h2 className="text-7xl tracking-tighter">2023</h2>
                <div className="flex justify-between w-[40%]">
                  <div className="flex mt-4">
                    <img src="/imgs/logo/1.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/2.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/3.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/4.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/5.svg" alt="" className="invert size-5 mr-3" />
                  </div>
                  <img className="h-[16px]" src="/imgs/arrowdown.svg" alt="" />
                </div>
              </div>
              <div className="border-t-2 border-[#66666859] pt-7 pb-16 flex justify-between">
                <h2 className="text-7xl tracking-tighter">2022</h2>
                <div className="flex justify-between w-[40%]">
                  <div className="flex mt-4">
                    <img src="/imgs/logo/1.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/2.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/3.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/4.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/5.svg" alt="" className="invert size-5 mr-3" />
                  </div>
                  <img className="h-[16px]" src="/imgs/arrowdown.svg" alt="" />
                </div>
              </div>
              <div className="border-t-2 border-[#66666859] pt-7 pb-16 flex justify-between">
                <h2 className="text-7xl tracking-tighter">2021</h2>
                <div className="flex justify-between w-[40%]">
                  <div className="flex mt-4">
                    <img src="/imgs/logo/1.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/2.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/3.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/4.svg" alt="" className="invert size-5 mr-3" />
                    <img src="/imgs/logo/5.svg" alt="" className="invert size-5 mr-3" />
                  </div>
                  <img className="h-[16px]" src="/imgs/arrowdown.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page15 min-h-[100svh] flex flex-col items-center pb-32">
        <h2 className="text-white text-8xl font-semibold pt-60 pb-24 pl-32 ml-4 capitalize tracking-tighter">Frequently Asked <br /> Questions</h2>
        <div className="w-[87%] mx-auto">
          <div className="flex py-11 border-t-2 border-[#66666859]">
            <h3 className="w-full tracking-tighter text-sm font-semibold text-[#666668]">/00-1</h3>
            <div className="w-full flex justify-between">
              <h3 className="w-[90%] text-2xl tracking-tight leading-6 font-bold">How can your digital product design agency help my startup?</h3>
              <img className="h-4" src="/imgs/arrowdown.svg" alt="" />
            </div>
          </div>
          <div className="flex py-11 border-t-2 border-[#66666859]">
            <h3 className="w-full tracking-tighter text-sm font-semibold text-[#666668]">/00-2</h3>
            <div className="w-full flex justify-between">
              <h3 className="w-[90%] text-2xl tracking-tight leading-6 font-bold">Do you offer only digital product design services? </h3>
              <img className="h-4" src="/imgs/arrowdown.svg" alt="" />
            </div>
          </div>
          <div className="flex py-11 border-t-2 border-[#66666859]">
            <h3 className="w-full tracking-tighter text-sm font-semibold text-[#666668]">/00-3</h3>
            <div className="w-full flex justify-between">
              <h3 className="w-[90%] text-2xl tracking-tight leading-6 font-bold">What digital design tools and technologies do you use?</h3>
              <img className="h-4" src="/imgs/arrowdown.svg" alt="" />
            </div>
          </div>
          <div className="flex py-11 border-t-2 border-[#66666859]">
            <h3 className="w-full tracking-tighter text-sm font-semibold text-[#666668]">/00-4</h3>
            <div className="w-full flex justify-between">
              <h3 className="w-[90%] text-2xl tracking-tight leading-6 font-bold">How long does the entire design process take?</h3>
              <img className="h-4" src="/imgs/arrowdown.svg" alt="" />
            </div>
          </div>
          <div className="flex py-11 border-t-2 border-[#66666859]">
            <h3 className="w-full tracking-tighter text-sm font-semibold text-[#666668]">/00-5</h3>
            <div className="w-full flex justify-between">
              <h3 className="w-[90%] text-2xl tracking-tight leading-6 font-bold">How much do you charge for digital product design services?</h3>
              <img className="h-4" src="/imgs/arrowdown.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="page16 h-[75svh] overflow-hidden border-t-2 border-[#66666859] pl-24 relative">
        <div className="flex w-[87svw] absolute z-10 h-[72%] mt-20">
          <div className="left w-[55%]">
            <div className="flex pb-4">
              <img className="size-[15%] mr-3" src="/imgs/kirill.webp" alt="" />
              <p className="float-left text-[9svw] font-extrabold leading-[110px] tracking-tighter">HAVE</p>
            </div>
            <p className="float-left text-[9svw] font-extrabold leading-none tracking-tighter">
              A PROJECT IN MIND?
            </p>
          </div>
          <div className="right w-[45%] flex flex-col items-end justify-between">
            <img className="w-1/3" src="/imgs/arrow.svg" alt="" />
            <p className="w-2/3 text-end text-lg">Share your project idea with us! Should the partnership vibe not align, we're glad to furnish you with valuable insights that could prove beneficial.</p>
          </div>
        </div>
        <img className="absolute z-0 w-[calc(100%-96px)] -top-[38%] left-36" src="/imgs/bookacall.webp" alt="" />
        <img className="absolute z-0 w-[calc(100%-96px)] h-full" src="/imgs/bookacallfilter.webp" alt="" />
      </div>
      <div className="page17 flex flex-col items-center">
        <h2 className="text-white text-7xl font-semibold pt-32 pb-24 pl-64 ml-1 capitalize tracking-tighter">Digital Design Agency <br /> of passionate forerunners, <br /> not followers</h2>
        <div className="w-[87svw] border-y-2 border-[#66666859] flex justify-between py-[13svh]">
          <div className="left w-[21%] relative">
            <img className="size-[120px]" src="/imgs/torotate.svg" alt="" />
          </div>
          <div className="right w-[72%]">
            <div className="text-[34px] leading-10">
              <div className="flex">
                <div className="leading-4 text-sm font-semibold inline-block w-[30%] uppercase">Lazarev.</div>
                <p className="tracking-tighter">The powerhouse of AI tech, creative <br /> audacity, and business mindset. We work</p>
              </div>
              <p className="w-full tracking-tight">with everything digital and help you turn innovative ideas, products, services, and processes into a profitable business and then support you to scale it from pre-seed to series D and beyond.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page18 w-[87%] mx-auto border-b-2 border-[#66666859] flex justify-between pt-12 pb-[32svh]">
        <div className="left w-[55%] flex flex-col items-center text-center">
          <div className="tracking-tighter relative pb-[25svh]">
            <h3 className="text-lg font-semibold">Kirill Lazarev</h3>
            <h5 className="text-sm pb-12 font-semibold text-[#b3b3b6]">Founder of Lazarev.</h5>
            <div className=" flex flex-col items-center">
              <img className="h-7 mb-6" src="/imgs/abouttitle.svg" alt="" />
              <h2 className="text-4xl">Last but not least — we embrace <br /> <span><em>partnership</em></span>mentality</h2>
            </div>
            <img className="size-16 rounded-full border-4 border-black absolute bottom-32 left-[calc(50%-32px)]" src="/imgs/aboutcreatorshort.webp" alt="" />
          </div>
          <div className="flex gap-7">
            <h5 className="w-full">
              <p className="text-lg text-left leading-6 pr-10 tracking-tight">Expect our design company to go through the hell and water of user and market research, product positioning, prototyping, visual design, and user testing up to launching and IPO. Yet, we&apos;re not the type to blindly follow the commands of stakeholders; instead, our product team asks unconventional</p>
            </h5>
            <h5 className="w-full">
              <p className="text-lg text-left leading-6 pr-10 tracking-tight">questions, not restraining ourselves to &quot;what&quot; but getting to &quot;why&quot; and seeking &quot;how&quot;. Our project managers challenge assumptions and push the boundaries of &quot;how it&apos;s done&quot; while our product designers will present you with game-changing alternatives that deliver results.</p>
            </h5>
          </div>
        </div>
        <div className="right w-[32%]">
          <img src="/imgs/aboutcreator.webp" alt="" />
        </div>
      </div>
      <div className="page19 w-[87%] mx-auto border-b-2 border-[#66666859] flex justify-between py-16">
        <div className="w-1/2">
          <h2 className="text-7xl tracking-tighter capitalize font-bold">Have a project <br /> in mind? <br /> Contact us!</h2>
        </div>
        <div className="w-1/3 pb-4">
          <div className="flex relative">
            <h5 className="absolute text-lg font-semibold">Subscribe to our newsletter</h5>
            <input className="bg-[#111] border-b-2 border-[#66666859] tracking-tight text-yellow-500 font-bold outline-none pt-0 pb-8 w-[88%]" type="text" />
            <button className="bg-[#1c1c1c] rounded-full size-14 flex justify-center items-center"><img className="size-3 opacity-60" src="/imgs/arrow.svg" alt="" /></button>
          </div>
          <div className="pt-10">
            <h2 className="uppercase text-[13px] text-[#929294] font-bold pb-4">Drop us a line:</h2>
            <button className="flex items-center gap-2 py-1 px-3 rounded-full border-2 border-[#929294]">
              <img className="size-[14px] opacity-70 invert" src="/imgs/link.svg" alt="" />
              <h5 className="text-[13px] uppercase font-bold">hello@lazarev.agency</h5>
            </button>
          </div>
          <div className="pt-10">
            <h2 className="uppercase text-[13px] text-[#929294] font-bold pb-4">our social:</h2>
            <button className="py-[6px] mr-2 mb-2 px-5 rounded-full border-2 border-[#929294] text-[13px] uppercase font-bold transition-all ease-out duration-300 hover:text-black hover:bg-white">linkedin</button>
            <button className="py-[6px] mr-2 mb-2 px-5 rounded-full border-2 border-[#929294] text-[13px] uppercase font-bold transition-all ease-out duration-300 hover:text-black hover:bg-white">facebook</button>
            <button className="py-[6px] mr-2 mb-2 px-5 rounded-full border-2 border-[#929294] text-[13px] uppercase font-bold transition-all ease-out duration-300 hover:text-black hover:bg-white">instagram</button>
            <button className="py-[6px] mr-2 mb-2 px-5 rounded-full border-2 border-[#929294] text-[13px] uppercase font-bold transition-all ease-out duration-300 hover:text-black hover:bg-white">dribble</button>
            <button className="py-[6px] mr-2 mb-2 px-5 rounded-full border-2 border-[#929294] text-[13px] uppercase font-bold transition-all ease-out duration-300 hover:text-black hover:bg-white">behance</button>
          </div>
        </div>
      </div>
      <div className="page20 w-[87%] mx-auto border-b-2 border-[#66666859] flex justify-between pt-10 pb-16">
        <div className="w-1/2 flex gap-7">
          <div className="text-[13px] font-bold flex flex-col gap-3">
            <h5 className="pb-2 text-[#929294]">AREAS OF EXPERTIES</h5>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">🔥 AI & ML</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">FinTech</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">Real Estate</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">E-commerce</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">Web3</span>
          </div>
          <div className="text-[13px] font-bold flex flex-col gap-3">
            <h5 className="pb-2 text-[#929294]">UI UX DESIGN</h5>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">UX Audit</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">UI Design</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">UX Design</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">UX Reasearch</span>
          </div>
          <div className="text-[13px] font-bold flex flex-col gap-3">
            <h5 className="pb-2 text-[#929294]">PRODUCT DESIGN</h5>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">SaaS</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">Web App</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">Mobile App</span>
            <span className="hover:text-[#929294] transition-all ease-out duration-300 text-sm">Website Design</span>
          </div>
        </div>
        <div className="w-1/3 pb-6">
          <h2 className="uppercase text-[13px] text-[#929294] font-bold pb-4">our location:</h2>
          <h3 className="text-4xl pb-16">630 Mason St. <br /> San Francisco, CA 94108</h3>
          <div className="font-semibold text-sm flex flex-col gap-5">
            <div className="flex gap-2">
              <h5 className="hover:text-[#929294] transition-all ease-out duration-300">Case Studies</h5>
              <h5>•</h5>
              <h5 className="hover:text-[#929294] transition-all ease-out duration-300">Our Story</h5>
              <h5>•</h5>
              <h5 className="hover:text-[#929294] transition-all ease-out duration-300">Clients&apos; Feedback</h5>
              <h5>•</h5>
            </div>
            <div className="flex gap-2">
              <h5 className="hover:text-[#929294] transition-all ease-out duration-300">Careers</h5>
              <h5>•</h5>
              <h5 className="hover:text-[#929294] transition-all ease-out duration-300">News & Articles</h5>
              <h5>•</h5>
              <h5 className="hover:text-[#929294] transition-all ease-out duration-300">Terms of Services</h5>
              <h5>•</h5>
            </div>
            <div className="flex gap-2">
              <h5 className="hover:text-[#929294] transition-all ease-out duration-300">Privacy Policy</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="page21 w-[87%] mx-auto flex justify-between pt-7 pb-16">
        <h5 className="text-sm font-semibold">Lazarev. — Product Design Agency.</h5>
        <div className="w-1/3 flex justify-between">
        <h5 className="text-sm font-semibold">All Rights Reserved</h5>
        <h5 className="text-sm font-semibold">© 2024</h5>
        </div>
      </div>
    </>
  );
}
