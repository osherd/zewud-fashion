import { Outlet } from 'react-router-dom';
import { ReactComponent as ZewudLogo } from '../../assets/zewud.svg';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/card-dropdown.component';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { selectCurrentUser } from '../../redux/store/user/user.selector';
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <ZewudLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
