import { useContext } from 'react';
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <div className='card-icon-container' onClick={toggleIsCartOpen}>
      <ShopingIcon className='shoping-icon' />
      <span className='icon-counter'> {cartCount}</span>
    </div>
  );
};

export default CartIcon;