import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

// Material Components 

import Drawer from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material';
import AddShoppingCart from '@mui/icons-material';
import Badge from '@mui/icons-material';

// Styles 

import { Wrapper } from './App.styles';

// Types

export type CartItem = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string
}


const getProducts = async (): Promise<CartItem[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json()



const App = () => {


  const { data, isLoading, error } = useQuery<CartItem[]>(
    'products',
    getProducts);

  console.log(data);

  const getTotalItems = () => null;

  const addToCart = () => null;

  const removeFromCart = () => null;


  if (isLoading) return <LinearProgress />;

  if (error) return <div>There is a problem</div>

  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
