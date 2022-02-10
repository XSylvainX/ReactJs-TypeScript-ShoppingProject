import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

// Material Components 
import Item from './items/item';
import Drawer from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import AddShoppingCart from '@mui/icons-material';
import Badge from '@mui/icons-material';

// Styles 

import Wrapper from './App.styles';

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

  const addToCart = (clickableItem: CartItem) => null;

  const removeFromCart = () => null;


  if (isLoading) return <LinearProgress />;

  if (error) return <div>There is a problem</div>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToCart={addToCart} />
          </Grid>
        )
        )}
      </Grid>
    </Wrapper>
  );
}

export default App;
