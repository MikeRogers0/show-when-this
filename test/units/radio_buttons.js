QUnit.module('Radio buttons ( #radio_buttons )', {
  beforeEach: function(){
    $('#radio_buttons .additional_information').showWhenThis( {
      evaluator_callback: function(){ return $('#radio_buttons input[name="show_additional_information"]:checked').val() === 'show' },
      change_selector: $('#radio_buttons [name="show_additional_information"]')
    });
  }
});

QUnit.test( 'Checking the hide/show radio, hides/shows the display_selector', function( assert ) {
  $('#radio_buttons [name="show_additional_information"][value="hide"]').prop('checked', true);
  $('#radio_buttons [name="show_additional_information"]').trigger('change');

  assert.ok( $('#radio_buttons .additional_information').is(':hidden') );

  $('#radio_buttons [name="show_additional_information"][value="show"]').prop('checked', true);
  $('#radio_buttons [name="show_additional_information"]').trigger('change');
  
  assert.ok( $('#radio_buttons .additional_information').is(':visible') );
});
