import React from 'react';
import Mainpage from './components/Mainpage';
import Header from './components/Header';
import Introduce from './components/Introduce';

const App = () => {
  return(
    <>
      <Header/>
      <Mainpage/>
      <Introduce/>
    </>
  )
}

export default App;