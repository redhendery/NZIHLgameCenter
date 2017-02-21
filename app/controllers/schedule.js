import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['filter', 'limit', 'team'],
  filter: '',
  limit: 'all',
  team: '',

  limitAll: Ember.computed.equal('limit', 'all'),

  filteredList: Ember.computed('model.@each.team', 'filter', function() {

    let results = this.get('model');
    const query = this.get('filter');

    if (!!query) {
      const regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');

      results = results.filter((item) => item.get('team').match(regex));
    }

    return results.sortBy('team');
  })

});
