import React from 'react'
import Navbar from '../components/navbar'
import FomrGroup from '../components/form-group'
import img1 from '../img/img1.png'
class GerenciadorImagem extends React.Component {

    abrirModal = () => {

        return <div>

        </div>

    }

    render() {
        return (
            <div>
                <Navbar brand="Gerenciador de Imagens" item={<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ExemploModalCentralizado">Criar Album</button>} />
                <div className="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalCentralizado">Criar Album</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <FomrGroup label="Titulo" htmlfor="tituloAlbum  ">
                                    <input type="text" className="form-control" placeholder="Digite o titulo do album" />
                                </FomrGroup>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-success">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="card-columns" style={{ marginTop: "10px" }}>

                        <div className="">
                            
                            <div id="card" className="card" onClick={this.abrirGerenciamentodeImagens}>
                                <img className="card-img-top" src={img1} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Super Herois</h5>
                                    
                                </div>
                            </div>
                           
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default GerenciadorImagem