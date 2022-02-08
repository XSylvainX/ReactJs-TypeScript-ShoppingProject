//import Button from '@mui/core/Button';

// Types

import { CartItem } from '../App';


// Styles

import Wrapper from './item.styles'


type Props = {
    item: CartItem;
    addToCart: (clickableItem: CartItem) => void
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
    </Wrapper>
)