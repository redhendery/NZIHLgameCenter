import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['schedule-filter'],
  value: '',

  results: Ember.computed('model','value',function(){
    let result = '';
    if(Ember.isPresent(this.get('value'))){
        result = this.get('model').filterBy('team',this.get('value'));
    } else {
        result = this.get('model');
    }
    return result;
  })
});
