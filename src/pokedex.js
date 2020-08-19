import React, {Component} from 'react';
import Pokecard from './pokecard';

class Pokedex extends Component {
    static defaultProps = {
       pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying/bug', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'ghost', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
         ]
    };
    render(){
        return (
            <div className="Pokedex">
                {this.props.pokemon.map((p) => <Pokecard key= {p.id} name={p.name} id={p.id}  type={p.type} data={p.base_experience} />)}
            </div>
        );
    }


    
}


export default Pokedex;