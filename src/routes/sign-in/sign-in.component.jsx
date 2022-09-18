import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

const SignIn = ()=>{
  const logGoogleUser = async ()=> {
    try {
       const {user} = await signInWithGooglePopup();
      const userDoc = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
   
  }
  return (
    <div>
      <h1> Sign In Page</h1>
      <button onClick={logGoogleUser}>
        sign in with google
      </button>
    </div>
  )
}


export default SignIn;