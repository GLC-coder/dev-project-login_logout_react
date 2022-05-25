import React, { useState, useEffect, useReducer, useContext, useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AutheContext from "../../state/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return {
      emailValue: action.value,
      emailIsValid: action.value.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      emailValue: state.emailValue,
      emailIsValid: state.emailValue.includes("@"),
    };
  }
  return {
    emailValue: " ",
    emailIsValid: false,
  };
};
const initailEmailState = {
  emailValue: "",
  emailIsValid: undefined,
};

const pswReducer = (state, action) => {
  if (action.type === "PSW_INPUT") {
    return {
      pswValue: action.value,
      pswIsValid: action.value.trim().length > 6,
    };
  }
  if (action.type === "PSW_BLUR") {
    return {
      pswValue: state.pswValue,
      pswIsValid: state.pswValue.trim().length > 6,
    };
  }
  return { pswValue: "", pswIsValid: false };
};

const initialPswState = {
  pswValue: "",
  pswIsValid: undefined,
};

const Login = (props) => {
  const [emailState, emailDispatch] = useReducer(
    emailReducer,
    initailEmailState
  );
  const [pswState, pswDispatch] = useReducer(pswReducer, initialPswState);
  const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(AutheContext);
  const emailRef = useRef();
  const pswRef = useRef();

  const { emailIsValid } = emailState;
  const { pswIsValid } = pswState;

  useEffect(() => {
    const identified = setTimeout(() => {
      setFormIsValid(emailIsValid && pswIsValid);
    }, 1000);
    return () => {
      clearTimeout(identified);
    };
  }, [emailIsValid, pswIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({ type: "INPUT_EMAIL", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    pswDispatch({ type: "PSW_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    pswDispatch({ type: "PSW_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogIn(emailState.emailValue, pswState.pswValue);
    } else if (!emailIsValid) {
      emailRef.current.focus()
    } else {
      pswRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailState.emailIsValid}
          type="email"
          id="email"
          label="email"
          value={emailState.emailValue}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailRef}
        />
        <Input
          isValid={pswState.pswIsValid}
          type="password"
          id="password"
          label="password"
          value={pswState.pswValue}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={pswRef}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
