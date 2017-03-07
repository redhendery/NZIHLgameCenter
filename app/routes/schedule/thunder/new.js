// import Ember from 'ember';
//
// export default Ember.Route.extend({
//
//   model() {
//     return this.store.createRecord('scheduleThunder');
//   },
//
//   actions: {
//
//     saveScheduleThunder(newScheduleThunder) {
//       newScheduleThunder.save().then(() => this.transitionTo('schedule.thunder'));
//     },
//
//     willTransition() {
//       this.controller.get('model').rollbackAttributes();
//     }
//   }
// });
