import React from 'react';

import Rotas from './rotas'
import Navbar from '../components/navbar'
import 'bootswatch/dist/flatly/bootstrap.css'
class App extends React.Component{

  render(){
    return(
      <>
        <Rotas/>
    </>
    )
  }
}

export default App;