import React from 'react'
import Footer from '../components/footer'
import imgHome from '../img/home.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import Navbar from '../components/navbar'
import api from '../serverConnection/api'
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

    render() {
        return (
            <div>
                <Navbar brand="Fabricio Flores Desenhos Realistas" item="Home" />
                <div className="container">
                    <div className="card mb-3">
                        <img className="card-img-top" src={imgHome} alt="Imagem de capa do card" style={{ height: "270px" }} />
                    </div>
                </div>

                <div className="container">
                    <div class="card-deck">
                        {
                            this.state.albuns.map((album) => (
                                <div class="card">
                                    <img class="card-img-top" src={img1} alt="Imagem de capa do card" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{album.titulo}</h5>
                                        {/*<p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>*/}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home