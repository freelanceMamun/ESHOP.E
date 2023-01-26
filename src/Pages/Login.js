import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import From from '../Components/From/From';
import Input from '../Components/input/Input';
import Button from '../Components/Button';
import LoginStyle from '../Styles/login.module.css';

import { UserAllStateData } from '../Context/UseContextProvider';
import LoginSvg from '../Asset/image/SVG/submit.svg';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import CurrentPageStatus from '../Components/CurrentPageStatus';
const Login = () => {
  const { pageCurrent, setIsLoading, SingInUser, goolgeAuth, users } =
    UserAllStateData();
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  const navigate = useNavigate();
  const OnEmailchange = (e) => {
    setEmail(e.target.value);
  };
  const OnPassowordchange = (e) => {
    setPasword(e.target.value);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        await SingInUser(email, password);
        navigate('/');
        return toast.success('congratulations! 🤗');
      } else {
        return toast.error('All field are mandatory to fill!');
      }
    } catch (error) {
      console.log(error);
      return toast.error(error.message);
    }
  };

  const GoRegister = () => {
    if (email === '' || password === '') {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      pageCurrent('Register');
      navigate('/register');
    } else {
      navigate('/register');
      pageCurrent('Register');
    }
  };

  const GooleSign = () => {
    goolgeAuth();
  };

  return (
    <div className="Login_user">
      <CurrentPageStatus></CurrentPageStatus>
      <div className="container">
        <div className="row mt-5 mb-5 pt-5">
          <div className="col-lg-6 col-md-12">
            <div className="LoginImgSrc m-auto w-75">
              <img src={LoginSvg} alt="Login-logo"></img>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex m-auto justify-content-center">
            <div className={`${LoginStyle.LoginFromMain} w-75`}>
              <div className="Login_heading mb-3 ">
                <h3 className="mb-2 fs-2">LOGIN</h3>
                <p>Enter your credentials to acces your account.</p>
              </div>
              <From
                onSubmit={onSubmitLogin}
                className={` ${LoginStyle.LoginFrom}`}
              >
                <div
                  onClick={GooleSign}
                  type="button"
                  className="btn w-100 p-2 mb-2 mt-2   SignIn_googleButton"
                >
                  <FcGoogle className="fs-4 me-2"></FcGoogle>
                  Sign in with Google
                </div>
                <div className="d-flex mt-3 justify-content-center gap-1 align-items-center text-center">
                  <span className="SignIn_bar__HbWbO"></span>
                  <p
                    style={{
                      color: '#636071bd',
                    }}
                  >
                    or Login in with Email
                  </p>
                  <span className="SignIn_bar__HbWbO"></span>
                </div>

                <div className="d-flex flex-column mb-4">
                  <label>Email</label>
                  <Input
                    onChange={OnEmailchange}
                    value={email}
                    className="form-control p-2"
                    pleaseholder={'Type your email.com'}
                    type={'text'}
                  ></Input>
                </div>
                <div className="d-flex flex-column mb-4">
                  <label>Password</label>
                  <Input
                    onChange={OnPassowordchange}
                    value={password}
                    className="form-control p-2"
                    pleaseholder={'Type your password'}
                    type={'password'}
                  ></Input>
                </div>
                <div className={`d-flex gap-2 ${LoginStyle.SubmitBtn}`}>
                  <Button title={'Login'} onClick={onSubmitLogin}></Button>
                  <Button
                    onClick={() => GoRegister()}
                    title={'Register'}
                  ></Button>
                </div>
              </From>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
