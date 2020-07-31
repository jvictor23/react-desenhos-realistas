import React from 'react'
import Banner from '../img/Banner.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import Navbar from '../components/navbar'
import api from '../serverConnection/api'
import '../css/home.css'
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albuns: []
        }
    }

    componentDidMount() {
        api.get('/get/album')
            .then(res => {
                this.setState({ albuns: res.data })
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    abrirAlbum(album) {
        this.props.history.push('/album/' + album._id, { dadosAlbum: album })
    }

    render() {
        return (
            <div>
                <Navbar brand="Fabricio Flores Desenhos Realistas" item="Home" href="/" />
                <div className="container">
                    <div className="card mb-3">
                        <img className="card-img-top" src={Banner} alt="Imagem de capa do card" style={{ height: "150px" }} />
                    </div>
                </div>

                <div className="container">
                    <div className="card-deck">
                        {
                            this.state.albuns.map((album) => (
                                <div id="card" className="card" onClick={() => this.abrirAlbum(album)}>
                                    <img className="card-img-top" src={album.urlUltimaImagem ? album.urlUltimaImagem : img1} style={{height:"250px"}} alt="Imagem de capa do card" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{album.titulo}</h5>
                                        {/*<p className="card-text"><small className="text-muted">Atualizados 3 minutos atrás</small></p>*/}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className="container">

                </div>              
               
            </div>

        )
    }
}

export default Home