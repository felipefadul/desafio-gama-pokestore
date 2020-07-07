import React, { useEffect, useState } from 'react';

import * as S from './styled';
import Product from '../../components/Product';

export default function Store() {
  const [ products, setProducts ] = useState([]);
  
  useEffect(() => {
    let catalog = localStorage.getItem('catalog');
    if (catalog !== null ) {
      catalog = JSON.parse(catalog);
      setProducts(catalog[0]);
    }
  }, []);
  
  return (
      <S.ProductsContainer>
          { 
            products.map(item => (
            <Product 
              key={item.id}
              item={item} />
            ))
          }
      </S.ProductsContainer>
  );
}