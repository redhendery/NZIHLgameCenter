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

// Begin Schedule Routes
  this.route('schedule', function() {
    this.route('new');

    this.route('swarm', function() {
      this.route('new');
    });

    this.route('reddevils', function() {
      this.route('new');
    });

    this.route('thunder', function() {
      this.route('new');
    });

    this.route('stampede', function() {
      this.route('new');
    });

    this.route('admirals', function() {
      this.route('new');
    });

  });
// End Schedule Routes

});

export default Router;
