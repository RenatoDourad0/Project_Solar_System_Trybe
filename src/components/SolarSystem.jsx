import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet, index) => {
          const { name, image } = planet;
          return (
            <PlanetCard key={ index } planetName={ name } planetImage={ image } />
          );
        })}
      </div>
    );
  }
}

export default SolarSystem;
