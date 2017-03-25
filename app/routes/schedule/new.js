import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('schedule');
  },

  actions: {

    saveSchedule(newSchedule) {
      newSchedule.save().then(() => this.transitionTo('schedule'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
