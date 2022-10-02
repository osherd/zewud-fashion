import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../redux/store/cart/cart.action';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../redux/store/cart/cart.selector';
import { CartIconContainer, ItemCount, ShopingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShopingIcon />
      <ItemCount> {cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
