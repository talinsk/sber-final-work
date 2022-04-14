import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      {/*<Card/>*/}
      {/*dataCards*/}
      <Main/>
      <Footer/>
    </div>
  )
}
export default App;