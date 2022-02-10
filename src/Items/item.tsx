

import Button from '@mui/material/Button';

// Types
import { typeCartItem } from '../App';


// Styles

import { Wrapper } from './item.styles'


type Props = {
    item: typeCartItem;
    addToCart: (clickableItem: typeCartItem) => void
}


const Item: React.FunctionComponent<Props> = ({ item, addToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        <Button onClick={() => addToCart(item)}>Add to cart</Button>
    </Wrapper>
)

export default Item;
