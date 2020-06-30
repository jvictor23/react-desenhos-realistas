import React from 'react'
import Navbar from '../components/navbar'
import img1 from '../img/img1.png'
import '../css/admin.css'
class Home extends React.Component {

    pegarArquivos(){
       
    }

    render() {
        return (
            <div>
                <Navbar brand="Fabricio Flores Desenhos Realistas" item="Home" />
                <div className="container text-center">

                    <div style={{ marginTop: "10px" }}>

                        <div className="card-deck">
                            
                            <div id="card" className="card" onClick={this.pegarArquivos}>
                                <img className="card-img-top" src={img1} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Adicionar Imagem</h5>
                                    
                                </div>
                            </div>

                            <div id="card" className="card">
                                <img className="card-img-top" src={img1} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Ver todas imagem</h5>
                                </div>
                            </div>

                            <div  className="card" style={{backgroundColor:"gray"}}>
                                <img className="card-img-top" src={img1} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Adicionar VideoAulas</h5>
                                </div>
                            </div>
                           
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default Home;