import React, { useState } from 'react'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import heroImage from '../images/product/1.jpg';

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
              <p className="text-base font-semibold leading-7 text-indigo-600"> About Us</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bridging Healthcare and Technology</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
    

We are a unique ensemble of seasoned professionals, each contributing a wealth of experience in healthcare, technology, data science, and strategic planning. United by a shared vision, we are committed to revolutionizing the healthcare landscape through the transformative power of data-driven decisions.


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
              Our collective understanding of healthcare operations, including the intricacies of the US healthcare system and the art of negotiation, equips us to address the specific challenges faced by healthcare providers. We leverage this industry knowledge to develop bespoke solutions tailored to meet the distinctive needs of each practice.

Our prowess extends into the realm of technology where we excel in data architecture, engineering, and big data analysis. We harness the power of cutting-edge technology to turn complex, vast data sets into manageable, actionable insights that drive strategic decisions. We are dedicated to keeping our platform at the forefront of industry innovation.

Strategic thinking forms the backbone of our operations. Our experts draw from their extensive experience to devise effective strategies that empower healthcare practices to navigate contract negotiations and optimize pricing strategies. We ensure that our platform delivers not just data, but meaningful, actionable insights that make a tangible difference.

In essence, we are a convergence of innovative minds, bridging the gap between healthcare and technology. Our mission is to empower healthcare providers with the tools and insights they need to thrive in the ever-evolving, data-driven world.

             </p>
          
              <p className="mt-8">
              Our platform doesn't merely save money for healthcare practices; it also empowers them to offer improved patient care. 
              By negotiating better contract terms and identifying cost-effective procedures, healthcare providers can extend their procedure coverage, 
              ensuring patients receive the best possible care while remaining financially viable.
              </p>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
