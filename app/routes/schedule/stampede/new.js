import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('scheduleStampede');
  },

  actions: {

    saveScheduleStampede(newScheduleStampede) {
      newScheduleStampede.save().then(() => this.transitionTo('schedule.stampede'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
