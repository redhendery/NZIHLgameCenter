import Ember from 'ember';

export default Ember.Route.extended({

  model() {
    return this.store.createRecord('schedule.admirals');
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
