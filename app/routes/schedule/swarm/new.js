import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('scheduleSwarm');
  },

  actions: {

    saveScheduleSwarm(newScheduleSwarm) {
      newScheduleSwarm.save().then(() => this.transitionTo('schedule.swarm'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
