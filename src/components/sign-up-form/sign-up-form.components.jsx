import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.componnent';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';

const defaultFormFileds = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFileds, setFormFileds] = useState(defaultFormFileds);
  const { displayName, email, password, confirmPassword } = formFileds;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formFileds, [name]: value });
  };
  const resetFormFields = () => {
    setFormFileds(defaultFormFileds);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('password do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email already in use');
      } else {
        console.log(`user creation encounterd an error ${error}`);
      }
    }
  };
  return (
    <div className='sign-up-container'>
      <h2> Don't have an account? </h2>
      <span>Sigin Up </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          required
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
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
        <FormInput
          label='Confirm Password'
          required
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit' buttonType=''>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
