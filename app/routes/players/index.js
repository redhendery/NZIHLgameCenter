import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      playerAdmirals: this.store.findAll('playerAdmirals'),
      playerReddevils: this.store.findAll('playerReddevils'),
      playerStampede: this.store.findAll('playerStampede'),
      playerSwarm: this.store.findAll('playerSwarm'),
      playerThunder: this.store.findAll('playerThunder')
    });
  },

  // setupController(controller, models) {
  //   controller.setProperties(models);
  //
  //   const playerAdmirals = models.playerAdmirals;
  //   const playerReddevils = models.playerReddevils;
  //   const playerStampede = models.playerStampede;
  //   const playerSwarm = models.playerSwarm;
  //   const playerThunder = models.playerThunder;
  //   const players = [ playerAdmirals, playerReddevils, playerStampede, playerSwarm, playerThunder ];
  //
  //   Ember.RSVP.allSettled(players).then(function(array) {
  //     return players;
  //   });
  //   console.log('players');
  // }
  // setupController(controller, model) {

  //
  //   this._super(controller, players);
  //
  //   controller.set('playerAdmirals', playerAdmirals);
  //   controller.set('playerReddevils', playerReddevils);
  //   controller.set('playerStampede', playerStampede);
  //   controller.set('playerSwarm', playerSwarm);
  //   controller.set('playerThunder', playerThunder);
  //   controller.set('players', players);
  //

  // }
});
