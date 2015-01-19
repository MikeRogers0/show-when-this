[![Build Status](https://travis-ci.org/MikeRogers0/show-when-this.svg?branch=master)](https://travis-ci.org/MikeRogers0/show-when-this)
# show-when-this
jQuery plugin to manage conditional showing/hiding of elements.

## Usage

```html
<div id="radio_buttons">
  <input type="radio" name="show_additional_information" value="show" />
  <input type="radio" name="show_additional_information" value="hide" checked="checked" />
  <div class="additional_information">
    Showing #radio_buttons .additional_information
  </div>
</div>

<script>
  $('#radio_buttons .additional_information').showWhenThis( {
    evaluator_callback: function(){ return $('#radio_buttons input[name="show_additional_information"]:checked').val() == '1' },
    change_selector: $('[name="show_additional_information"]')
  });
</script>
```

### Options
* `evaluator_callback` - A function that should return true or false. When true is returned the display_selector will be shown, otherwise it'll be hidden.
* `display_selector` - A selector pointing to the element you want to show/hide.

## Installing

Copy the `show-when-this.min.js` file into your project and link it up.

## Getting going with Zepto

If you are using this plugin with [Zepto](http://zeptojs.com/) instead of [jQuery](http://jquery.com/), make sure you include the modules `zepto event data selector` in your build.

## Thanks

[@Krinkle](https://github.com/Krinkle/travis-ci-node-and-browser-qunit) - For an good example on how to setup CI for JS projects.
