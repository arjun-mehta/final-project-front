import Ember from 'ember';

export default Ember.Route.extend({
  model(){ return $.getJSON('https://arjun-final-project.herokuapp.com/api/players/worst')}
});
