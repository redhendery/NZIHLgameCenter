import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twitter-reddevils', 'Integration | Component | twitter reddevils', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twitter-reddevils}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twitter-reddevils}}
      template block text
    {{/twitter-reddevils}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
