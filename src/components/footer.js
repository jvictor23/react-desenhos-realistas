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
                        <a className="fab fa-instagram" onClick={link}></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fab fa-whatsapp" onClick={link}></i>
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
