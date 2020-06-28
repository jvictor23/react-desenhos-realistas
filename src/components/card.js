import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="card" style={{margin:"50px"}}>
                <h3 className="card-header" style={{textAlign:"center", backgroundColor:"#FFFFFF"}}>{this.props.title}</h3>
                    <div className="card-body" style={{backgroundColor:"#FFFFFF"}}>
                         {this.props.children}
                    </div>
            </div>
        )
    }
}

export default Card