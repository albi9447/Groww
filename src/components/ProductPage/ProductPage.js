import React from 'react';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductContent from './ProductContent/ProductContent';
import ProductFooter from './ProductFooter/ProductFooter'; 

const ProductPage = () => {
    return (
        <div>
            <ProductHeader />
            <ProductContent />
            <ProductFooter />            
        </div>
      )
    }

export default ProductPage;