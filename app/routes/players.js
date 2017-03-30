import Ember from 'ember';

const playersData = [
  {
    id: 1,
    name: 'allyssa',
    team: 'Canterbury Red Devils',
  },
  {
    id: 2,
    name: 'Belle',
    team: 'Canterbury Red Devils',
  },
  {
    id: 3,
    name: 'Carter',
    team: 'Canterbury Red Devils',
  },
  {
    id: 4,
    name: 'Derek',
    team: 'West Auckland Admirals',
  },
  {
    id: 5,
    name: 'Erik',
    team: 'West Auckland Admirals',
  },
  {
    id: 6,
    name: 'Frank',
    team: 'West Auckland Admirals',
  },
  {
    id: 7,
    name: 'Gaurav',
    team: 'Botany Swarm',
  },
  {
    id: 8,
    name: 'Henry',
    team: 'Botany Swarm',
  },
  {
    id: 9,
    name: 'Igor',
    team: 'Botany Swarm',
  },
];

export default Ember.Route.extend({

  model() {
    return playersData;
  },

});
