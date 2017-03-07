// import Ember from 'ember';
//
// export default Ember.Route.extend({
//
//   model() {
//     return this.store.createRecord('scheduleReddevils');
//   },
//
//   actions: {
//
//     saveScheduleReddevils(newScheduleReddevils) {
//       newScheduleReddevils.save().then(() => this.transitionTo('schedule.reddevils'));
//     },
//
//     willTransition() {
//       this.controller.get('model').rollbackAttributes();
//     }
//   }
// });
