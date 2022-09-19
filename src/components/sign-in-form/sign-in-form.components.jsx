import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.componnent';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';

const defaultFormFileds = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [formFileds, setFormFileds] = useState(defaultFormFileds);
  const { email, password } = formFileds;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formFileds, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  };
  const resetFormFields = () => {
    setFormFileds(defaultFormFileds);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorect password for email');
          break;
        case 'auth/user-not-found':
          alert('user not found');
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className='sign-up-container'>
      <h2> Already have an account </h2>
      <span>Sigin In </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          required
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          required
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit' buttonType='inverted'>
            Sign In
          </Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
