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
      orderBy: 'home',
      startAt: params.home,
      endAt: params.away+"\uf8ff"
    });
  }

});
