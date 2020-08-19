import React, {Component} from 'react';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


class Pokecard extends Component {


    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className="Pokecard">
                <h3>{this.props.name}</h3>
                <img src={imgSrc} alt={this.props.name} />
                <p><strong>Type:</strong> {this.props.type}</p>
                <p><strong>Exp:</strong> {this.props.data}</p>
            </div>
        )
    }

}

export default Pokecard;