import React from "react";
import Header from "../components/Header";
import PokemonSelect from "../components/PokemonSelect";
import PokemonDetail from "../components/PokemonDetail";

class PokemonContainer extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          pokemons: [],
          selectedPokemonName: '',
          selectedPokemon: null
      };
      
      this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    const url = "http://pokeapi.co/api/v2/pokemon/?limit=964";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({pokemons: data.results}))
  }

  handlePokemonSelected(name){

    const selectedPokemon = this.state.pokemons.find(pokemon => {
      return pokemon.name === name;
    });

    const url = selectedPokemon.url;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({selectedPokemon: data}))
  }

  render(){

    return (
      <div>
        <Header />

        <PokemonSelect 
          pokemons={this.state.pokemons}
          onPokemonSelected={this.handlePokemonSelected}
        />
        <PokemonDetail 
          pokemon={this.state.selectedPokemon}
        />
      </div>
    );
  }
}
export default PokemonContainer;