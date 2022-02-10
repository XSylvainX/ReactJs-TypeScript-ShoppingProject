

import Button from '@mui/material/Button';

// Types
import { typeCartItem } from '../App';

import { Wrapper } from './CartItem.style';

type Props = {
    item: typeCartItem;
    addToCart: (clickableItem: typeCartItem) => void;
    removeFromCart: (id: number) => void;
}


const CartItem: React.FunctionComponent<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className='information'>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
                <Button
                    size='small'
                    variant='contained'
                    onClick={() => removeFromCart(item.id)}>
                    -
                </Button>
                <Button
                    size='small'
                    variant='contained'
                    onClick={() => addToCart(item)}>
                    +
                </Button>
                <p>{item.amount}</p>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);

export default CartItem;