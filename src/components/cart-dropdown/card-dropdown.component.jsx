import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.componnent';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMassage,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMassage>Your cart is empty</EmptyMassage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
