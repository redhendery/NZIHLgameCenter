import { moduleForModel, test } from 'ember-qunit';

moduleForModel('players/reddevils', 'Unit | Model | players/reddevils', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
