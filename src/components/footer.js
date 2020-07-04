import React from 'react'
import '../css/footer.css'


const footer = () => {
    function link(data) {
        if (data.target.className.includes("instagram")) {
            window.open("https://www.instagram.com/floresdesenhorealista/?hl=pt-br")
        } else if (data.target.className.includes("whatsapp")) {
            window.open("https://api.whatsapp.com/send?phone=5562984184421")
        }

    }
    return (

        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col">
                        <h4>Contato</h4>
                        <ul className="list-unstyled">
                        <a class="fab fa-instagram" onClick={link}></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i class="fab fa-whatsapp" onClick={link}></i>
                        </ul>

                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
       
    )
}

export default footer


           {/* <div className="card">
                <footer className="footer bg-dark text-light text-center">

                <div className="container pt-3 ">

                    <div className="container col-6 col-md-2 justify-content-around  d-flex">

                        <a class="fab fa-instagram" onClick={link}></a>
                        <i class="fab fa-whatsapp" onClick={link}></i>
                        <i class="fab fa-facebook-f"></i>
                    </div>

                </div>

    </footer>
    </div>*/}