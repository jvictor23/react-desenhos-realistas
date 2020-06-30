import React from 'react'
import Footer from '../components/footer'
import imgHome from '../img/home.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import Navbar from '../components/navbar'
class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar brand="Fabricio Flores Desenhos Realistas" item="Home"/>
                <div className="container">
                    <div className="card mb-3">
                        <img className="card-img-top" src={imgHome} alt="Imagem de capa do card" style={{ height: "270px" }} />
                    </div>
                </div>

                <div className="container">
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={img1} alt="Imagem de capa do card" />
                        <div class="card-body">
                            <h5 class="card-title">Título do card</h5>
                            <p class="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                            <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={img2} alt="Imagem de capa do card" style={{width:"251", height:"180"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Título do card</h5>
                            <p class="card-text">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>
                            <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={img3} alt="Imagem de capa do card" />
                        <div class="card-body">
                            <h5 class="card-title">Título do card</h5>
                            <p class="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este card tem o conteúdo ainda maior que o primeiro, para mostrar a altura igual, em ação.</p>
                            <p class="card-text"><small class="text-muted">Atualizados 3 minutos atrás</small></p>
                        </div>
                    </div>
                </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home