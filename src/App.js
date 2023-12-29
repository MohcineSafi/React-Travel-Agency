import React, { Component } from "react";
import Activities from "./Activities";
import Total from "./Total";
import Notification from "./Notification";
import TotalRemise from "./Totalremise";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listeActivite: [

        {
          name: 'Raquettes à neige',
          prix: 300,
          selectionné: true,
          img: '/voyage.png'
        }, {
          name: 'detente et bien etre',
          prix: 400,
          selectionné: false,
          img: '/carte-de-voyage.png'
        }, {
          name: 'patrimoine et culture',
          prix: 250,
          selectionné: false,
          img: '/bagages-de-voyage.png'
        }, {
          name: 'séjour en famille ',
          prix: 660,
          selectionné: false,
          img: '/en-voyageant.png'
        }

      ],
      nombreAdultes: 0,
    };
  }

  handleActivityClick = (activityIndex) => {
    const updatedActivities = [...this.state.listeActivite];
    updatedActivities[activityIndex].selectionné = !updatedActivities[activityIndex].selectionné;
    this.setState({ listeActivite: updatedActivities });
  };

  handleAdultsChange = (event) => {
    const adults = parseInt(event.target.value, 10);
    this.setState({ nombreAdultes: adults });
  };

  render() {
    return (
      <div className="App">
        <h1>Activités Touristiques</h1>
        <div className="cc ">
        <p>Choisissez les éléments à inclure</p>
        <Notification listeactivite={this.state.listeActivite} /></div>
        <Activities listeactivite={this.state.listeActivite} onActivityClick={this.handleActivityClick} />
        <input
          type="number"
          placeholder="Nombre d'adultes"
          onChange={this.handleAdultsChange}
        />
        <Total listeactivite={this.state.listeActivite} />
        <TotalRemise
          listeactivite={this.state.listeActivite}
          nombreadultes={this.state.nombreAdultes}
        />
      </div>
    );
  }
}

export default App;