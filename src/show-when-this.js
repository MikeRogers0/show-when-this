/*!
  show-when-this 0.1.0 - 19th Jan 2015
  license: MIT
  @MikeRogers0
*/
(function ( $ ) {
  'use strict';

  $.fn.showWhenThis = function( options_override ) {
    var options = $.extend({
      // A function that'll return true or false, depending on if we want to show the display_selector
      evaluator_callback: function(){
        return true;
      },
      // The element we're watching to see when we need to rerun the evaluator_callback
      change_selector: $('<div />'),
      
      // Private methods - Change at your own risk.
      _display_selector: $(this),
      _change_callback: function(){
        if( options.evaluator_callback() ) {
          options._display_selector.show();
        } else {
          options._display_selector.hide();
        }

        options._display_selector.find('[data-required]:visible').prop('required', true);
        options._display_selector.find('[data-required]:visible').attr('data-required', '');

        options._display_selector.find('[required]:hidden').attr('data-required', 'required');
        options._display_selector.find('[required]:hidden').prop('required', false);
      },
      _on_callback: 'change'
    }, options_override);

    options.change_selector.on(options._on_callback, options._change_callback);
    options.change_selector.trigger(options._on_callback);
  };

}(window.jQuery || window.Zepto || window.$)); // jQuery or jQuery-like library, such as Zepto 
