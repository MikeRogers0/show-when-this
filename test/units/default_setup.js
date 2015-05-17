QUnit.module("Default setup ( #default_settings )", {
  beforeEach: function(){
    $('#default_settings .additional_information').showWhenThis( {
      change_selector: $('#default_settings [name="show_additional_information"]')
    });
  }
});

QUnit.test( "Having no evaluator_callback set, shows element", function( assert ) {
  assert.ok( $('#default_settings .additional_information').is(':visible') );

  $('#default_settings [name="show_additional_information"]').prop('checked', false);
  $('#default_settings [name="show_additional_information"]').trigger('change');

  assert.ok( $('#default_settings .additional_information').is(':visible') );
});
