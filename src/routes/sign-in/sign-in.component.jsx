import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logUser}>Sign In with google</button>
    </div>
  );
};
export default SignIn;
