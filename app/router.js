import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('stats');
  this.route('teams');

  this.route('schedule', function() {
    this.route('new');
  });

  this.route('contact');
});

export default Router;
