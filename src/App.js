import React from 'react';
import Mainpage from './components/Mainpage';
import Header from './components/Header';
import Introduce from './components/Introduce';
import Devops from './components/Devops';

const App = () => {
  return(
    <>
      <Header/>
      <Mainpage/>
      <Introduce/>
      <Devops/>
    </>
  )
}

export default App;