import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    limit: { refreshModel: true, as: 'schedule' },
    team: { refreshModel: true, as: 'other-team' },
  },

  model(params) {

    if (params.limit === 'all') {
      return this.store.findAll('schedule');
    }

    return this.store.query('schedule', {
      orderBy: 'name',
      startAt: params.team,
      endAt: params.letter+"\uf8ff"
    });
  }

});
