import { Facebook } from 'expo';

import { auth, firebase } from './init';
import firebaseConfig from './config';

export const loginWithFacebook = async () => {
  console.log(firebaseConfig.auth.facebook.appId);
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    `${firebaseConfig.auth.facebook.appId}`,
    { permissions: ['public_profile'] }
  );

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    return auth.signInWithCredential(credential);
  } else {
    console.log(type);
  }
}

export const logOut = async () => {
  return auth.signOut();
}

export const onAuthStateChanged = auth.onAuthStateChanged.bind(auth);
