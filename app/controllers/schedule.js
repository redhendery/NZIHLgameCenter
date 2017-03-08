import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByTeam(param) {
      if (param !== '') {
        return this.get('store').query('schedule', {team: param});
      } else {
        this.get('store').findAll('schedule');
      }
    }
  }
});
