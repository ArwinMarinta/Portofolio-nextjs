import React from "react";
import onJourney from "@/assets/company/logo-onjourney.png";
import Image from "next/image";
import OnJouerney1 from "@/assets/company/Screenshot 2025-01-30 012302.jpg";
import OnJouerney2 from "@/assets/company/Screenshot 2025-02-03 173019.jpg";
import Link from "next/link";

const Experince = () => {
  return (
    <main className="w-full flex justify-center bg-DARK" id="Experince">
      <div className="container items-center flex-col mt-16 w-full">
        <div data-aos="fade-left" className="text-white font-bold text-5xl border-b-4 border-RED01 max-w-fit">
          Experince
        </div>
        <ol class="relative border-s border-gray-200  w-full mt-8" data-aos="fade-up">
          <li class="mb-10 ms-6 bg-[#2e3142] py-8 px-8 rounded-md">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-DARK ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z" />
              </svg>
            </span>
            <h3 class="flex items-center mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              <span class=" text-RED01 text-2xl font-medium me-2  py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ">Full Stack Developer</span>
            </h3>
            <h2 class="block mb-2 text-xl font-normal leading-none text-gray-200 ">On-Journey - Internship</h2>
            <h2 class="block mb-2  text-xl leading-none text-gray-200 ">Sep 2024 - Present</h2>
            <h2 class="block mb-2 text-xl leading-none text-gray-200 ">Bali, Indonesia - Remote</h2>
            <ul class="mb-4 text-base font-normal text-white mt-8 ">
              <li>- Building an e-commerce application admin panel that focuses on dashboard features, order management, reports (sales, customer, and product), and coupons management, along with APIs for each feature.</li>
              <li>- Developing affiliate applications that focus on authentication features (login, registration, forgot password, email verification), profile management, dashboard, commission withdrawal management, bank account management, user management, and role management.</li>
            </ul>
            {/* <p class="mb-4 text-base font-normal text-white mt-8">
              - Building an e-commerce application admin panel that focuses on dashboard features, order management, reports (sales, customer, and product), and coupons management, along with APIs for each feature. <br />- Developing affiliate applications that focus on authentication features
              (login, registration, forgot password, email verification), profile management, dashboard, commission withdrawal management, bank account management, user management, and role management.
            </p> */}
            <div className="flex flex-row gap-6">
              <div className="w-25 h-25">
                <Image src={OnJouerney2} alt="" width={500} className="rounded-md" />
              </div>
              <Link href={"https://affiliate.onjourney.id"} className="w-30 h-30">
                <Image src={OnJouerney1} alt="" width={500} className="rounded-md" />
              </Link>
            </div>
          </li>
          {/* <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
          </li>
          <li class="ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          </li> */}
        </ol>
      </div>
    </main>
  );
};

export default Experince;
