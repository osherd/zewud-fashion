import { initializeApp } from 'firebase/app';
import
{
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import
{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRap9k_-1d0IVvjy9XxegtavkZhzICxKo",
  authDomain: "zewud-clothing-db.firebaseapp.com",
  projectId: "zewud-clothing-db",
  storageBucket: "zewud-clothing-db.appspot.com",
  messagingSenderId: "975239074583",
  appId: "1:975239074583:web:8452293059efb482a11d52"
};
const firebaseApp = initializeApp( firebaseConfig );

const provider = new GoogleAuthProvider();

provider.setCustomParameters( {
  prompt: 'select_account',
} );

export const createUserProfileDocument = async ( userAuth, additionalData ) =>
{
  if ( !userAuth ) return;
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, provider );

export const db = getFirestore();

export const createUserDocumentFromAuth = async ( userAuth, additionalInformation = {} ) =>
{
  const userDocRef = await doc( db, 'users', userAuth.uid );
  const userSnapShot = await getDoc( userDocRef );
  if ( !userSnapShot.exists() )
  {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try
    {
      await setDoc( userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      } );

    } catch ( error )
    {
      console.log( `error creating user ${ error }` );
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async ( email, password ) =>
{
  if ( !email || !password ) return;
  return await createUserWithEmailAndPassword( auth, email, password );

};

export const signInWithEmailAndPassword = async ( email, password ) =>
{
  if ( !email || !password ) return;
  return await createUserWithEmailAndPassword( auth, email, password );
};

export const signOutUser = async () => signOut( auth );

export const onAuthStateChangedListener = ( callback ) => onAuthStateChanged( auth, callback );