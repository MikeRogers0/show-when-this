QUnit.module('Callback ( #callback )', {
  beforeEach: function(){
    $('#callback .additional_information').showWhenThis( {
      change_selector: $('#callback [name="show_additional_information"]'),
      changed_callback: function( shown ){
        $('#callback .additional_information').text("Hello World");
      }
    });
  }
});

QUnit.test( 'Having no evaluator_callback set, shows element', function( assert ) {
  assert.ok( $('#callback .additional_information').is(':visible') );

  $('#callback [name="show_additional_information"]').prop('checked', false);
  $('#callback [name="show_additional_information"]').trigger('change');

  assert.ok( $('#callback .additional_information').text("Hello World") );
});

