import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils'


const SignIn = () => {
  const logGoogleuser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleuser}>
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn;