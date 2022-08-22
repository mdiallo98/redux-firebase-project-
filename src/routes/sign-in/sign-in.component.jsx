import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpFrom from '../../components/sign-up-form/sign-up-form.component';
const SignIn = () => {
  // * functions that will run and allows a user to sign in

  const logUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logUser}>Sign In with google</button>

      <br />
      <SignUpFrom />
    </div>
  );
};
export default SignIn;
