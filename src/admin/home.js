import React from 'react'
import Navbar from '../components/navbar'
import img1 from '../img/img1.png'
import '../css/admin.css'
import {withRouter} from 'react-router-dom'

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nomeUsuario:''
        }
    }

    componentDidMount(){
        const usuarioLogado = JSON.parse(localStorage.getItem("_usuarioLogado"))
        console.log(usuarioLogado.user.nome)
        this.setState({nomeUsuario: usuarioLogado.user.nome+" "+ usuarioLogado.user.sobrenome})
    }

    abrirGerenciamentodeImagens = ()=>{
       this.props.history.push('/admin/gerenciador-album');
    }

    deslogarUsuario = () =>{
        localStorage.removeItem("_usuarioLogado");
    }

    render() {
        return (
            <div>
                <Navbar brand="Fabricio Flores Desenhos Realistas" item={
                    <ul className="nav navbar-nav navbar-right">
                    <a>{this.state.nomeUsuario}</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><a href="/admin" onClick={this.deslogarUsuario}>Sair</a></li>
                  </ul>
                }/>
                <div className="container">

                    <div className="card-columns" style={{ marginTop: "10px" }}>

                        <div className="">
                            
                            <div id="card" className="card" onClick={this.abrirGerenciamentodeImagens}>
                                <img className="card-img-top" src={img1} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Gerenciar Imagem</h5>
                                    
                                </div>
                            </div>

                            <div  className="card" style={{backgroundColor:"gray"}}>
                                <img className="card-img-top" src={img1} alt="Imagem de capa do card" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Gerenciar VideoAulas</h5>
                                </div>
                            </div>
                           
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default withRouter(Home)