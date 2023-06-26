import React from 'react';
import Layout from "../components/Layout"

import Product from '../components/Product';
import ContactCTA from '../components/ContactCTA';

const ProductPage = () => {
  return (
    <Layout> <Product />
    <ContactCTA />
    
    </Layout>
  );
};

export default ProductPage;



