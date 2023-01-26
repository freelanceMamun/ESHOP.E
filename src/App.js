import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import { RoutesRouter } from './Routes/Routes';
import Footer from './Components/Footer/Footer';
import WhishList from './Components/whishlist/WhishList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer position="top-center" />
      <main>
        <>
          <WhishList></WhishList>
          <RoutesRouter></RoutesRouter>
        </>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
