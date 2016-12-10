import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artists');
  this.route('songs');
  this.route('genres');
  this.route('game');
  this.route('players');
  this.route('totw');
  this.route('nations');
  this.route('worst');
});

export default Router;
