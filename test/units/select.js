QUnit.module('Select ( #select )', {
  beforeEach: function(){
    $('#select .additional_information').showWhenThis( {
      evaluator_callback: function(){ return $('#select select[name="show_additional_information"]').val() === 'show' },
      change_selector: $('#select [name="show_additional_information"]')
    });
  }
});

QUnit.test( 'Changing the select value hides/shows the display_selector', function( assert ) {
  $('#select [name="show_additional_information"]').val('hide')
  $('#select [name="show_additional_information"]').trigger('change');

  assert.ok( $('#select .additional_information').is(':hidden') );
  
  $('#select [name="show_additional_information"]').val('show')
  $('#select [name="show_additional_information"]').trigger('change');
  
  assert.ok( $('#select .additional_information').is(':visible') );
});
