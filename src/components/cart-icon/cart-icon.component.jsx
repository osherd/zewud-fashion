import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount, ShopingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShopingIcon />
      <ItemCount> {cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
