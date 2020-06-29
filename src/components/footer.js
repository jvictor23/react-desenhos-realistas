import React from 'react'
import '../footer.css'
import { Link } from '@material-ui/core'

export default function footer() {
    function link(data){
       if(data.target.className.includes("instagram")){
            window.open("https://www.instagram.com/floresdesenhorealista/?hl=pt-br")
        }else if (data.target.className.includes("whatsapp")){
            window.open("https://api.whatsapp.com/send?phone=5562984184421")
        }
        
    }
    return (
        <footer className="footer bg-dark text-light text-center">

            <div className="container pt-3 ">

                <div className="container col-6 col-md-2 justify-content-around  d-flex">
                    
                <a class="fab fa-instagram" onClick={link}></a>
                <i class="fab fa-whatsapp" onClick={link}></i>
                <i class="fab fa-facebook-f"></i>
                </div>

            </div>

        </footer>
    )
}

