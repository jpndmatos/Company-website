"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section 
      ref={ref}
      className=" flex flex-col justify-center items-center min-h-screen pt-[4.5rem]"
      id="About"
    >       
    <div className="rounded-3xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue from-70% to-pink to-100% animate-gradient bg-300% max-w-6xl mx-auto px-8 sm:px-16 div-3d-hover">
      <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-up" data-aos-delay="100">
          <h1 className="h1 mb-12 font-semibold text-white">What is Doppel?</h1>
          <p className="text-xl leading-9 font-normal text-gray-300">At Doppel we develop integrated digital and physical solutions for Cultural Heritage, with a strong focus on 3D Digitalization and interactive digital environments with a team of specialized professionals with a background in Archeology and Heritage, Digital Media and Graphic Design that offers an innovative aproach for Heritage dissemination and education</p>
        </div>
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-16 md:max-w-2xl lg:max-w-none text-center">
          {/* 1 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-pink" width="64" height="64" rx="32" />
              <g transform="translate(16 12) scale(1.5)" strokeWidth="0.1" fill="white" fillRule="evenodd">
                <path className="stroke-current text-white" d="M21.71,7.38,16.62,2.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L17,5.54,11.58,11l-1-1h0a3,3,0,0,0-4.25,0L2.88,13.42A3,3,0,0,0,2,15.55V19a3,3,0,0,0,3,3H8.45a3,3,0,0,0,2.13-.88L14,17.69a3,3,0,0,0,0-4.25l-1-1L18.46,7l1.83,1.83a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,7.38ZM12.6,16.27,9.16,19.71a1,1,0,0,1-.71.29H5a1,1,0,0,1-1-1V15.55a1,1,0,0,1,.29-.71L7.73,11.4a1,1,0,0,1,1.41,0l1,1-.89.9a1,1,0,0,0,0,1.41A1,1,0,0,0,10,15a1,1,0,0,0,.7-.29l.9-.89,1,1A1,1,0,0,1,12.6,16.27Z"/>
              </g>
            </svg>
            <h4 className="h4 font-normal mb-3 text-white">Archeology</h4>
            <p className="text-m text-gray-300 text-center">Consulting and services.</p>
          </div>
          {/* 2 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-pink" width="64" height="64" rx="32" />
              <g transform="translate(16.5 16) scale(2)" strokeWidth="0.1" fill="white" fillRule="evenodd">
                <path className="stroke-current text-white" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
              </g>
            </svg>
            <h4 className="h4 font-normal mb-3 text-white">3D Surveys</h4>
            <p className="text-m text-gray-300 text-center">Photogrammetry and laser scanning.</p>
          </div>
          {/* 3 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-pink" width="64" height="64" rx="32" />
              <g transform="translate(12 14) scale(1.7)" strokeWidth="0.1" fill="white" fillRule="evenodd">
                <path className="stroke-current text-white" d="M23.613 8.143l-7.668-3.856v7.712l7.668-3.855zM8.166 15.857V8.143L.387 4.287V12l7.78 3.857zM.183 3.958a.382.382 0 01.377-.017l7.606 3.771 7.607-3.771a.386.386 0 01.346 0l7.668 3.857a.386.386 0 01.213.345v7.71a.388.388 0 01-.213.346l-7.668 3.86a.389.389 0 01-.562-.345v-7.09l-7.219 3.58a.392.392 0 01-.344 0L.215 12.346A.387.387 0 010 12V4.287a.385.385 0 01.183-.329z"/>
              </g>
            </svg>
            <h4 className="h4 font-normal mb-3 text-white">Virtual reconstruction</h4>
            <p className="text-m text-gray-300 text-center">3D modeling and animation.</p>
          </div>
          {/* 4 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-pink" width="64" height="64" rx="32" />
              <g transform="translate(17 17) scale(1.3)" strokeWidth="0.1" fill="white" fillRule="evenodd">
                <path className="stroke-current text-white" d="M21,1H3A2,2,0,0,0,1,3l.00012,2H23V3A2,2,0,0,0,21,1ZM4.00006,4.00092a1,1,0,1,1,1-1A1,1,0,0,1,4.00006,4.00092ZM7.00012,4a1,1,0,1,1,1-1A1.003,1.003,0,0,1,7.00012,4Z"/>
                <path className="stroke-current text-white" d="M23,9.99939V6H1V20a1.99946,1.99946,0,0,0,2,2H21a1.99946,1.99946,0,0,0,2-2Z"/>
              </g>
            </svg>
            <h4 className="h4 font-normal mb-3 text-white">Interactive applications</h4>
            <p className="text-m text-gray-300 text-center">Web, mobile and augmented reality.</p>
          </div>
          {/* 5 */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-pink" width="64" height="64" rx="32" />
              <g transform="translate(15 14) scale(2.2)" strokeWidth="0.1" fill="white" fillRule="evenodd">
                <path className="stroke-current text-white" d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/> <path d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11zm6.387-5.999H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95H9.673z"/>
              </g>
            </svg>
            <h4 className="h4 font-normal mb-3 text-white">Virtual reality</h4>
            <p className="text-m text-gray-300 text-center">Immersive VR environments.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
