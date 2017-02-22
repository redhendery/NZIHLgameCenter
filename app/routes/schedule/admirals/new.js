import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('scheduleAdmirals');
  },

  actions: {

    saveScheduleAdmirals(newScheduleAdmirals) {
      newScheduleAdmirals.save().then(() => this.transitionTo('schedule.admirals'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
