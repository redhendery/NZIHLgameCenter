import Ember from "ember";

export default Ember.Component.extend({

  tagName: 'select',
  schedule: [],
  book: null,

  change(event) {
    const selectedScheduleId = event.target.value;
    const selectedSchedule = this.get('schedule').find((record) => record.id === selectedScheduleId);

    this.sendAction('action', selectedSchedule, this.get('schedule'));
  }
});
