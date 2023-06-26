import React, { useState } from 'react'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import ProductImage from '../images/product/3.jpg';

const features = [
  {
    name: 'Data Sources.',
    description:
      'We connect to all major healthcare data sources and extract the data you need to make better decisions.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Analytics.',
    description: 'We provide you with the best analytics to help you make better decisions.',
    icon: LockClosedIcon,
  },
  {
    name: 'Reports.',
    description: 'We provide you customized reports to help you make better decisions.',
    icon: ServerIcon,
  },
]

export default function Product() {
  return (
    
    <div>
    <div className="overflow-hidden bg-white py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Faster decision</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We are Galen Insights</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform serves as a transformative catalyst in the healthcare sector, turning the tide in favor of healthcare providers in a previously uncertain and complex negotiation landscape. It presents a fresh perspective on how data can be harnessed effectively to drive strategic decisions, ushering in a new era of data-driven healthcare practices.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={ProductImage}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  


</div>

  )
}
