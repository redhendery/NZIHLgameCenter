import Ember from 'ember';

var teamsData = [
  {
    id: 'canterbury-red-devils',
    title: 'Canterbury Red Devils',
    slug: 'Canterbury Red Devils',
    players: [1, 2, 3],
  },
  {
    id: 'west-auckland-admirals',
    title: 'West Auckland Admirals',
    slug: 'West Auckland Admirals',
    players: [4, 5, 6],
  },
  {
    id: 'botany-swarm',
    title: 'Botany Swarm',
    slug: 'Botany Swarm',
    players: [7, 8, 9],
  },
];

export default Ember.Route.extend({

  model() {
    return teamsData;
  },

});
