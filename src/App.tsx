import { useState } from 'react';
import { useQuery } from 'react-query';

// Material Components 
import Item from './Items/item';
import Cart from './Cart/Cart'


import Drawer from '@mui/material/Drawer';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

// Styles 

import { Wrapper, ButtonStyle } from './App.styles';

// Types

export type typeCartItem = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number
}


const getProducts = async (): Promise<typeCartItem[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json()



const App = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as typeCartItem[]);
  const { data, isLoading, error } = useQuery<typeCartItem[]>(
    'products',
    getProducts);

  console.log(data);

  const getTotalItems = (items: typeCartItem[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);


  const addToCart = (clickableItem: typeCartItem) => {
    setCartItems(prev => {
      // item already in the cart ?
      const itemInCard = prev.find(item => item.id === clickableItem.id)

      if (itemInCard) {
        return prev.map(item =>
          //if exist update item
          item.id === clickableItem.id ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      // item added first time
      return [...prev, { ...clickableItem, amount: 1 }]

    })
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((acc, item) => {
        // check item id
        if (item.id === id) {
          // if item amount = 1 return acc otherwise return new array soustract by 1
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as typeCartItem[])
    );
  };


  if (isLoading) return <LinearProgress />;

  if (error) return <div>There is a problem</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      </Drawer>
      <ButtonStyle onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </ButtonStyle>
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
