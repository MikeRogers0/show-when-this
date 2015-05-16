# Show when this

jQuery plugin to manage conditional showing/hiding of elements.

[![Build Status](https://travis-ci.org/MikeRogers0/show-when-this.svg?branch=master)](https://travis-ci.org/MikeRogers0/show-when-this)
[![Codacy Badge](https://www.codacy.com/project/badge/331e24b1543945779731dc9fb465da4d)](https://www.codacy.com/app/me_8/show-when-this)
[![PullReview stats](https://www.pullreview.com/github/MikeRogers0/show-when-this/badges/master.svg?)](https://www.pullreview.com/github/MikeRogers0/show-when-this/reviews/master)
[![Code Climate](https://codeclimate.com/github/MikeRogers0/show-when-this/badges/gpa.svg)](https://codeclimate.com/github/MikeRogers0/show-when-this)
[![Test Coverage](https://codeclimate.com/github/MikeRogers0/show-when-this/badges/coverage.svg)](https://codeclimate.com/github/MikeRogers0/show-when-this)

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

The above work a bit like this gif:

<img src="https://raw.githubusercontent.com/MikeRogers0/show-when-this/master/examples/show-when-this-radio-buttons.gif" alt="Radio buttons example" style="border:0;">

In the above example, `$('#radio_buttons .additional_information')` is shown when the `evaluator_callback` returns true. The `evaluator_callback` is checked every time this  `change_selector` recieves a "change" event. Simples :)

You can find other [usage examples](https://github.com/MikeRogers0/show-when-this/tree/master/examples) in the repo.

### Options
* `evaluator_callback` - A function that should return true or false. When true the element the plugin is attached to will be shown, otherwise it'll be hidden.
* `change_selector` - The selector that when changed will trigger the rerunning of evaluator_callback.

## Installing

If you want to want to use show-when-this without a package manager just copy the `show-when-this.min.js` file into your project, link it up & you're good to go.

### Rails

If you want to use show-this-when in your rails project, you can! It's setup on [Rails Assets](https://rails-assets.org/), so just add the following to your `Gemfile` to use it in rails.

```ruby
source 'https://rails-assets.org' do
  gem 'rails-assets-show-when-this'
end
```

Then include it in your `application.js`

```js
//= require show-when-this
```

## Getting going with Zepto

If you are using this plugin with [Zepto](http://zeptojs.com/) instead of [jQuery](http://jquery.com/), make sure you include the modules `zepto event data selector` in your build.

## Testing and building

### Setup the enviroment

Install npm, then run: 

```
npm install -g grunt-cli
npm install

```

### Run the tests (Qunit)

```
grunt qunit:all
```

Or drag and drop the files from /test/*.html into your browser.

### Build minified file

```
grunt uglify:showWhenThis
```

## Thanks

[@Krinkle](https://github.com/Krinkle/travis-ci-node-and-browser-qunit) - For an good example on how to setup CI for JS projects.
