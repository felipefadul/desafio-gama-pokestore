import React, { useState } from 'react';

import * as S from './styled';
import GlobalStyle from '../../styles/global';
import Catalog from '../../components/Catalog';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Store() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const handleAddToCart = (newItem) => {
    const newCart = JSON.parse(localStorage.getItem('cart')) || [];

    let isNewItem = true;
    let totalPrice = newCart[0] ? newCart[0].totalPrice : 0;
    let totalItems = newCart[0] ? newCart[0].totalItems : 0;

    for (let i = 0; i < newCart.length; i++) {
      newCart[i].id === newItem.id ?
        isNewItem = false : isNewItem = true;
      if (isNewItem === false) {
        newCart[i].numberOfItems += 1;
        totalPrice += newCart[i].price;
        totalItems += 1;
        break;
      }
    }

    if (!newCart[0])
      newCart.push(
        {
          totalPrice,
          totalItems
        }
      );
    else {
      newCart[0].totalPrice = totalPrice;
      newCart[0].totalItems = totalItems;
    }

    if (isNewItem) {
      newCart[0].totalPrice += newItem.price;
      newCart[0].totalItems += 1;
      newCart.push(
        {
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          numberOfItems: 1
        }
      );
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
    <>
      <Header cart={cart} clearCart={handleClearCart} />
      <S.StoreContainer>
        <Catalog addToCart={handleAddToCart} />
        <GlobalStyle />
      </S.StoreContainer>
      <Footer />
    </>
  );
}