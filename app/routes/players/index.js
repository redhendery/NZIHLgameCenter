import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('players');
  // }
  model: function() {
    return this.store.findAll('players', {
      orderBy: 'name'
    });
  }
});
