import React from 'react'
import Navbar from '../components/navbar'
import FomrGroup from '../components/form-group'
import img1 from '../img/img1.png'
import api from '../serverConnection/api'
class Album extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imagens: [],
            imgExpanded: '',
            tituloPagina:''
        }
    }

    componentDidMount() {
        

       api.get('/get/album/'+this.props.match.params.id)
       .then(res=>{
        document.title = "Album - " + res.data.titulo;
        this.setState({tituloPagina: res.data.titulo});
       })
       .catch(error=>{
           console.log(error)
       })
        api.get('/get/post/img/' + this.props.match.params.id)
            .then(res => {
                this.setState({ imagens: res.data })
               // console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChangeHandler = event => {
        this.setState({
            uploadImagem: event.target.files[0],
            loaded: 0
        })
    }

    abrirImagem = (album) => {
        this.setState({ imgExpanded: album.url })
    }

    render() {
        return (
            <div>
                <Navbar brand={"Album - " + this.state.tituloPagina} item="Home" />
           
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div class="modal-content">
                            <img src={this.state.imgExpanded}/>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="card-columns" style={{ marginTop: "10px" }}>
                        {this.state.imagens.length === 0 ? <div className="text-left">Nenhum imagem foi adicionada!</div> :
                            this.state.imagens.map((imagem) => (
                                <div id="card" className="card" key={imagem._id} type="button" data-toggle="modal" data-target=".bd-example-modal-lg" onClick={() => this.abrirImagem(imagem)}>
                                    <img className="card-img-top" src={imagem.url} alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{imagem.titulo}</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        )
    }
}

export default Album