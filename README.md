# Show when this
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

The above work a bit like this gif:

<img src="https://raw.githubusercontent.com/MikeRogers0/show-when-this/master/examples/show-when-this-radio-buttons.gif" alt="Radio buttons example" style="border:0;">

You can find other [usage examples](https://github.com/MikeRogers0/show-when-this/tree/master/examples) in the repo.

### Options
* `evaluator_callback` - A function that should return true or false. When true the element the plugin is attached to will be shown, otherwise it'll be hidden.
* `change_selector` - The selector that when changed will trigger the rerunning of evaluator_callback.

## Installing

Copy the `show-when-this.min.js` file into your project and link it up.

### Gemfile

It's setup on [Rails Assets](https://rails-assets.org/), just add the following to your `Gemfile` to use it in rails.

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

###

```
grunt uglify:showWhenThis
```

## Badges
[![Build Status](https://travis-ci.org/MikeRogers0/show-when-this.svg?branch=master)](https://travis-ci.org/MikeRogers0/show-when-this)
[![Codacy Badge](https://www.codacy.com/project/badge/f83d2a3a47cc4860a71969875dba8f31)](https://www.codacy.com/public/me_8/show-when-this)
[![PullReview stats](https://www.pullreview.com/github/MikeRogers0/show-when-this/badges/master.svg?)](https://www.pullreview.com/github/MikeRogers0/show-when-this/reviews/master)
[![Code Climate](https://codeclimate.com/github/MikeRogers0/show-when-this/badges/gpa.svg)](https://codeclimate.com/github/MikeRogers0/show-when-this)
[![Test Coverage](https://codeclimate.com/github/MikeRogers0/show-when-this/badges/coverage.svg)](https://codeclimate.com/github/MikeRogers0/show-when-this)

## Thanks

[@Krinkle](https://github.com/Krinkle/travis-ci-node-and-browser-qunit) - For an good example on how to setup CI for JS projects.
