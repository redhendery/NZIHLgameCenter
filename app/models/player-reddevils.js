import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  team: DS.attr('string'),
  shoots: DS.attr('string'),
  position: DS.attr('string'),
  gp: DS.attr('number'),
  goals: DS.attr('number'),
  assists: DS.attr('number'),
  points: DS.attr('number'),
  pim: DS.attr('number'),
  plusMinus: DS.attr('number'),
  number: DS.attr('number')
});
