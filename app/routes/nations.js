import Ember from 'ember';

export default Ember.Route.extend({
  model(){ return $.getJSON("localhost:8888/api/nations"); }
});
