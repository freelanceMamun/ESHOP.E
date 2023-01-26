import React, { useState } from 'react';
import From from '../Components/From/From';
import Button from '../Components/Button';
import Input from '../Components/input/Input';
import CurrentPageStatus from '../Components/CurrentPageStatus';
import RegisterSvg from '../Asset/image/SVG/welcome.svg';
import RegisterStyle from '../Styles/Register.module.css';

import { useNavigate } from 'react-router-dom';
import { UserAllStateData } from '../Context/UseContextProvider';
import LoaderSpinner from '../Components/Loader';
import { toast } from 'react-toastify';
const userInitialData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [user, setUser] = useState(userInitialData);
  const { pageCurrent, isLoading, CreateUser } = UserAllStateData();
  const navigate = useNavigate();

  const GoLoginFrom = () => {
    navigate('/login');
    pageCurrent('Login');
  };
  const { name, email, password, confirmPassword } = user;

  const OnChangeEvent = (e) => {
    return setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const OnSubmitUser = (e) => {
    e.preventDefault();
    const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/;

    try {
      if (
        !email.match(pattern) ||
        !name ||
        !email ||
        !password ||
        !confirmPassword
      ) {
        return toast.warning('All field are mandatory to fill 🤯!');
      } else if (password !== confirmPassword) {
        return toast.warning(' confirm password not match !');
      } else if (email && password && name) {
        CreateUser(email, password, name);
        navigate('/');
        return toast.success('submited');
      } else {
        return;
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <div className="Register_user">
      <CurrentPageStatus></CurrentPageStatus>
      {isLoading && isLoading ? (
        <LoaderSpinner></LoaderSpinner>
      ) : (
        <div className="container">
          <div className="row mt-5 mb-5 pt-5">
            <div className="col-lg-6 col-md-12">
              <div className="LoginImgSrc ">
                <img
                  src={RegisterSvg}
                  className="mt-3 pt-2"
                  alt="Login-logo"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex m-auto justify-content-center">
              <div className={`w-75 ${RegisterStyle.RegisterMain}`}>
                <div className="Login_heading mb-3 ">
                  <h3 className="mb-2 fs-2">REGISTER</h3>
                  <p>Please register in order to checkout more quickly</p>
                </div>
                <From
                  onSubmit={OnSubmitUser}
                  className={`${RegisterStyle.RegisterFrom} `}
                >
                  <div className="d-flex flex-column mb-4">
                    <label>Name</label>
                    <Input
                      onChange={OnChangeEvent}
                      value={name}
                      name={'name'}
                      className="form-control p-2"
                      pleaseholder={'Type your name'}
                      type={'text'}
                    ></Input>
                  </div>
                  <div className="d-flex flex-column mb-4">
                    <label>Email</label>
                    <Input
                      value={email}
                      onChange={OnChangeEvent}
                      name={'email'}
                      className="form-control p-2"
                      pleaseholder={'Type your email.com'}
                      type={'text'}
                    ></Input>
                  </div>
                  <div className="d-flex flex-column mb-4">
                    <label>Password</label>
                    <Input
                      value={password}
                      onChange={OnChangeEvent}
                      name={'password'}
                      className="form-control p-2"
                      pleaseholder={'Type your password'}
                      type={'password'}
                    ></Input>
                  </div>
                  <div className="d-flex flex-column mb-4">
                    <label>Confirm Password</label>
                    <Input
                      onChange={OnChangeEvent}
                      name={'confirmPassword'}
                      value={confirmPassword}
                      className="form-control p-2"
                      pleaseholder={'Type your password'}
                      type={'password'}
                    ></Input>
                  </div>

                  <div className={`d-flex gap-2 ${''}`}>
                    <Button title={'Register'}></Button>
                    <Button onClick={GoLoginFrom} title={'Login'}></Button>
                  </div>
                </From>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
