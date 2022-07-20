import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((mission, i) => {
            const { name: n, year: y, country: c, destination: d } = mission;
            const M = MissionCard;
            return (
              <M key={ i } name={ n } year={ y } country={ c } destination={ d } />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Missions;
