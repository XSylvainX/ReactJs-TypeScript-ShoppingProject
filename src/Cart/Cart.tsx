import CartItem from "../Cartitem/CartItem"

//Styles
import { Wrapper } from "./Cart.style";

//Types

import { typeCartItem } from "../App";


type Props = {
    cartItems: typeCartItem[];
    addToCart: (clickableItem: typeCartItem) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FunctionComponent<Props> = ({ cartItems, addToCart, removeFromCart }) => {


    //calculate total 

    const calculateTotal = (items: typeCartItem[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0);




    return (
        <Wrapper>
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? <p>There is no items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}

            <h2>Total : €{calculateTotal(cartItems).toFixed(2)} </h2>
        </Wrapper>
    )
}


export default Cart 