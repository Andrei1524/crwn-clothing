import { useState } from "react";

import {
  handleAuthSignInWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignInWithGooglePopup = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithEmailAndPassword = async (event) => {
    event.preventDefault();
    try {
      const { user } = await handleAuthSignInWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      console.log(error.code);
      if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        alert("wrong credentials");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>I Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput
          required={true}
          label={"Email"}
          name={"email"}
          value={email}
          type={"email"}
          onChange={handleChange}
        />

        <FormInput
          required={true}
          label={"Password"}
          name={"password"}
          value={password}
          type={"password"}
          onChange={handleChange}
        />

        <div className="grouped-buttons">
          <Button onClick={handleSignInWithEmailAndPassword} type="button">
            Sign In
          </Button>
          <Button
            onClick={handleSignInWithGooglePopup}
            buttonType="google"
            type="button"
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
