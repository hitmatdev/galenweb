import React, { useState } from 'react'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import heroImage from '../images/hero/heroHome.png';

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Galen Insights</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Harnessing the Power of Data-Driven Negotiations</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
    
                In today's dynamic and competitive landscape of healthcare, the ability to harness and leverage data 
                has become more than just an asset; it's become a necessity.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-2 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={heroImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              As regulations shift and patient needs evolve, healthcare providers are continually faced with the challenge of making informed 
              strategic decisions that ensure both the sustainability of their practices and the wellbeing of their patients. 
              This is where our groundbreaking platform steps in. Built on a solid foundation of cutting-edge technology, data science, and 
              healthcare strategy, our platform is designed to transform the complex, often unstructured world of data into a navigable 
              landscape of actionable insights. It is more than just a tool; it is an empowering ally that ushers in a new era in healthcare 
              contract negotiations and pricing strategies.


             </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Harnessing the Power of Data.</strong> At the heart of our platform is a powerful algorithm 
                    that employs state-of-the-art big data engineering techniques. By transforming raw, 
                    disparate data into a structured format, we lay the foundation for a more in-depth and insightful analysis.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cutting-Edge Analytics.</strong> With advanced analytics, 
                    we offer a strategic edge, providing insightful information regarding procedure coverage, right down to individual physicians.
                    By utilizing this data, 
                    healthcare providers can identify the most cost-effective procedures and price them competitively, 
                    resulting in substantial savings.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Customized Reporting.</strong> One of the key advantages of our platform is the provision of 
                    customized reports. Tailored with up-to-date information to meet the specific needs of each practice,
                     these reports facilitate strategic planning and more informed decision-making.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Our platform doesn't merely save money for healthcare practices; it also empowers them to offer improved patient care. 
              By negotiating better contract terms and identifying cost-effective procedures, healthcare providers can extend their procedure coverage, 
              ensuring patients receive the best possible care while remaining financially viable.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Don't know how to start ? No problem.</h2>
              <p className="mt-6">
              Whether you're a small practice looking to maximize revenue or a larger entity aiming to streamline costs, our platform is designed to empower 
              users of all skill levels. With customizable reports and actionable insights at your fingertips, you can start making data-driven decisions 
              confidently.
              <p>
              <strong>
              So don't worry if you're unsure where to begin. We're here to guide you every step of the way, from the initial setup to mastering the art of 
              data-driven healthcare negotiations. 
              Embark on your journey towards a more prosperous healthcare practice with us today.
                </strong></p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
