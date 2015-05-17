QUnit.module('Checkboxes ( #checkboxes )', {
  beforeEach: function(){
    $('#checkboxes .additional_information').showWhenThis( {
      evaluator_callback: function(){ return $('#checkboxes input[name="show_additional_information"]').prop('checked') },
      change_selector: $('#checkboxes [name="show_additional_information"]')
    });
  }
});

QUnit.test( 'Unchecking/Checking the checkbox, hides/shows the display_selector', function( assert ) {
  $('#checkboxes [name="show_additional_information"]').prop('checked', false);
  $('#checkboxes [name="show_additional_information"]').trigger('change');

  assert.ok( $('#checkboxes .additional_information').is(':hidden') );

  $('#checkboxes [name="show_additional_information"]').prop('checked', true);
  $('#checkboxes [name="show_additional_information"]').trigger('change');
  
  assert.ok( $('#checkboxes .additional_information').is(':visible') );
});
