import React from 'react';
import Mainpage from './components/Mainpage';
import Header from './components/Header';
import Introduce from './components/Introduce';
import Devops from './components/Devops';
import Communicate from './components/ Communicate';
import DevelopSpec from './components/DevelopSpec';
import Footer from './components/Footer';
import Lms from './components/Lms';
import LogisticsManagement from './components/LogisticsManagement';

const App = () => {
  return(
    <>
      <Header/>
      <Mainpage/>
      <Introduce/>
      <Lms/>
      <LogisticsManagement/>
      <Devops/>
      <Communicate/>
      <DevelopSpec/>
      <Footer/>
    </>
  )
}

export default App;