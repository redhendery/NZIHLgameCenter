import DS from 'ember-data';

export default DS.Model.extend({
  leagueGame: DS.attr('string'),
  home: DS.attr('string'),
  away: DS.attr('string'),
  venue: DS.attr('string'),
  date: DS.attr('string'),
  homeLogo: DS.attr('string'),
  awayLogo: DS.attr('string')
});
