import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('stats');

  // Begin Team Routes
  this.route('teams', function() {
    this.route('swarm');
    this.route('reddevils');
    this.route('thunder');
    this.route('stampede');
    this.route('admirals');
  });
  // End Team Routes
  
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

  this.route('players');
});

export default Router;
