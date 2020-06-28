import React from 'react'
import NavbarItem from './navbarItem'
function Navbar(props) {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor:"#EEEDEC"}}>


                <a className="navbar-brand" href="#"><i className="fas fa-stroopwafel"></i>&nbsp;Desenhos Realistas</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarMainToggler"
                    aria-controls="navbarMainToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbarMainToggler">
                    <div className="navbar-nav ml-auto">
                        <NavbarItem href="/" label="Home" />
                        <NavbarItem href="/login" label="Login" />
                        <NavbarItem href="/cadastro-usuario" label="Cadastro" />
                    </div>

                </section>

            </nav>
        </div>
    )
}

export default Navbar