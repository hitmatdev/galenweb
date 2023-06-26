import React from 'react';
import Layout from "../components/Layout"

import About from '../components/About';

import ContactCTA from '../components/ContactCTA';


const AboutPage = () => {
  return (
    <Layout>
     
     <About />

     <ContactCTA />

    </Layout>
   
  );
};

export default AboutPage;