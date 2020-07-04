import React from 'react';

import Rotas from './rotas'
import Navbar from '../components/navbar'
import 'bootswatch/dist/flatly/bootstrap.css'
import Footer from '../components/footer'
import '../css/App.css'
class App extends React.Component {

  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Rotas />
          <Footer />
        </div>
      </div>

    )
  }
}

export default App;