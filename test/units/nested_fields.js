QUnit.module("Nested fields ( #nested_fields )", {
  beforeEach: function(){
    $('#nested_fields .additional_information').showWhenThis( {
      evaluator_callback: function(){ return $('#nested_fields [name="show_additional_information"]').val() == 'show' },
      change_selector: $('#nested_fields [name="show_additional_information"]')
    });
    
    $('#nested_fields .nested_additional_information').showWhenThis( {
      evaluator_callback: function(){ return $('#nested_fields [name="show_nested_additional_information"]').val() == 'show' },
      change_selector: $('#nested_fields .additional_information [name="show_nested_additional_information"]')
    });
  }
});

QUnit.test( "Nested required fields are changed to data-required when hidden", function( assert ) {
  $('#nested_fields [name="show_additional_information"]').val('hide');
  $('#nested_fields [name="show_additional_information"]').trigger('change');

  assert.ok( $('#nested_fields [name="show_nested_additional_information"]').is(':hidden') );
  assert.ok( $('#nested_fields [name="show_nested_additional_information"]').prop('required') == false );
  assert.ok( $('#nested_fields [name="show_nested_additional_information"]').attr('data-required') == 'required' );
});

QUnit.test( "Nested required fields are changed to required when shown", function( assert ) {
  $('#nested_fields [name="show_additional_information"]').val('show');
  $('#nested_fields [name="show_additional_information"]').trigger('change');

  assert.ok( $('#nested_fields [name="show_nested_additional_information"]').is(':visible') );
  assert.ok( $('#nested_fields [name="show_nested_additional_information"]').prop('required') == true );
  assert.ok( $('#nested_fields [name="show_nested_additional_information"]').attr('data-required') == '' );
});

QUnit.test( "Only shows the nested display_selector when both it and it's parent are showable", function( assert ) {
  $('#nested_fields [name="show_additional_information"]').val('show');
  $('#nested_fields [name="show_additional_information"]').trigger('change');

  assert.ok( $('#nested_fields .nested_additional_information').is(':hidden') );
  
  $('#nested_fields [name="show_nested_additional_information"]').val('show');
  $('#nested_fields [name="show_nested_additional_information"]').trigger('change');

  assert.ok( $('#nested_fields .nested_additional_information').is(':visible') );
});
