import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('stats');
  this.route('teams');

  this.route('schedule', function() {
    this.route('new');

    this.route('admirals', function() {
      this.route('new');
      // this.route('home');
      // this.route('away');
    });

    this.route('swarm', function() {
      this.route('new');
    });

    this.route('devils', function() {
      this.route('new');
    });

    this.route('stampede', function() {
      this.route('new');
    });

    this.route('thunder', function() {
      this.route('new');
    });
  });

});

export default Router;
