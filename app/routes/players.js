iimport Ember from 'ember';

export default Ember.Route.extend({
  //model(){ return $.getJSON("localhost:8888/api/players"); }
  model(){
    return $.getJSON("https://arjun-final-project.herokuapp.com/players");
    //Note: Ember.$.getJSON(url) returns a promise natively
  }
});
