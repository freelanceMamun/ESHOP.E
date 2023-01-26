import React, { useEffect } from 'react';
import { useContext, createContext, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { Auth } from '../Firebase/Firebase';
import { toast } from 'react-toastify';

export const UserContext = createContext();

export const UseContextProvider = ({ children }) => {
  const [users, setUsers] = useState({});
  const [products, setProdcuts] = useState(null);

  // OffsetState
  const [show, setShow] = useState(false);
  //  loging State

  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentpage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /// shoping cart  data
  let shopingCart = JSON.parse(localStorage.getItem('Card') || '[]');
  let wishlistCart = JSON.parse(localStorage.getItem('wishlist') || '[]');

  /// shopingCart data function

  const pages = localStorage.getItem('page');
  const pageCurrent = (text) => {
    setCurrentpage(text);
    localStorage.setItem('page', text);
  };

  /// Auth User
  // Sign in user emain or password
  const SingInUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  // Create User

  const CreateUser = async (email, password, name) => {
    try {
      if (email && password && name) {
        const { user } = await createUserWithEmailAndPassword(
          Auth,
          email,
          password
        );
        await updateProfile(user, {
          displayName: name,
        });
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const Logout = () => {
    setUsers(null);
    return signOut(Auth);
  };

  useEffect(() => {
    const unSubScribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        setUsers(currentUser);
      } else {
        setUsers(null);
      }
    });
    return () => {
      unSubScribe();
    };
  }, []);

  /// SignIn Google Authprovider
  const Provider = new GoogleAuthProvider();
  const goolgeAuth = async () => {
    try {
      if (!users) {
        const {
          user: { providerData },
        } = await signInWithPopup(Auth, Provider);

        localStorage.setItem('GoogleSignIn', JSON.stringify(providerData[0]));
        setUsers(providerData[0]);
      } else {
        console.log('Sign Faild by google !');
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const AlartMessage = (text) => {
    if (!users) {
      return toast.warning('Please Sign in here!');
    }
  };

  const addToCart = (image, price, titleCart, id) => {
    const productOpject = {
      img: image,
      price: price,
      title: titleCart,
      id: id,
      quantity: 1,
      priceIncress: price,
    };
    shopingCart.push(productOpject);
    localStorage.setItem('Card', JSON.stringify(shopingCart));
  };

  /// increment product

  const increment = (id) => {
    let filter = shopingCart.find((cart) => cart.id === id);
    if (filter === undefined) {
      shopingCart.push({
        ...filter,
      });
    } else {
      filter.quantity += 1;
      filter.priceIncress = filter.price * filter.quantity;
    }
    localStorage.setItem('Card', JSON.stringify(shopingCart));
  };

  const discrement = (id) => {
    let filter = shopingCart.find((cart) => cart.id === id);
    if (filter === undefined) return;
    else if (filter.quantity === 1 && filter.priceIncress === filter.price) {
      return;
    } else {
      filter.quantity -= 1;
      filter.priceIncress = filter.priceIncress - filter.price;
    }

    localStorage.setItem('Card', JSON.stringify(shopingCart));
  };

  // get products demo rest api

  useEffect(() => {
    const getStoreProducts = async () => {
      try {
        const data = await fetch(
          'https://api.escuelajs.co/api/v1/products'
        ).then((data) => data.json());
        setProdcuts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    return () => {
      getStoreProducts();
    };
  }, []);

  /// Addwishlist

  const addWishList = (image, price, titleCart, id) => {
    const productOpject = {
      img: image,
      price: price,
      title: titleCart,
      id: id,
      quantity: 1,
      priceIncress: price,
    };
    wishlistCart.push(productOpject);
    localStorage.setItem('wishlist', JSON.stringify(wishlistCart));
  };

  return (
    <UserContext.Provider
      value={{
        show,
        handleShow,
        handleClose,
        pageCurrent,
        currentPage,
        pages,
        setIsLoading,
        isLoading,
        Logout,
        goolgeAuth,
        CreateUser,
        SingInUser,
        users,
        AlartMessage,
        products,
        setProdcuts,
        addToCart,
        shopingCart,
        increment,
        discrement,
        addWishList,
        wishlistCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAllStateData = () => {
  return useContext(UserContext);
};
