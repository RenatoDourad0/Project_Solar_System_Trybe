import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets-container">
          {Planets.map((planet, i) => {
            const { name, image } = planet;
            const P = PlanetCard;
            return (
              <P key={ i } planetName={ name } planetImage={ image } />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
