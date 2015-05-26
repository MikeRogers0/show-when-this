/*!
  show-when-this 1.0.0 - 16th May 2015
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
      changed_callback: function(shown){ 
      },
      
      // Private methods - Change at your own risk.
      _display_selector: $(this),
      _change_callback: function(){
        if( options._display_selector.css('display') === "none" && options.evaluator_callback() ) {
          options._display_selector.show();

          options._toggle_required();
          options.changed_callback(false);
        } else if( options._display_selector.css('display') === "block" && !options.evaluator_callback() ) {
          options._display_selector.hide();

          options._toggle_required();
          options.changed_callback(false);
        }
      },

      // Update HTML5 require fields, so forms don't fail to submit.
      _toggle_required: function(){
        options._display_selector.find('[data-required]:visible').prop('required', true);
        options._display_selector.find('[data-required]:visible').attr('data-required', '');

        options._display_selector.find('[required]:hidden').attr('data-required', 'required');
        options._display_selector.find('[required]:hidden').prop('required', false);
      },

      // The event callback that'll fire _change_callback 
      _on_callback: 'change'
    }, options_override);

    options.change_selector.on(options._on_callback, options._change_callback);
    options.change_selector.trigger(options._on_callback);
  };

}(window.jQuery || window.Zepto || window.$)); // jQuery or jQuery-like library, such as Zepto 
