import React, { Component } from "react";

// CSS
import "./App.css";

//components
import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from "./components/Card";
import recettes from "./recettes";

//firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {},
  };

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  majRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecette
    this.setState({ recettes })
  }

  supprimerRecette = key => {
    const recettes = { ...this.state.recettes }
    recettes[key] = null
    this.setState({ recettes })

  }

  chargerExemple = () => this.setState({ recettes });

  render() {
    const cards = Object.keys(this.state.recettes).map((key) => (
      <Card key={key} details={this.state.recettes[key]} />
    ));

    return (
      <div className="box">
        <Header pseudo={this.state.pseudo} />
        <div className="cards">{cards}</div>
        <Admin 
          pseudo={this.state.pseudo}
          recettes={this.state.recettes}
          majRecette ={this.majRecette}
          ajouterRecette={this.ajouterRecette}
          supprimerRecette={this.supprimerRecette}
          chargerExemple={this.chargerExemple}></Admin>
      </div>
    );
  }
}

export default App;
