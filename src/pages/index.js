import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe'
import Process from '../components/Process';
import { Button, Card, CardHeader, CardFooter, Typography, CardBody } from '@material-tailwind/react';
import heroImage from '../images/hero/heroHome2.png';

import {
    CloudArrowUpIcon,
    ArrowLongRightIcon,
    ArrowPathIcon,
    BookmarkIcon,
    EnvelopeIcon,
    DevicePhoneMobileIcon,
    ChatBubbleBottomCenterIcon
  } from "@heroicons/react/24/outline";
import Features from '../components/Features';

  const linksAbout = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const statsAbout = [
    { name: 'Locations', value: '3' },
    { name: 'Partners', value: '10+' },
    { name: 'Data Sources', value: '40' },
    { name: 'Value', value: 'Unlimited' },
  ]

const IndexPage = () => {
  return (
    <div >
      <Header />
      <main class="py-5 pt-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">

        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">Master the Negotiation: Harness the Data</h1>

           <Typography variant="lead" className="py-5">
           With our platform, healthcare providers gain control over their contract negotiations and pricing strategies by leveraging the power of data.            
           Experience a new level of control, make more informed decisions, and drive success in your practice. 

          </Typography>
           

           
           <div className="py-5">
           < Typography variant="small">Connect to us to know more</Typography>
           <div className="flex items-center gap-4 py-5">
           <Button variant="outlined" className="flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Email <EnvelopeIcon strokeWidth={2} className="h-5" />
      </Button>
      <Button className="flex items-center gap-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <DevicePhoneMobileIcon strokeWidth={2} className="h-5 w-5" /> Call 
      </Button>
    
     
    </div>

           </div>

           
          
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto mx-auto rounded-lg "
          />
        </div>
      </div>
    </div>

   
<section>
<Hero></Hero>  




</section> 



<section>

<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Who are we </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          We are a dynamic team blending data science, healthcare strategy, and technology to transform healthcare negotiations. Our mission is to empower healthcare providers with data-driven tools to optimize costs, increase revenue, and improve patient care. We make navigating complex healthcare contracts and pricing strategies seamless, efficient, and profitable.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {linksAbout.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {statsAbout.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
</section>



<section id="features">

  <Features></Features>
</section>

<section id="subscribe">

  <Subscribe></Subscribe>
</section>

<section id="process">

  <Process></Process>
</section>

<section id="footer">

  <Footer></Footer>
</section>


  </main>

    
    </div>
  );
};

export default IndexPage;
