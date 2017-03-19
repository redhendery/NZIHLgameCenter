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
  this.route('teams');

  this.route('swarm', { path: '/teams/swarm'});
  this.route('reddevils', { path: 'teams/reddevils' });
  this.route('stampede', { path: 'teams/stampede' });
  this.route('thunder', { path: 'teams/thunder' });
  this.route('admirals', { path: 'teams/admirals' });
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

  // Begin Player Routes
  this.route('players', function() {
    this.route('admirals', function() {});
    this.route('swarm', function() {});
    this.route('thunder', function() {});
    this.route('stampede', function() {});
    this.route('reddevils', function() {});
  });
  // End Player Routes
});

export default Router;
