import type { NextPage } from 'next';
import Header from '../MenuDrinks/Components/Header';
import Footer from '../MenuDrinks/Components/Footer';
import Data from '../MenuDrinks/Components/Data';
import MenuButtons from '../MenuDrinks/Components/Buttons/MenuButtons'
import Logo from '../MenuDrinks/Components/Logo'; 
import React from 'react';


const Home: NextPage = () => {
  return (
    <div className="m-0 text-center text-white font-body">
      <Header />
      <MenuButtons />
      <Logo />
      <Data />
      <Footer />
    </div>
  )
}

export default Home