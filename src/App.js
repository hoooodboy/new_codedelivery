import React from 'react';
import Mainpage from './components/Mainpage';
import Header from './components/Header';
import Introduce from './components/Introduce';
import Devops from './components/Devops';
import Communicate from './components/ Communicate';
import DevelopSpec from './components/DevelopSpec';
import Footer from './components/Footer';

const App = () => {
  return(
    <>
      <Header/>
      <Mainpage/>
      <Introduce/>
      <Devops/>
      <Communicate/>
      <DevelopSpec/>
      <Footer/>
    </>
  )
}

export default App;