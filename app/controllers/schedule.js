import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['selectedTeam'],
  selectedTeam: null,
  filteredGames: Ember.computed('selectedTeam', 'model', function() {
    let selectedTeam = this.get('selectedTeam');
    let model = this.get('model');

    if (selectedTeam) {
      return model.filterBy('team', selectedTeam);
    } else {
      return model;
    }
  })
});
